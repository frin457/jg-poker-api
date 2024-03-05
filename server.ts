import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import cors from 'cors';

const port = 3000;
const app: Express = express();

dotenv.config()

app.use(cors());
//Apply all middleware
console.log(
  `Starting application in ${process.env.NODE_ENV} mode.\n\n`
);

//Append routes / endpoints
app.get('/home', (req: Request, res: Response) => {
  res.status(200).send('Hello "/home"');
})
// catch all testing route
app.get("*", (req: Request, res: Response) => {
  res.status(200).send('API online.')
});
// Start the Express server on port 8000
app.listen(port, async () => {
  console.log(`Express server is listening on localhost:${port}`)
});
