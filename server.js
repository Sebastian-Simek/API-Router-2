import http from "node:http";
import app from "./lib/app.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
const hostname = process.env.HOST || 'localhost';  

server.listen(PORT, hostname, () => {
  console.log(server.address());
});
