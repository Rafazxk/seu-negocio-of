import ClienteRepository from '../repositories/ClienteRepository.js';

const ClienteController = {
  listar: async (req, res) => {
    try {
      const { rows } = await ClienteRepository.findAll();
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
  },

  criar: async (req, res) => {
    try {
      const { rows } = await ClienteRepository.create(req.body);
      res.status(201).json(rows[0]);
    } catch (err) {
      res.status(400).json({ error: 'Erro ao salvar cliente' });
    }
  },

  remover: async (req, res) => {
    try {
      await ClienteRepository.delete(req.params.id);
      res.status(200).json({ message: 'Cliente removido' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao deletar' });
    }
  }
};

export default ClienteController;