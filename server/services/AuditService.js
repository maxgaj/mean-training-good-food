export const addAuditInfoOnCreation = (entity) => {
    entity.audit = {
        createdOn: Date.now(),
        lastModifiedOn: Date.now(),
    };
    return entity;
};

export const updateAuditInfoOnUpdate = (entity) => {
    entity.audit.lastModifiedOn = Date.now();
    return entity;
};

export const updateAuditInfoOnDeletion = (entity) => {
    entity.audit.deletedOn = Date.now();
    return entity;
};
