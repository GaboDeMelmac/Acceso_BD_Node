const pool = require("../db.js");

const consultaLike = async () => {
  const { rows } = await pool.query("SELECT * FROM posts;");
  return rows;
};

const agregarLike = async (titulo, img, descripcion, likes) => {
  // Asegúrate de que el nombre de los valores en la consulta corresponda a los datos que estás enviando
  const values = [titulo, img, descripcion, likes]; // No se necesita id ya que es SERIAL y se auto-incrementa
  const result = await pool.query(
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4);",
    values
  );
  return result.rowCount; // Devuelve el número de filas afectadas (1 si todo salió bien)
};

module.exports = { consultaLike, agregarLike };
