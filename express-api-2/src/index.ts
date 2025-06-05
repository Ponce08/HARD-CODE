import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import router from './routes/user.routes';
import schema from './graphql/schema';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', router);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema.schema,
    rootValue: schema.rootValue,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`🚀Sirviendo en puerto:${PORT}`);
});
