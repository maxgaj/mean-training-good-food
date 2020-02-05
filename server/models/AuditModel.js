import {Schema} from 'mongoose';

export const AuditSchema = new Schema({
    createdOn: Date,
    createdBy: String,
    lastModifiedOn: Date,
    lastModifiedBy: String,
    deletedOn: Date,
    deletedBy: String,
});
