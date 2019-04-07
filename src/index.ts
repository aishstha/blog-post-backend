import app from './app';
import mongoose from 'mongoose';
import config from './config/config';
import logger from './utils/logger';
import nodeErrorHandler from './middlewares/nodeErrorHandler';

const { port, host, dbConnectionString } = config;

const options = { server: { socketOptions: { keepAlive: 1 } } };
mongoose.connect(dbConnectionString, options);

// Connected handler
mongoose.connection.on('connected', function(err: any) {
  console.log('Connected to DB using chain: ' + dbConnectionString);
});

// Error handler
mongoose.connection.on('error', function(err: any) {
  console.log(err);
});

app
  .listen(+port, host, () => {
    logger.info(`Server started at http://${host}:${port}`);
  })
  .on('error', nodeErrorHandler);
