import { Orcamento } from "../entities/Orcamento";
import { Repositorio } from "../interfaces/Repositorio";

export class OrcamentoRepositorio implements Repositorio {
    salvar(orcamento: Orcamento): void {
        console.log(`Orçamento de ${orcamento.cliente.nome} salvo com sucesso!`)
    }
}