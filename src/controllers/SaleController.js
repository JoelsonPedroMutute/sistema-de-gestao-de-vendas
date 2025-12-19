const SaleService = require('../services/SaleService');

class SaleController {

    static async create(req, res) {
        try {
            const sale = await SaleService.create(req.body);

            return res.status(201).json({
                sucesso: true,
                mensagem: 'Venda criada com sucesso',
                dados: sale
            });

        } catch (error) {
            console.error(error);
            if (error.code === 11000) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Venda com informações duplicadas'
                });
            }

            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao criar a venda'
            });
        }
    }

    static async getAll(req, res) {
        try {
            const { page, limit, sort, order, minValue, maxValue, startDate, endDate } = req.query;

            const filters = {};
            if (minValue !== undefined) filters.minValue = minValue;
            if (maxValue !== undefined) filters.maxValue = maxValue;
            if (startDate) filters.startDate = startDate;
            if (endDate) filters.endDate = endDate;

            const sales = await SaleService.getAll({
                page: Number(page) || 1,
                limit: Number(limit) || 10,
                sort: sort || 'createdAt',
                order: order || 'desc',
                filters
            });

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Vendas listadas com sucesso',
                dados: sales
            });

        } catch (error) {
            console.error(error);
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao listar vendas'
            });
        }
    }

    static async getById(req, res) {
        try {
            const sale = await SaleService.getById(req.params.id);

            if (!sale) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: 'Venda não encontrada'
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Venda encontrada com sucesso',
                dados: sale
            });

        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao buscar a venda'
            });
        }
    }

    static async update(req, res) {
        try {
            const sale = await SaleService.update(req.params.id, req.body);

            if (!sale) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: 'Venda não encontrada'
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: 'Venda atualizada com sucesso',
                dados: sale
            });
        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao atualizar a venda'
            });
        }
    }


    static async delete(req, res) {
        try {
            await SaleService.delete(req.params.id);
            return res.status(200).json({
                sucesso: true,
                mensagem: 'Venda deletada com sucesso'
            });
        } catch (error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Erro ao deletar a venda'
            });
        }
    }
}

module.exports = SaleController;
