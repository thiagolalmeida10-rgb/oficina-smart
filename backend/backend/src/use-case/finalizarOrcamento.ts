import { Orcamento } from "../entities/Orcamento";
import { Notificacao } from "../interfaces/Notificacao";
import { Repositorio } from "../interfaces/Repositorio";
import { Pagamento } from "../pagamentos/Pagamento";

export class FinalizarOrcamento {

    constructor(
        private pagamento: Pagamento,
        private notificacao: Notificacao,
        private repositorio: Repositorio
    ){}

    executar(orcamento: Orcamento): number{
        const total = orcamento.calcularTotal();
    
        const valorfinal = this.pagamento.processar(total)
    
        this.repositorio.salvar(orcamento)
    
        this.notificacao.enviar(`Olá ${orcamento.cliente.nome}, seu orçamento ficou em R$ ${valorfinal.toFixed(2)}`)
            return valorfinal
    }
}