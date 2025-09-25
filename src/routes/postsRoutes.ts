import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controllers/postController';

const postsRouter = Router();



export default postsRouter;