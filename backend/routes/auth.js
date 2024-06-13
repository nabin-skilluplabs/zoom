import express from 'express';
var router = express.Router();


router.post('/sign-up', function(req, res, next) {
  res.send('Sign up User');
});

router.post('/sign-in', function(req, res, next) {
    res.send('Sign in User');
});

  
export default router;
