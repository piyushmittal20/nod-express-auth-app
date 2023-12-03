import { Request, Response } from "express";
import * as _ from 'lodash';
import * as STATUS from 'http-status';
import * as userService from './auth.service'

export const createAccount = async(req: Request, res: Response) => {
    try{

        const body = req.body;
        await userService.createAccount(body);

        res.status(STATUS.OK).json({})

    }catch(error){
        res.status(_.get(error, 'options.statusCode', STATUS.BAD_REQUEST)).json({
            error_code: _.get(error, 'name'),
			error_description: _.get(error, 'description'),
			extraData: JSON.stringify(_.get(error, 'options')),
        })
    }
} 

export const login = async(req: Request, res: Response) => {
    try{

        const body = req.body;
        const token = await userService.login(body)

        res.status(STATUS.OK).json({
            authenticationToken: token
        })

    }catch(error){
        res.status(_.get(error, 'options.statusCode', STATUS.BAD_REQUEST)).json({
            error_code: _.get(error, 'name'),
			error_description: _.get(error, 'description'),
			extraData: JSON.stringify(_.get(error, 'options')),
        })
    }
}