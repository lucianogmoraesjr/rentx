import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World... watching' });
});

app.listen(3333, () =>
  console.log('🔥 Server running on http://localhost:3333'),
);
