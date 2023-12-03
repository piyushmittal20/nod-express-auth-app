import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import USERCONSTANTS from '../Auth/auth.constants'

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    jwt.verify(token, USERCONSTANTS.jwtSecret, (err: any, user: any) => {
        if (err) {
            res.status(403).json({ message: 'Forbidden' });
            return;
        }
        (req as any).userId = user.userId;
        next();
    });
};