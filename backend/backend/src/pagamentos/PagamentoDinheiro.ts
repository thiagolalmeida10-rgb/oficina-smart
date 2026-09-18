import { Pagamento } from "./Pagamento";

export class PagamentoDinheiro implements Pagamento {

    processar(valor: number): number {
        return valor;
    }
}