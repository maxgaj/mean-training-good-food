import {MONGO_DB} from '../configuration/configuration';
import {connect} from 'mongoose';

connect(MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true, keepAliveInitialDelay: 300000});

const toObject = (item) => item.toObject();
const listToObject = (list) => list.map(toObject);

const getAll = (model) => () => model.find().then(listToObject);
const getById = (model) => (id) => model.findOne({ _id: id }).then(toObject);
const getBy = (model) => (query) => model.find(query).then(listToObject);
const update = (model) => (entity) => model.findOneAndUpdate(entity.id, entity, { new: true });
const create = (model) => (entity) => new model(entity).save().then(toObject);
const remove = (model) => (id) => model.deleteOne({ _id: id });

export default (model) => ({
    getAll: getAll(model),
    getById: getById(model),
    getBy: getBy(model),
    update: update(model),
    create: create(model),
    remove: remove(model)
});
