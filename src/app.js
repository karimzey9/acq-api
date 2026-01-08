// set up express application with middleware and routes

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, from acq-api!');
});

export default app;
