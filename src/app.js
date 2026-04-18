import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import clienteRoutes from './routes/clienteRoutes.js';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const publicPath = path.resolve(__dirname, '..', 'public');


app.use(cors());
app.use(express.json());


app.use(express.static(publicPath));


app.use('/clientes', clienteRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Fallback para rotas não encontradas (Redireciona para o index)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

export default app;