import express from 'express';
import USERCONSTANTS from './auth.constants'
import {validationMiddlware} from '../Middleware/validation.middleware'
import * as userController from './auth.controller';
import {createAccountDto, loginDto} from './auth.dto'

const router = express.Router();

router.post(`/${USERCONSTANTS.paths.auth}/${USERCONSTANTS.paths.createAccount}`, validationMiddlware(createAccountDto, 'body'), userController.createAccount)
router.post(`/${USERCONSTANTS.paths.auth}/${USERCONSTANTS.paths.login}`, validationMiddlware(loginDto, 'body'), userController.login)


export {router as authRoutes};