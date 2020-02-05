import {getUsersByEmail} from "../services/UserService";

export const isValidForCreation = async (req, res, next) => {
    const user = req.body;
    const errors = [];

    if (!user.email) {
        errors.push({level: 'error', code: 'USER0001', message: 'email is mandatory' });
    }

    const usersWithSameEmail = await getUsersByEmail(user.email);
    if (usersWithSameEmail.length > 0){
        errors.push({level: 'error', code: 'USER0002', message: 'email should be unique' });
    }

    if (!user.password) {
        errors.push({level: 'error', code: 'USER0003', message: 'password is mandatory' });
    }

    if (!user.name ||
        (!user.name.user && (!user.name.first || !user.name.last))) {
        errors.push({level: 'error', code: 'USER0004', message: '(firstname and lastname) or username are mandatory'});
    }

    if (errors.length > 0) {
        res.status(400).send(errors);
    } else {
        next();
    }
};

export const isValidForEdition = async (req, res, next) => {
    const user = req.body;
    const errors = [];

    if (user.email) {
        const usersWithSameEmail = await getUsersByEmail(user.email);
        if (usersWithSameEmail.length > 0){
            errors.push({level: 'error', code: 'USER0002', message: 'email should be unique' });
        }
    }

    if (user.name &&
        (!user.name.user && (!user.name.first || !user.name.last))) {
        errors.push({level: 'error', code: 'USER0004', message: '(firstname and lastname) or username are mandatory'});
    }

    if (errors.length > 0) {
        res.status(400).send(errors);
    } else {
        next();
    }
};
