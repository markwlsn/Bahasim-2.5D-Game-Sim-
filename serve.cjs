// serve.cjs - Local web server for BahaSim PH: Ligtas Bayan
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HTML_FILE = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(HTML_FILE, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🇵🇭 BahaSim PH: Ligtas Bayan - Local Server Running!`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📁 File: ${HTML_FILE}`);
  console.log(`Press Ctrl+C to stop the server.`);
  console.log(`======================================================\n`);
});
