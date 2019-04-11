// const { OAuth2Client } = require('google-auth-library');

import config from '../config/config';
import { OAuth2Client } from 'google-auth-library';
import UnauthorizedError from '../exceptions/UnauthorizedError';

export async function verifyGoogleAccount(token: any) {
  const client = new OAuth2Client(config.googleClientId, '', '');

  return new Promise((resolve, reject) => {
    if (!token) {
      throw new Error('No token');
    }

    client
      .verifyIdToken({ idToken: token, audiance: config.googleClientId })
      .then((login: any) => {
        const payload = login.getPayload();

        if (payload['aud'] === config.googleClientId) {
          resolve({
            userId: payload.sub,
            email: payload.email,
            name: payload.name,
            imageUrl: payload.picture
          });
        } else {
          throw new UnauthorizedError(
            config.ERROR_MESSAGE.INVALID_GOOGLE_CLIENT_ID
          );
        }
      })
      .catch((err: any) => reject(err));
  });
}
