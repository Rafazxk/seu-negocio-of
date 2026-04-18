import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import clienteRoutes from './routes/clienteRoutes.js'; 

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, '..', 'public');

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/painel-secreto-dev', (req, res) => {
  res.sendFile(path.join(publicPath, 'dev.html'));
});


app.use(express.static(publicPath, { index: false }));


app.use('/api/clientes', clienteRoutes); 


app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.use((req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: "Rota de API não encontrada." });
    }
   
    res.sendFile(path.join(publicPath, 'index.html'));
});

export default app;