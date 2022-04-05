import { withIronSession } from 'next-iron-session';
import {
  signUserSession,
  appCookieOptions,
} from 'app.modules/config/appConfig';

function handler(req, res) {
  if (req.method === 'POST') {
    req.session.destroy(signUserSession);
    res.send(true);
  }
}

export default withIronSession(handler, {
  ...(appCookieOptions as any),
});
