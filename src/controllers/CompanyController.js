const CompanyService = require('../services/CompanyService');

class CompanyController {

  async create(req, res) {
    try {
      const company = await CompanyService.create(req.body);

      return res.status(201).json({
        sucesso: true,
        mensagem: 'Empresa criada com sucesso',
        dados: company
      });

    } catch (error) {

      // 🔴 ERRO DE CAMPO DUPLICADO (MongoDB)
      if (error.code === 11000) {
        const campo = Object.keys(error.keyValue)[0];

        return res.status(409).json({
          sucesso: false,
          mensagem: `Já existe uma empresa cadastrada com este ${campo}`
        });
      }

      // 🔴 ERRO GENÉRICO
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao criar a empresa'
      });
    }
  }

  async getAll(req, res) {
    try {
      const companies = await CompanyService.getAll();

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Empresas listadas com sucesso',
        dados: companies
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao listar empresas'
      });
    }
  }

  async getById(req, res) {
    try {
      const company = await CompanyService.getById(req.params.id);

      if (!company) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Empresa não encontrada'
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Empresa encontrada',
        dados: company
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao buscar empresa'
      });
    }
  }

  async update(req, res) {
    try {
      const company = await CompanyService.update(req.params.id, req.body);

      if (!company) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Empresa não encontrada'
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Empresa atualizada com sucesso',
        dados: company
      });

    } catch (error) {

      if (error.code === 11000) {
        const campo = Object.keys(error.keyValue)[0];

        return res.status(409).json({
          sucesso: false,
          mensagem: `Já existe uma empresa cadastrada com este ${campo}`
        });
      }

      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao atualizar empresa'
      });
    }
  }

  async delete(req, res) {
    try {
      const company = await CompanyService.deleteCompany(req.params.id);

      if (!company) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Empresa não encontrada'
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Empresa eliminada com sucesso'
      });

    } catch (error) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro ao eliminar empresa'
      });
    }
  }
}

module.exports = new CompanyController();
