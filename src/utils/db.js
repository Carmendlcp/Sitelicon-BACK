const mongoose = require("mongoose");
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   
    console.log(`Conectado a la base de datos ${db.connection.name} en el host ${db.connection.host}`);
  } catch (error) {
    
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); 
  }
};

module.exports = { connect };
