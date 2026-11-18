// Zero-dependency Node app - fits Abasthan Free 512MB / 0.1 vCPU
// Genuine web application: landing page + /health + /api/hello
const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, ts: new Date().toISOString() }));
  }
  if (req.url === '/api/hello') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Hello from Abasthan Free plan' }));
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TIMON - Abasthan Free App</title>
<style>body{font-family:system-ui;max-width:720px;margin:40px auto;padding:0 16px;line-height:1.6}code{background:#f2f2f2;padding:2px 6px;border-radius:6px}</style>
</head><body>
<h1>部署成功 ✅</h1>
<p>这是运行在 Abasthan Free 计划上的合规 Web 应用（512MB / 0.1 vCPU，零依赖）。</p>
<p>健康检查：<code>/health</code> &nbsp; 示例接口：<code>/api/hello</code></p>
<p>后续把这里换成你的小站、Bot webhook 或 API 即可，每次 git push 会自动重新部署。</p>
</body></html>`);
});

server.listen(port, () => console.log(`Listening on ${port}`));
