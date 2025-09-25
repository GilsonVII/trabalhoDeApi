import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controllers/postController';

const postsRouter = Router();

//exercício 3
postsRouter.post('/', createPostController);
//exercício 5
postsRouter.patch('/:id', patchPostController);

export default postsRouter;