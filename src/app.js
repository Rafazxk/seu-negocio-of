import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Importação das rotas (ajuste o caminho se necessário)
import clienteRoutes from './routes/clienteRoutes.js'; 

const app = express();

// Configuração de caminhos (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define o caminho da pasta pública (subindo um nível a partir de src)
const publicPath = path.resolve(__dirname, '..', 'public');

// --- Middlewares ---
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(publicPath));

// --- Rotas de API ---
app.use('/api/clientes', clienteRoutes); 

// --- Rotas de Frontend ---

// Rota principal: Carrega usuario.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'frontend', 'usuario.html'));
});


app.use((req, res, next) => {

    if (req.path.startsWith('/api')) {
        return res.status(404).json({ 
            error: "Rota de API não encontrada.",
            path: req.path 
        });
    }
   
  
    const indexPath = path.join(publicPath, 'frontend', 'usuario.html');
    
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error("Erro ao carregar o frontend:", err);
            res.status(404).send("Front-end não encontrado. Verifique se o arquivo está em public/frontend/usuario.html");
        }
    });
});

export default app;