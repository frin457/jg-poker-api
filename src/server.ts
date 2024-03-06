// server.mjs
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routes/index.js'
dotenv.config();

const port = 3000;
const app = express();
console.log(`Starting application in ${process.env.NODE_ENV} mode.\n\n`);

app.use(cors())

// Apply all middleware

// Appends all business logic endpoints
app.use((req, res, next) => {
  console.log('router pinged')
  next()
}, router)
app.get('/test', (req, res) => {
  res.status(200).send('API online.');
});
// Catch all testing route
// Start the Express server on port 8000
app.listen(port, async () => {
  console.log(`Express server is listening on localhost:${port}`);
});
