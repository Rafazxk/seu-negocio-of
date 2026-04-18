import express from 'express';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Rotas
app.use('/clientes', clienteRoutes);

// Rota básica para teste
app.get('/', (req, res) => {
  res.send('API de Clientes online!');
});

export default app;