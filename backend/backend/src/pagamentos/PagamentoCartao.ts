import { Pagamento } from "./Pagamento";

export class PagamentoCartao implements Pagamento {

    processar(valor: number): number {
        return valor;
    }
}