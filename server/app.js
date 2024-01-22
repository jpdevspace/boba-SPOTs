const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(PORT, () => {
  console.log(`App live and listening on port ${PORT} - Hello Netflix`);
});