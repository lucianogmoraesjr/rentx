import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World... watching' });
});

app.listen(3333, () =>
  console.log('🔥 Server running on http://localhost:3333'),
);
