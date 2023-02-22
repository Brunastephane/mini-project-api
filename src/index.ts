import express, { Request, Response } from "express";
import routes from "./routes";
import cors from "cors";
import { AppDataSource } from "./data-source";
import "reflect-metadata";
import "dotenv/config";

const StartServer = async () => {
  const app = express();
  const port = process.env.SERVER_PORT;

  // establish database connection
  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });

  app.use(
    cors({
      origin: ["https://brunastephane.github.io", "http://localhost:3000", "*"],
      credentials: true,
      exposedHeaders: "set-cookie",
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization",
      ],
    })
  );

  app.use(express.json());
  app.use(routes);
  app.listen(port, () => {
    console.log("🚀 Server ready at PORT:" + port);
  });

  /*

tipos de requisicao

GET = PEGAR DADOS
POST = PUBLICAR DADOS
PUT = ALTERAR DADOS
DELETE = DELETAR DADOS


*/
};

StartServer();
