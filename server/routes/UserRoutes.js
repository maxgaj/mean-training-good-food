import {sendPromiseResponse} from '../helper/ResponseHelper';
import {createUsers, getUsers} from "../services/UserService";
import {isValidForCreation} from "../validators/UserValidator";
import {encrypt} from '../helper/EncryptionHelper';

const encryptPassword = (req, res, next) => {
    req.body.password = encrypt(req.body.password);
    next();
};

export default (router) => {
    router.get('/users', (req, res) => sendPromiseResponse(req, res, getUsers()));

    router.put('/users',
        isValidForCreation,
        encryptPassword,
        (req, res) => sendPromiseResponse(req, res, createUsers(req.body)));
}
