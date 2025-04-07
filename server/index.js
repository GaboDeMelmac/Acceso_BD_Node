const express = require("express");
const cors = require("cors"); // Agrega el paquete cors
const { agregarLike, consultaLike } = require("./controller/consultas");

const app = express();

// Habilitar CORS
app.use(cors());

// Middleware para parsear el JSON
app.use(express.json());

// Ruta GET para obtener los registros de posts
app.get("/posts", async (req, res) => {
  try {
    const likes = await consultaLike(); // Llamas a la función de tu controlador
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

// Ruta POST para agregar un nuevo post
app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body; // Recibe los datos desde el cuerpo de la petición

  try {
    const result = await agregarLike(titulo, img, descripcion, likes); // Llama a la función que agrega el post
    if (result === 1) {
      res.status(201).json({ message: "Post creado exitosamente" });
    } else {
      res.status(400).json({ error: "Error al crear el post" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al guardar el post en la base de datos" });
  }
});

// Configuración del puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
