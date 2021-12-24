import cookie from 'cookie';

const MAX_AGE = 60 * 60 * 24 * 7;

/* Helper function to set cookie */
export function setTokenCookie(res, token) {
  // create the cookie object
  const setCookie = cookie.serialize('token', token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: process.env.NODE_ENV === 'production', // set only over an https connection
    path: '/',
    httpOnly: true, // client can't see the cookie in document.cookie
  });

  res.setHeader('Set-Cookie', setCookie);
}
