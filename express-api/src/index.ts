import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Todo bien por aqui' });
});

app.listen(PORT, () => {
  console.log(`Server in port:${PORT}`);
});
