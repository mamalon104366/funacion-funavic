const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_U8xXSAPGtQE6@ep-delicate-hill-ahkdyu45-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

app.post('/api/contacto', async (req, res) => {
  const { nombreCompleto, email, mensaje } = req.body;
  if (!nombreCompleto || !email || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const query = 'INSERT INTO contactos (nombre, email, mensaje) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [nombreCompleto, email, mensaje]);
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
