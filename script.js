const express = require("express");
const { connect } = require("./src/utils/db");
const userRoutes = require("./src/api/Routes/user.routes");
const contactRoutes = require("./src/api/Routes/contact.routes");
const cors = require('cors');

const PORT = 5000;

const app = express();

connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);

app.get("/", (request, response) => {
    response.status(200).json({
      message: "Welcome to server",
      app: "My App",
    });
  });

app.listen(PORT, () =>
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
