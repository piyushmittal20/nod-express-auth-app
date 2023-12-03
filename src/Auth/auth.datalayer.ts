import { User } from "../Models/userSchema"
import { CustomError } from "../Middleware/error.middleware"

export const createUser = async function createUser(object: any){
    try{
        const newUser = await User.create(object);
        return newUser;
    } catch(error){
        throw new CustomError(new Error(String(error)))
    }
}

export const findUseryByQuery = async function findUseryByQuery(findQuery: any, options: any){
    let user;

    try{
        if(options.findById){
            user = User.findByPk(options.userId)
        } else {
            user = User.findOne(findQuery)
        }
        return await user;

    } catch(error){
        throw new CustomError(new Error(String(error)))
    }
}