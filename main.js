const jsonServer = require("json-server");
const fetch = require("node-fetch");
// const queryString = require('query-string');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const { v4: uuidv4 } = require("uuid");

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.id = uuidv4()
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use("/api", router);

// setInterval(() => {
//   fetch("https://codelab-final-api.herokuapp.com").then((data) =>
//     console.log("Auto call API ")
//   );
// }, 1500000);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running");
});
