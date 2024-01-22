import express from 'express';
import bodyParser from 'body-parser';

import bobaRoutes from './routes/boba-routes.js';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// Routes
app.use('/yelp/boba', bobaRoutes);

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(PORT, () => {
  console.log(`App live and listening on port ${PORT} - Hello Netflix`);
});