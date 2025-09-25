import { Router } from 'express';
import {
  getUserByIdController,
  getUsersByAgeRangeController,
  updateUserController,
  cleanupInactiveUsersController
} from '../controllers/userController';

const usersRouter = Router();

usersRouter.get('/:id', getUserByIdController);

export default usersRouter;