import { Request, Response } from "express";
import * as _ from 'lodash';
import * as STATUS from 'http-status';
import * as authService from './user.service'

export const userDetails = async(req: Request, res: Response) => {
    try{
        const userId: any = (req as any).userId;
        const user = await authService.userDetails(userId);

        res.status(STATUS.OK).json({
            user: user
        })

    }catch(error){
        res.status(_.get(error, 'options.statusCode', STATUS.BAD_REQUEST)).json({
            error_code: _.get(error, 'name'),
			error_description: _.get(error, 'description'),
			extraData: JSON.stringify(_.get(error, 'options')),
        })
    }
}