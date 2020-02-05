import {
    addAuditInfoOnCreation,
    updateAuditInfoOnDeletion,
    updateAuditInfoOnUpdate
} from "../services/AuditService";

const getAll = (repository) => () => repository.getAll();

const getById = (repository) => (id) => repository.getById(id);

const create = (repository) => (entity) => repository.create(addAuditInfoOnCreation(entity));

const update = (repository) =>
    (id, patcher) => repository.getById(id)
        .then(patcher)
        .then(entity => repository.update(id, updateAuditInfoOnUpdate(entity)));

const remove = (repository) =>
    (id) => repository.getById(id)
        .then(entity => repository.update(id, updateAuditInfoOnDeletion(entity)));


export default (repository) => ({
    getAll: getAll(repository),
    getById: getById(repository),
    create: create(repository),
    update: update(repository),
    remove: remove(repository)
});

