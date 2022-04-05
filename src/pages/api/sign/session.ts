import { withIronSession } from 'next-iron-session';
import {
  signUserSession,
  appCookieOptions,
} from 'app.modules/config/appConfig';

function handler(req, res) {
  const response = req.session.get(signUserSession);
  if (!response) return res.send({ login: false });
  return res.send({ login: true, ...response });
}

export default withIronSession(handler, {
  ...(appCookieOptions as any),
});
