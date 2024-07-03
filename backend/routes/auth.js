import express from 'express';
import { createSignUpVerification } from '../services/authServices.js';
var router = express.Router();


router.post('/sign-up/check-email', async function(req, res, next) {
  const data = req.body;
  await createSignUpVerification(data.email);
  res.send('Sign up User');
});

router.post('/sign-in', function(req, res, next) {
    res.send('Sign in User');
});

  
export default router;
