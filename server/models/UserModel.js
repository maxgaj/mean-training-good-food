import {Schema, model} from 'mongoose';

const schema = new Schema({
    name: {
        first: String,
        last: String,
        user: String,
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: [String]
});

export default model('User', schema);
