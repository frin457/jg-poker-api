import express, { Router } from 'express';
import votingRouter from './voting.js';

const router: Router = express.Router();

// Mount your routers here
router.use('/voting', (req, res, next) => {
  console.log('voting endpoint pinged')
  next();
}, votingRouter);

export { router };