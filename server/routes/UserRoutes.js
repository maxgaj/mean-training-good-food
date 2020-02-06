import {sendPromiseResponse} from '../helper/ResponseHelper';
import {hasPermission} from "../validators/PermissionValidator";
import {isValidForCreation, isValidForEdition} from "../validators/UserValidator";
import {encrypt} from '../helper/EncryptionHelper';

const encryptPassword = (req, res, next) => {
    if (req.body.password) req.body.password = encrypt(req.body.password);
    next();
};

export default (router) => {
    router.get('/users', hasPermission('USER_READ_ALL'), (req, res) => sendPromiseResponse(req, res, req.service.user.getUsers()));

    router.get('/users/:id', (req, res) => sendPromiseResponse(req, res, req.service.user.getUserById(req.params.id)));

    router.post('/users',
        hasPermission('USER_CREATE'),
        isValidForCreation,
        encryptPassword,
        (req, res) => sendPromiseResponse(req, res, req.service.user.createUsers(req.body)));

    router.patch('/users/:id',
        isValidForEdition,
        encryptPassword,
        (req, res) => sendPromiseResponse(req, res, req.service.user.patchUser(req.params.id, req.body)));

    router.delete('/users/:id', (req, res) => sendPromiseResponse(req, res, req.service.user.removeUser(req.params.id)));
}
