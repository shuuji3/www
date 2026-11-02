// Served with `Content-Type: application/jrd+json` as required by RFC 7033.
// A static file cannot set this content type (it is keyed off the extension,
// and this path has none), so the endpoint is served by a Pages Function.
const webfinger = {
  subject: 'acct:shuuji3@webtoo.ls',
  aliases: ['https://webtoo.ls/@shuuji3', 'https://webtoo.ls/users/shuuji3'],
  links: [
    {
      rel: 'http://webfinger.net/rel/profile-page',
      type: 'text/html',
      href: 'https://webtoo.ls/@shuuji3',
    },
    {
      rel: 'self',
      type: 'application/activity+json',
      href: 'https://webtoo.ls/users/shuuji3',
    },
    {
      rel: 'http://ostatus.org/schema/1.0/subscribe',
      template: 'https://webtoo.ls/authorize_interaction?uri={uri}',
    },
  ],
};

export const onRequest = () =>
  new Response(JSON.stringify(webfinger, null, 2), {
    headers: { 'Content-Type': 'application/jrd+json' },
  });
