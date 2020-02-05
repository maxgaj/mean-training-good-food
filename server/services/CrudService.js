import {addAuditInfoOnCreation} from "../services/AuditService";

const getAll = (repository) => () => repository.getAll();

const create = (repository) => (entity) => repository.create(addAuditInfoOnCreation(entity));

export default (repository) => ({
    getAll: getAll(repository),
    create: create(repository)
});

