import jwt from 'jsonwebtoken';
import cookie from 'cookie';

import { isNewUser, createNewUser } from '../../lib/db/hasura';
import { magicAdmin } from '../../lib/magic-admin';
import { setTokenCookie } from '../../lib/cookies';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // get the did tken from the header
      const authHeader = req.headers.authorization;
      const didToken = authHeader ? authHeader.split(' ')[1] : null;

      // get user details from the did token
      const { email, issuer, publicAddress } =
        await magicAdmin.users.getMetadataByToken(didToken);

      // set up payload and hasura cliams
      const hasuraCliams = {
        iat: Math.floor(Date.now() / 1000),
        email,
        issuer,
        publicAddress,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': issuer,
        },
      };

      // create a JWT token
      const jwtToken = jwt.sign(hasuraCliams, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      // check if user exists
      const isNewUserQueryResult = await isNewUser(issuer, jwtToken);

      // if user user then add the user on DB
      isNewUserQueryResult &&
        (await createNewUser({ email, issuer, publicAddress }, jwtToken));

      // set the cookie on response
      const cookie = setTokenCookie(res, jwtToken);
      res.status(200).json({ done: true });
    } catch (err) {
      console.error('Something went wrong', err);
      res.status(500).json({ done: false });
    }
  } else {
    res.status(405).json({ message: 'Get request not supported' });
  }
}
