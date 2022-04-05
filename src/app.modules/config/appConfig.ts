export const signUserSession = 'spacemap_admin_user_session';

export const appConfigCookie = 'app_config';

export const appCookieOptions = {
  cookieName: signUserSession,
  password:
    'askldjfkldfd9f8dasdfkasdjfklsjdjfhd8djfdywhsdjchsbwyj!!!@@99df8df8g7%%dhjfjeu22323',
  ttl: 3600 * 2,
  cookieOptions: {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  },
};
