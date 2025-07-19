import express from 'express';
import { createToken, detectCountry, parseAddress } from '../controllers/apiController.js';
import authenticateToken from '../middleware/auth.js';
import 'dotenv/config';

const router = express.Router();
router.get('/token', createToken);
router.post('/detect-country', authenticateToken, detectCountry);
router.post('/parse-address', authenticateToken, parseAddress);
export default router;
