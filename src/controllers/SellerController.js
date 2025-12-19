const SellerService = require('../services/SellerService');

class SellerController {

    static async create(req, res) {
        try {
            const seller = await SellerService.create(req.body);

            return res.status(201).json({
                sucesso: true,
                mensagem: 'Vendedor criado com sucesso',
                dados: seller
            });

        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Vendedor com informações duplicadas'
                });
            }

            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao criar o vendedor'
            });
        }
    }

    static async getAll(req, res) {
        try {
            const sellers = await SellerService.getAll();

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Vendedores listados com sucesso',
                dados: sellers
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao listar vendedores'
            });
        }
    }

    static async getById(req, res) {
        try {
            const seller = await SellerService.getById(req.params.id);

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Vendedor listado com sucesso',
                dados: seller
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao listar vendedor'
            });
        }
    }

    static async update(req, res) {
        try {
            const seller = await SellerService.update(req.params.id, req.body);

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Vendedor atualizado com sucesso',
                dados: seller
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao atualizar o vendedor'
            });
        }
    }

    static async delete(req, res) {
        try {
            const seller = await SellerService.delete(req.params.id);

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Vendedor deletado com sucesso',
                dados: seller
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao deletar o vendedor'
            });
        }
    }
}

module.exports = SellerController;
