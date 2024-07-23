import { Sequelize } from "sequelize-typescript";
import { Dog } from "../models/dogs.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "haphuthinh",
  database: "sequelize_test",
  logging: true,
  models: [Dog],
});

export default connection;