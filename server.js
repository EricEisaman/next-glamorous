const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

const apiRoutes = require('./server/routes/apiRoutes.js');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.use('/api', apiRoutes);

  // Server-side
  const route = pathMatch();

  server.get('/hello/:name', (req, res) => {
    const params = route('/hello/:name')(parse(req.url).pathname);
    return app.render(req, res, '/hello', params);
  });
  
  server.get('/tilt/:input', (req, res) => {
    const params = route('/tilt/:input')(parse(req.url).pathname);
    return app.render(req, res, '/tilt', params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`The server is listening...`);
  });
});