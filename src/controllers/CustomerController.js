const CustomerService = require('../services/CustomerService');

class CustomerController {

    static async create(req, res) {
        try {
            const customer = await CustomerService.create(req.body);

            return res.status(201).json({
                sucesso: true,
                mensagem: 'Cliente criado com sucesso',
                dados: customer
            });

        } catch (error) {

            if (error.code === 11000) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Cliente com informações duplicadas'
                });
            }

            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao criar o cliente'
            });
        }
    }

    static async getAll(req, res) {
        try {
            const customers = await CustomerService.getAll();

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Clientes listados com sucesso',
                dados: customers
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao listar clientes'
            });
        }
    }

    static async getById(req, res) {
        try {
            const customer = await CustomerService.getById(req.params.id);

            if (!customer) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: 'Cliente não encontrado'
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Cliente encontrado com sucesso',
                dados: customer
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao buscar o cliente'
            });
        }
    }

    static async update(req, res) {
        try {
            const customer = await CustomerService.update(req.params.id, req.body);

            if (!customer) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: 'Cliente não encontrado'
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Cliente atualizado com sucesso',
                dados: customer
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao atualizar o cliente'
            });
        }
    }

  static async delete(req, res) {
    try {
        const customer = await CustomerService.delete(req.params.id);

        if (!customer) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Cliente não encontrado'
            });
        }

        return res.status(200).json({
            sucesso: true,
            mensagem: 'Cliente excluído com sucesso'
        });

    } catch (error) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Erro ao excluir o cliente'
        });
    }
}
}

module.exports = CustomerController;

