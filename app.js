const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const boolParser = require('express-query-boolean');
const helmet = require('helmet');
const limiter = require('./helpers/limiter');
const { HttpCode } = require('./helpers/constants');
const puppeterRouter = require('./routes/api/puppeter');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(helmet()); // Secure Express apps (HTTP headers)

// Upload avatars local #1
require('dotenv').config();

app.use(limiter); // Request limiter
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json({ limit: 15000 })); // limit: 15000 - Ограничение передачи байт
app.use(boolParser()); // Converts a string to a Boolean
app.use('/api/puppeter', puppeterRouter);

app.use((req, res) => {
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' });
});

app.use((err, req, res, next) => {
  const code = err.status || HttpCode.INTERNAL_SERVER_ERROR;
  const status = err.status ? 'error' : 'fail';
  res.status(code).json({ status, code, message: err.message });
});

module.exports = app;
