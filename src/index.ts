import http from 'http';

const hostname = 'localhost';
const port = 3005;

const server = http.createServer((req, res) => {
  try {
    res.writeHead(500);
    res.end('Hello world');
  } catch (error) {
    res.writeHead(500);
    res.end(error instanceof Error ? error.message : 'Unknown error');
  }
});

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.info(`Server running at http://${hostname}:${port}/`);
});
