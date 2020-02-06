export const isValidForCreation = (req, res, next) => {
    const errors = [];

    if (!req.body.email) {
        errors.push({ level: 'error', code: 'AUTH0001', message: 'email is mandatory' });
    }

    if (!req.body.password) {
        errors.push({ level: 'error', code: 'AUTH0002', message: 'password is mandatory' });
    }

    if (errors.length > 0) {
        res.status(400).send(errors);
    } else {
        next();
    }
};
