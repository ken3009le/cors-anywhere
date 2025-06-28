// CORS Anywhere Public Server
// Author: Rob--W | Fix: X.SYNTH (Kenzema)

const cors_proxy = require('./lib/cors-anywhere');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

// Tắt blacklist và whitelist (cho phép tất cả)
const originBlacklist = [];
const originWhitelist = []; // ← Cho phép tất cả domain

// KHÔNG dùng rate-limit (tắt giới hạn)
const checkRateLimit = null;

cors_proxy.createServer({
  originBlacklist: originBlacklist,
  originWhitelist: originWhitelist,
  requireHeader: [], // ← Không cần origin hay x-requested-with
  checkRateLimit: checkRateLimit,
  removeHeaders: [
    'cookie',
    'cookie2',
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
  ],
  redirectSameOrigin: true,
  httpProxyOptions: {
    xfwd: false,
  },
}).listen(port, host, () => {
  console.log(`🚀 CORS Anywhere proxy running at http://${host}:${port}`);
});
