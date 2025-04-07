const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "274", // Verifica que la contraseña sea correcta
  database: "likeme", // Asegúrate de que este sea el nombre correcto de la base de datos
  allowExitOnIdle: true,
});

pool
  .connect()
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error de conexión a la base de datos", err));

module.exports = pool;
