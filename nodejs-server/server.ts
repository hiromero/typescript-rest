import http, { IncomingMessage, Server, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(
      '<h3 style="font-family: Lato, sans-serif; color:green"> Welcome to Server </h3>'
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`Node server listening at http://${hostname}:${port}`);
});
