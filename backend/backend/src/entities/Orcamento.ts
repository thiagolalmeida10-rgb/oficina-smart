import { Cliente } from "./Cliente";
import { Servico } from "./Servico";
import { Veiculo } from "./Veiculo";

export class Orcamento {

    private servicos: Servico[] = [];

    constructor(

        public cliente: Cliente,
        public veiculo: Veiculo
    ){}

    adicionarServico(servico: Servico): void{
        this.servicos.push(servico)
    }

    calcularTotal(): number {
        return this.servicos.reduce(
            (total, servico) => total + servico.valor,
            0
        )
    }
}