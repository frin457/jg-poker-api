//Local-development runs application through this server config.
//Rewrites all urls to serve `/index.html`, enabling hot-reloading with esbuild & React
require('dotenv').config();
const express = require('express')
const path = require('path');const build = require('./server')
const port = 8080
console.log(`Starting application in ${process.env.REACT_APP_NODE_ENV} mode.\n\n`)
const app = express();
// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));
// Add a catch-all route to serve the root HTML file for client-side routing
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname, 'build', 'index.html'));});
// Start the Express server on port 8000
app.listen(port, async () => {
    console.log(`Express server is listening on localhost:${port}`);  
  const context = await build();  
  if(context){  
    await context.watch()   
    await context.rebuild();
  }})