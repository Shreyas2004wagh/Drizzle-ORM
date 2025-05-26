import express from "express";
import { db } from "./db";
import { users } from "./schema/schema";

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
  const { username, email, password } = req.body;

  await db.insert(users).values({ username, email, password });

  res.json({ message: "User created" });
});

app.get("/users", async (_, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

app.listen(3001, () => {
  console.log("Drizzle server running at http://localhost:3001");
});
