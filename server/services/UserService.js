import UserRepository from "../repositories/UserRepository";

export const getUsers = () => UserRepository.getAll();

export const createUsers = (user) => UserRepository.create(user);

export const getUsersByEmail = (email) => UserRepository.getByEmail(email);

