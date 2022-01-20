import express from 'express';

import { getPosts } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth,  getPosts);

export default router;