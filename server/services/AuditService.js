const addAuditInfoOnCreation = (user) => (entity) => {
    entity.audit = {
        createdOn: Date.now(),
        createdBy: user.email,
        lastModifiedOn: Date.now(),
        lastModifiedBy: user.email,
    };
    return entity;
};

const updateAuditInfoOnUpdate = (user) => (entity) => {
    entity.audit.lastModifiedOn = Date.now();
    return entity;
};

const updateAuditInfoOnDeletion = (user) => (entity) => {
    entity.audit.deletedOn = Date.now();
    return entity;
};

export default (user) => ({
    addAuditInfoOnCreation: addAuditInfoOnCreation(user),
    updateAuditInfoOnUpdate: updateAuditInfoOnUpdate(user),
    updateAuditInfoOnDeletion: updateAuditInfoOnDeletion(user),
});
