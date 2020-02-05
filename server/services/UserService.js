import {omit} from 'ramda';

import UserRepository from "../repositories/UserRepository";
import CrudService from "./CrudService";

const userCrudService = CrudService(UserRepository);

const omitPassword = (user) => omit(['password'], user);
const omitAllPassword = (users) => users.map(omitPassword);

const applyPatch = (patch) => (user) => {
    if (patch.name) user.name = patch.name;
    if (patch.email) user.email = patch.email;
    if (patch.password) user.password = patch.password;
    if (patch.role) user.role = patch.role;
    return user;
};

export const getUsers = () => userCrudService.getAll().then(omitAllPassword);

export const getUserById = (id) => userCrudService.getById(id).then(omitPassword);

export const createUsers = (user) => userCrudService.create(user).then(omitPassword);

export const patchUser = (id, patch) => userCrudService.update(id, applyPatch(patch)).then(omitPassword);

export const removeUser = (id) => userCrudService.remove(id).then(omitPassword);

export const getUsersByEmail = (email) => UserRepository.getByEmail(email);

