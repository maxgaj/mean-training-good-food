import {sign} from 'jsonwebtoken';
import {omit} from "ramda";

import {getUsersByEmail} from "./UserService";
import {validate} from "../helper/EncryptionHelper";
import {SECRET} from "../configuration/configuration";

export const authenticate = ({email, password}) => {
    return getUsersByEmail(email)
        .then(user => {
            if (validate(password, user[0].password)) {
                return sign(omit(['password'], user), SECRET);
            } else {
                throw new Error('Authentication failed');
            }
        });
};
