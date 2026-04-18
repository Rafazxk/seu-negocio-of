import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


import clienteRoutes from './routes/clienteRoutes.js'; 

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '..', 'public');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(publicPath));


app.use('/api/clientes', clienteRoutes); 

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) return next();
  res.sendFile(path.join(publicPath, 'index.html'));
});

export default app;