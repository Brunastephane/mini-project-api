
import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as any,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,    
    //entities: [Book, Comment, Contact], //Vercel ONly
    entities: [__dirname + "/entities/*{.ts,.js}"], //All other hosts
    migrations: [__dirname + "/migrations/*{.ts,.js}"]

});