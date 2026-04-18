import pool from '../config/database.js';

const ClienteRepository = {
  findAll: () => pool.query('SELECT * FROM usuarios ORDER BY id DESC'),
  create: (data) => pool.query(
    'INSERT INTO usuarios (nome, telefone, email, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
    [data.nome, data.telefone, data.email, data.descricao_projeto]
  ),
  delete: (id) => pool.query('DELETE FROM usuarios WHERE id = $1', [id])
};

export default ClienteRepository;