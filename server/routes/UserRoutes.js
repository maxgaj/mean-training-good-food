import {sendPromiseResponse} from '../helper/ResponseHelper';
import {createUsers, getUsers} from "../services/UserService";
import {isValidForCreation} from "../validators/UserValidator";

export default (router) => {
    router.get('/users', (req, res) => sendPromiseResponse(req, res, getUsers()));
    router.put('/users', isValidForCreation, (req, res) => sendPromiseResponse(req, res, createUsers(req.body)));
}
