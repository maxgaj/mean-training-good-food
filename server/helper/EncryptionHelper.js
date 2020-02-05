import bcrypt from 'bcryptjs';

export const encrypt = (stringToEncrypt) => bcrypt.hashSync(stringToEncrypt, 10);

export const validate = (stringToValidate, hash) => bcrypt.compareSync(stringToValidate, hash);
