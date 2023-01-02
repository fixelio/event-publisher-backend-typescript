import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import eventRouter from '../routes/event';

const API_VERSION = 'v1';
const API_PREFIX = `/api/${API_VERSION}`;

const createServer = async (): Promise<express.Application> => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(bodyParser.json());

  app.use(`${API_PREFIX}/event`, eventRouter);

  app.disable('x-powered-by');

  return app;
}

export { createServer };