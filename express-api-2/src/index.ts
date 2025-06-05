import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = 3000;

app.use("/", (req, res) => {
  res.json({ message: "Por aqui todo bien" });
});

// app.use('/graphql', graphqlHTTP({
//     schema:
// }))

app.listen(PORT, () => {
  console.log(`🚀Sirviendo en puerto:${PORT}`);
});
