// json-server.js

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// User the middlewares to help with processes
server.use(middlewares);

// Rewrite the routes to remove the /json-server/
server.use(jsonServer.rewriter({
  '/json-server/*': '/$1'
}));

// Use the router with the new routes
server.use(router);

// Run the server
server.listen(3004, () => {
  console.log('JSON Server is running');
});