import express from 'express';
import AUTHCONSTANTS from './user.constants'
import * as authController from './user.controller'
import { authenticateToken } from '../Middleware/auth.middleware';

const router = express.Router();

router.get(`/${AUTHCONSTANTS.paths.user}/${AUTHCONSTANTS.paths.userDetails}`, authenticateToken, authController.userDetails)


export {router as userRoutes};