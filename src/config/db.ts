import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "rootroot", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
