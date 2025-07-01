const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://audreyofilippi:RocioSancho81@cluster0.a3c0sap.mongodb.net/tickethack"; //tickethack = nom de bdd

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));
