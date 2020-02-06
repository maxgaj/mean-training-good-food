import AuditService from "./AuditService";

const getAll = (repository) => () => repository.getAll();

const getById = (repository) => (id) => repository.getById(id);

const create = (repository, auditService) => (entity) => repository.create(auditService.addAuditInfoOnCreation(entity));

const update = (repository, auditService) =>
    (id, patcher) => repository.getById(id)
        .then(patcher)
        .then(entity => repository.update(id, auditService.updateAuditInfoOnUpdate(entity)));

const remove = (repository, auditService) =>
    (id) => repository.getById(id)
        .then(entity => repository.update(id, auditService.updateAuditInfoOnDeletion(entity)));


export default (repository, user) => {
    const auditService = AuditService(user);
    return {
        getAll: getAll(repository),
        getById: getById(repository),
        create: create(repository, auditService),
        update: update(repository, auditService),
        remove: remove(repository, auditService),
    };
};

