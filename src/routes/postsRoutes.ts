import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controllers/postController';

const postsRouter = Router();

//exercício 3
postsRouter.post('/', createPostController);

export default postsRouter;