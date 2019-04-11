import * as dotenv from 'dotenv';

import app from '../../package.json';
import errors from '../resources/lang/errors.json';
import messages from '../resources/lang/messages.json';

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === 'test';

export default {
  errors,
  messages,
  name: app.name,
  version: app.version,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  host: process.env.APP_HOST || '127.0.0.1',
  dbConnectionString: process.env.DB_HOST,
  environment: process.env.NODE_ENV || 'development',
  appUrl: process.env.APP_URL || 'http://localhost:8888',
  port:
    (isTestEnvironment ? process.env.TEST_APP_PORT : process.env.APP_PORT) ||
    '8000',
  auth: {
    saltRounds: process.env.SALT_ROUNDS || 11,
    accessTokenDuration: process.env.ACCESS_TOKEN_DURATION || '24h', // TODO CHANGE THIS
    refreshTokenDuration: process.env.REFRESH_TOKEN_DURATION || '24h',
    emailVerificationDuration: process.env.EMAIL_VERIFICATION_DURATION || 24,
    accessTokenSecretKey:
      process.env.ACCESS_TOKEN_SECRET_KEY || '<ACCESS_TOKEN_SECRET_KEY>',
    refreshTokenSecretKey:
      process.env.REFRESH_TOKEN_SECRET_KEY || '<REFRESH_TOKEN_SECRET_KEY>'
  },
  logging: {
    dir: process.env.LOGGING_DIR || 'logs',
    level: process.env.LOGGING_LEVEL || 'debug',
    maxSize: process.env.LOGGING_MAX_SIZE || '20m',
    maxFiles: process.env.LOGGING_MAX_FILES || '7d',
    datePattern: process.env.LOGGING_DATE_PATTERN || 'YYYY-MM-DD'
  },
  ERROR_MESSAGE: {
    TOKEN_REQUIRED: 'Token is required to login',
    INVALID_GOOGLE_CLIENT_ID: 'Invalid google client id',
    INVALID_ACTION: 'You can not perform this action'
  }
};
