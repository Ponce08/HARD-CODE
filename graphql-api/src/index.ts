import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { logger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();

app.use(express.json());

app.use(logger);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.use(errorHandler);

app.listen(4000, () => {
  console.log('✅ Sirviendo en GraphQL, puerto:4000');
});
