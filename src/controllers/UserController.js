const UserService = require('../services/UserService');

class UserController {

  static async create(req, res) {
    try {
      const user = await UserService.create(req.body);

      return res.status(201).json({
        sucesso: true,
        mensagem: 'Usuário criado com sucesso',
        dados: user
      });

    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'Email já cadastrado'
        });
      }

      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao criar usuário'
      });
    }
  }

  static async getAll(req, res) {
    try {
      const users = await UserService.getAll();

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Usuários listados com sucesso',
        dados: users
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao listar usuários'
      });
    }
  }

  static async getById(req, res) {
    try {
      const user = await UserService.getById(req.params.id);

      if (!user) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Usuário não encontrado'
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Usuário encontrado com sucesso',
        dados: user
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao buscar usuário'
      });
    }
  }

  static async update(req, res) {
    try {
      const user = await UserService.update(req.params.id, req.body);

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Usuário atualizado com sucesso',
        dados: user
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao atualizar usuário'
      });
    }
  }

  static async delete(req, res) {
    try {
      await UserService.delete(req.params.id);

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Usuário removido com sucesso'
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao remover usuário'
      });
    }
  }
}

module.exports = UserController;
