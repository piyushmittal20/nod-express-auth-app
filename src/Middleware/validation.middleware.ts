import { Request, Response, NextFunction } from "express"
import {Schema, ValidationResult} from 'joi'

export const validationMiddlware = (schema: Schema, type: string | 'body' | 'query' = 'body') => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const data = req[type as keyof Request];

        const {error}: ValidationResult = schema.validate(data);

        if(error){
            res.status(400).json({ message: error.details[0].message });
        } else{
            next()
        }
    }
}