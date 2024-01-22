import express from 'express';

import bobaController from '../controllers/boba-controller.js';

const router = express.Router();

router.get('/show', bobaController.showBobaStores);

export default router;