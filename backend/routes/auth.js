import express from 'express';
import { createSignUpVerification } from '../services/authServices.js';
import { senVerificationCode } from '../services/emailService.js';
var router = express.Router();


router.post('/sign-up/check-email', async function(req, res, next) {
  const data = req.body;
  const response = await createSignUpVerification(data.email);
  await senVerificationCode({
    code: response.code,
    email: response.email
  });
  res.send('Sign up User');
});

router.post('/sign-in', function(req, res, next) {
    res.send('Sign in User');
});

  
export default router;
