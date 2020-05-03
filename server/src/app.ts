import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import createTypeormConnections from './database';

const app = express();

createTypeormConnections().then(() => {
  app.use(express.json());
  app.use(routes);
});

export default app;
