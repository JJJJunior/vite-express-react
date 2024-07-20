import express from "express";
import ViteExpress from "vite-express";
import {prisma} from "../../prisma/db/index.js";

const app = express();

app.get("/hello", (_, res) => {
    res.send("Hello Vite + React + TypeScript!");
});

app.get("/api/users", async (_, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})


ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);
