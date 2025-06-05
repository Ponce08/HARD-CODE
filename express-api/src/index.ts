import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import logger from './middlewares/logger';
import router from './routes/users.routes';
import schema from './graphql/schema';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use('/api/users', router);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema.schema,
    rootValue: schema.rootValue,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server in port:${PORT}`);
});
