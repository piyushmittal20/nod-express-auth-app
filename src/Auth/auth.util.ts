import bcrypt from 'bcrypt'
import USERCONSTANTS from './auth.constants'
import {CustomError} from '../Middleware/error.middleware'

export const passwordEncryption = async(password: any) => {
    if(!password){
        throw new Error("No password is passed to hash!!")
    }

    try{
        const hashedPass = await bcrypt.hash(password, USERCONSTANTS.saltRounds);

        return hashedPass;
    } catch(error){
        if (error instanceof Error) {
            throw new CustomError(error);
        } else {
            throw new CustomError(new Error(String(error)));
        }
    }
}

export const passwordCompare = async(password: any, hashedPass: any) => {
    if(!password && !hashedPass){
        throw new Error("No password is passed to decrypt!!")
    }

    try{

        return await bcrypt.compare(password, hashedPass)

    } catch(error){
        if (error instanceof Error) {
            throw new CustomError(error);
        } else {
            throw new CustomError(new Error(String(error)));
        }
    }
}