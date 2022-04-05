import { setCookie } from 'nookies';
import {appConfigCookie} from 'app.modules/config/appConfig';

export function setAppConfigCookie(option) {
  setCookie(null, appConfigCookie, JSON.stringify(option), {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  });
}
