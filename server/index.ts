import { createServer } from "http";

const server = createServer((req, res) => { console.log("User hit the server!"); res.end("Hello World!") });

server.listen(5005)