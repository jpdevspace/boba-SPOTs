import express from 'express';

import bobaController from '../controllers/boba-controller.js';

const router = express.Router();

router.get('/:location', bobaController.showBobaStoresByLocation);

export default router;