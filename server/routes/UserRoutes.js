import {sendPromiseResponse} from '../helper/ResponseHelper';
import {createUsers, getUsers, getUserById, removeUser, patchUser} from "../services/UserService";
import {isValidForCreation, isValidForEdition} from "../validators/UserValidator";
import {encrypt} from '../helper/EncryptionHelper';

const encryptPassword = (req, res, next) => {
    if (req.body.password) req.body.password = encrypt(req.body.password);
    next();
};

export default (router) => {
    router.get('/users', (req, res) => sendPromiseResponse(req, res, getUsers()));

    router.get('/users/:id', (req, res) => sendPromiseResponse(req, res, getUserById(req.params.id)));

    router.post('/users',
        isValidForCreation,
        encryptPassword,
        (req, res) => sendPromiseResponse(req, res, createUsers(req.body)));

    router.patch('/users/:id',
        isValidForEdition,
        encryptPassword,
        (req, res) => sendPromiseResponse(req, res, patchUser(req.params.id, req.body)));

    router.delete('/users/:id', (req, res) => sendPromiseResponse(req, res, removeUser(req.params.id)));
}
