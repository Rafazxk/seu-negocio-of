import { Pool } from 'pg';

const pool = new Pool({
  user: 'rafazx',
  host: 'localhost',
  database: 'seu_negocio',
  password: 'rafazx251',
  port: 5432,
});

export default pool;