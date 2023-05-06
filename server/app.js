const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const initDb = require('../DB/config');
const morgan = require('morgan');

//importar rutas
const userRoutes = require('../routes/user.routes');

// leer cosas de .env
dotenv.config();
// instanciar el servidor
const app = express();
const port = process.env.URL_BASE;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//instanciar rutas
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});

initDb();
