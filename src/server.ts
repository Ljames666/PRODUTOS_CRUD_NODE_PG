import "reflect-metadata";
import express from "express";
import "./core/database/connection";

const app = express();

app.use(express.json());

app.listen(8081, () => console.log("server is running on port 8081"));
