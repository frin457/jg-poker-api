import express, { Router } from 'express';
import votingRouter from './voting.js';

const router: Router = express.Router();

// Mount your routers here
router.use('/voting', votingRouter);

export { router };