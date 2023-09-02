import sequelize from "./config/db";
import app from "./app";

const PORT = 8000;

async function startServer() {
  try {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");

    app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
  } catch (error) {
    console.error("Error syncing models:", error);
  }
}

startServer();
