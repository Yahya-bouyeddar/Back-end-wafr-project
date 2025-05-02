import express from 'express';
// import { login } from '../controllers/authController.js';
import { firebaseLogin } from '../controllers/authController.js';



const router = express.Router();
router.post('/firebase-login', firebaseLogin);

// router.post('/login', login);

export default router;
