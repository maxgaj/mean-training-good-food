import {Schema, model} from 'mongoose';
import {AuditSchema} from "./AuditModel";

const schema = new Schema({
    name: {
        first: String,
        last: String,
        user: String,
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: [String],
    audit: AuditSchema
});

export default model('User', schema);
