import express from 'express';
import { 
  createSignUpVerification, 
  findSignUpVerificationByEmail, 
  createNewCodeForExisting,
  verifyOtp
 } from '../services/authServices.js';
import { senVerificationCode } from '../services/emailService.js';
var router = express.Router();


router.post('/sign-up/check-email', async function(req, res, next) {
  const data = req.body;
  const existingSignUpUser = await findSignUpVerificationByEmail(data.email);
  let response;
  if(!existingSignUpUser) {
     response = await createSignUpVerification(data.email);
  }
  else {
     response = await createNewCodeForExisting(existingSignUpUser.id);
  }
  await senVerificationCode({
    code: response.code,
    email: response.email
  });
  res.send('Sign up User');
});


router.post('/sign-up/verify-otp', async function(req, res, next) {
  try {
    const data = req.body;
    const row = await verifyOtp(data);
    res.send({message: 'Otp matches', id: row.id});
  }
  catch{
    res.status(400).json('OTP does not matches.')
  } 
});

router.post('/sign-in', function(req, res, next) {
    res.send('Sign in User');
});

  
export default router;
