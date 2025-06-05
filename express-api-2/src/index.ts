import express from 'express';
import cors from 'cors';
// import { graphqlHTTP } from 'express-graphql';
import router from './routes/user.routes';
import schema from './graphql/schema';
import logger from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use(logger);

app.use('/api/users', router);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use(errorHandler);

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema.schema,
//     rootValue: schema.rootValue,
//     graphiql: true
//   })
// );

app.listen(PORT, () => {
  console.log(`🚀Sirviendo en puerto:${PORT}`);
});
