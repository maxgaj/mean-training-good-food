import {rolesToPermissions} from '../configuration/roles';

function doesRolesHavePermission(roles, permission) {
    return roles.some(role => rolesToPermissions[role][permission]);
}

export const hasPermission = (permission) => (req, res, next) => {
    if (doesRolesHavePermission(req.user.role, permission)) {
        next();
    }
    else {
        res.status(401).send({message: 'You do not have permission to access that resource'});
    }
};
