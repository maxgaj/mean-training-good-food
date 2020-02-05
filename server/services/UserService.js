import {omit} from 'ramda';

import UserRepository from "../repositories/UserRepository";

const omitPassword = (user) => omit(['password'], user);
const omitAllPassword = (users) => users.map(omitPassword);

export const getUsers = () => UserRepository.getAll().then(omitAllPassword);

export const createUsers = (user) => UserRepository.create(user).then(omitPassword);

export const getUsersByEmail = (email) => UserRepository.getByEmail(email);

