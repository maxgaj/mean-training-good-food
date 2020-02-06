import {omit} from 'ramda';

import UserRepository from "../repositories/UserRepository";
import CrudService from "./CrudService";

const omitPassword = (user) => omit(['password'], user);
const omitAllPassword = (users) => users.map(omitPassword);

const applyPatch = (patch) => (user) => {
    if (patch.name) user.name = patch.name;
    if (patch.email) user.email = patch.email;
    if (patch.password) user.password = patch.password;
    if (patch.role) user.role = patch.role;
    return user;
};

const getUsers = (crudService) => () => crudService.getAll().then(omitAllPassword);

const getUserById = (crudService) => (id) => crudService.getById(id).then(omitPassword);

const createUsers = (crudService) => (user) => crudService.create(user).then(omitPassword);

const patchUser = (crudService) => (id, patch) => crudService.update(id, applyPatch(patch)).then(omitPassword);

const removeUser = (crudService) => (id) => crudService.remove(id).then(omitPassword);

const getUsersByEmail = (email) => UserRepository.getByEmail(email);

export default (loggedInUser) => {
    const crudService = CrudService(UserRepository, loggedInUser);
    return {
        getUsers: getUsers(crudService),
        getUserById: getUserById(crudService),
        createUsers: createUsers(crudService),
        patchUser: patchUser(crudService),
        removeUser: removeUser(crudService),
        getUsersByEmail: getUsersByEmail,
    };
};

