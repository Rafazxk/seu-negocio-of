import express from 'express';

const router = express.Router();

import ClienteController from '../controllers/ClienteController.js';

router.get('/', ClienteController.listar);
router.post('/', ClienteController.criar);
router.delete('/:id', ClienteController.remover);

export default router;