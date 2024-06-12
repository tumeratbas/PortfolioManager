import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
import auth from '../middleware/auth.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', auth, getUserProfile);

export default router;
