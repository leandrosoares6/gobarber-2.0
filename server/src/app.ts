import 'reflect-metadata';
import express from 'express';
import uploadConfig from './config/upload';
import routes from './routes';
import createTypeormConnections from './database';

const app = express();

createTypeormConnections().then(() => {
  app.use(express.json());
  app.use('/files', express.static(uploadConfig.directory));
  app.use(routes);
});

export default app;
