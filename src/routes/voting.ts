// votingRouter.ts

import express, { Router, Request, Response } from 'express';
import { Vote, Game, VotingSession } from '../typings.js';
const votingRouter: Router = express.Router();

// Sample data store for demonstration purposes
let votingSession: VotingSession = {
  isOpen: false,
  votes: [],
  id: '1'
};

// Middleware to check if the voting is open
const checkVotingStatus = (req: Request, res: Response, next: any) => {
  if (!votingSession.isOpen) {
    return res.status(403).json({ error: 'Voting is closed.' });
  }
  next();
};
// Test endpoint
votingRouter.get('/'), (req: Request, res: Response) => {
  console.log('hello voting')
  res.status(200).send('Voting endpoint is available.')
}
// Endpoint to submit a vote
// votingRouter.post('/submit', checkVotingStatus, (req: Request, res: Response) => {
//   const { vote } = req.body;

//   if (!vote) {
//     return res.status(400).json({ error: 'Vote is required.' });
//   }

//   // Store the submitted vote
//   votingSession.votes.push(vote);

//   res.status(200).json({ success: true, message: 'Vote submitted successfully.' });
// });

// // Endpoint to initialize voting
// votingRouter.post('/init', (req: Request, res: Response) => {
//   // Check if voting is already open
//   if (votingSession.isOpen) {
//     return res.status(400).json({ error: 'Voting is already open.' });
//   }

//   // Initialize voting
//   votingSession = {
//     isOpen: true,
//     votes: [],
//     id: '1'
//   };

//   res.status(200).json({ success: true, message: 'Voting initialized.' });
// });

// // Endpoint to close voting
// votingRouter.post('/close', (req: Request, res: Response) => {
//   // Check if voting is already closed
//   if (!votingSession.isOpen) {
//     return res.status(400).json({ error: 'Voting is already closed.' });
//   }

//   // Close voting
//   votingSession.isOpen = false;

//   res.status(200).json({ success: true, message: 'Voting closed.' });
// });
export default votingRouter;