import CrudRepository from "./CrudRepository";
import User from "../models/UserModel";

const getByEmail = (email) => User.find({email});

export default {
    ...CrudRepository(User),
    getByEmail
}
