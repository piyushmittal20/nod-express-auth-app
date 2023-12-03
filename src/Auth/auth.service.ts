import {CustomError} from '../Middleware/error.middleware';
import * as userUtil from './auth.util';
import * as userDatalayer from './auth.datalayer';
import USERCONSTANTS from './auth.constants';
import jwt from 'jsonwebtoken';

export const createAccount = async function createAccount(createAccountObj: any) {
    const password = createAccountObj.password;

    try{
        const hashedPass = await userUtil.passwordEncryption(password);

        const user = await userDatalayer.createUser({
            firstName: createAccountObj.firstName,
            lastName: createAccountObj.lastName,
            username: createAccountObj.username,
            email: createAccountObj.email,
            password: hashedPass,
        })

        return user.id;
    }catch(error){
        if (error instanceof Error) {
            throw new CustomError(error);
        } else {
            throw new CustomError(new Error(String(error)));
        }
    }
}

export const login = async function login(loginObj: any) {
    try{
        const findQuery = {
            where: { email: loginObj.email }
        };

        const user: any = await userDatalayer.findUseryByQuery(findQuery, {})

        if(!user){
            throw new CustomError(null, 'Invalid Email!!');
        }

        if(!userUtil.passwordCompare(loginObj.password, user.password)){
            throw new CustomError(null, 'Invalid password!!');
        }

        const token = jwt.sign({ userId: user.id }, USERCONSTANTS.jwtSecret, { expiresIn: '1h' });

        return token;

    } catch(error){
        if (error instanceof Error) {
            throw new CustomError(error);
        } else {
            throw new CustomError(new Error(String(error)));
        }
    }
}