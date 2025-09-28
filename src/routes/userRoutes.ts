import { Router } from 'express';
import {
  getUserByIdController,
  getUsersByAgeRangeController,
  updateUserController,
  cleanupInactiveUsersController
} from '../controllers/userController';

const usersRouter = Router();

//exercício 2
usersRouter.get('/age-range', getUsersByAgeRangeController);
//exercício 7
usersRouter.delete('/cleanup-inactive', cleanupInactiveUsersController);
//exercício 1
usersRouter.get('/:id', getUserByIdController);
//exercício 4
usersRouter.put('/:id', updateUserController);

export default usersRouter;