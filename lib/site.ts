// APP_URL takes precedence when a custom production domain is configured.
export const SITE_URL = (process.env.APP_URL || 'https://moqawelinterlock.com').replace(/\/$/, '');

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
