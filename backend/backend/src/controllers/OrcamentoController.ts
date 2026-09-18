import { Cliente } from "../entities/Cliente"
import { Orcamento } from "../entities/Orcamento"
import { Servico } from "../entities/Servico"
import { Veiculo } from "../entities/Veiculo"
import { NotificacaoWhatsApp } from "../notificacoes/NotificacaoWhatsApp"
import { PagamentoPix } from "../pagamentos/PagamentoPix"
import { OrcamentoRepositorio } from "../repositories/OrcamentoRepositorio"
import { FinalizarOrcamento } from "../use-case/finalizarOrcamento"
import { Request, Response } from "express"

export class OrcamentoController {

    criar(req: Request, res: Response): void {
        const { cliente, veiculo, servicos } = req.body

        const novoCliente = new Cliente(cliente.nome, cliente.telefone)

        const novoVeiculo = new Veiculo(
            veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.placa)

        const orcamento = new Orcamento(novoCliente, novoVeiculo)

        servicos.forEach((servico:any) => {
            orcamento.adicionarServico(new Servico(servico.descricao, servico.valor))
        });

        const pagamento = new PagamentoPix();

        const notificacao = new NotificacaoWhatsApp();

        const repositorio = new OrcamentoRepositorio()

        const finalizarOrcamento = new FinalizarOrcamento(
            pagamento,
            notificacao,
            repositorio
        )

        const valorfinal = finalizarOrcamento.executar(orcamento)

        res.status(201).json({
            mensagem: "Orçamento finalizado com sucesso!",
            valorfinal
        })
    }
}