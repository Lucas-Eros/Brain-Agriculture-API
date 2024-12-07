import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./Config/database";
import producerRoutes from "./Routes/producer.routes";

const app = express();
app.use(express.json());

app.use("/producers", producerRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected 📡");
    app.listen(3000, () => {
      console.log("Server running on port 3000 🚀");
    });
  })
  .catch((error) => console.error("Database connection failed 🤨", error));
