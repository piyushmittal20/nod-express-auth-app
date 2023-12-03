import * as userDatalayer from '../Auth/auth.datalayer'
import { CustomError } from '../Middleware/error.middleware'

export const userDetails = async function userDetails(userId: any) {
    const findQuery = {}
    const options = {
        findById: true,
        userId
    }

    try {
        const user = await userDatalayer.findUseryByQuery(findQuery, options);

        if (!user) {
            throw new CustomError(null, `No user found with this id ${options.userId}`)
        }

        return user;
    } catch (error) {
        if (error instanceof Error) {
            throw new CustomError(error);
        } else {
            throw new CustomError(new Error(String(error)));
        }
    }
}