import express from 'express';

import { signin, signup } from '../controllers/posts.js';

const router = express.Router();

router.post('./signin', signin);
router.post('./signup', signup);



export default router;