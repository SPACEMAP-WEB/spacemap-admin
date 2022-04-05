import { withIronSession } from 'next-iron-session';
import {
  signUserSession,
  appCookieOptions,
} from 'app.modules/config/appConfig';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    req.session.set(signUserSession, { ...req.body });
    await req.session.save();
    res.send({ ...req.body });
  }
};

// 86400
export default withIronSession(handler, {
  ...(appCookieOptions as any),
});
