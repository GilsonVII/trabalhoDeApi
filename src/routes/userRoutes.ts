import { Router } from 'express';
import {
  getUserByIdController,
  getUsersByAgeRangeController,
  updateUserController,
  cleanupInactiveUsersController
} from '../controllers/userController';

const usersRouter = Router();



export default usersRouter;