import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerSetup from '../src/swagger.json';

import { router } from './routes';

import './database';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.use(router);

app.listen(3333, () =>
  console.log('🔥 Server running on http://localhost:3333'),
);
