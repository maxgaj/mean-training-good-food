import {omit} from 'ramda';

import UserRepository from "../repositories/UserRepository";
import CrudService from "./CrudService";

const userCrudService = CrudService(UserRepository);

const omitPassword = (user) => omit(['password'], user);
const omitAllPassword = (users) => users.map(omitPassword);

export const getUsers = () => userCrudService.getAll().then(omitAllPassword);

export const createUsers = (user) => userCrudService.create(user).then(omitPassword);

export const getUsersByEmail = (email) => UserRepository.getByEmail(email);

