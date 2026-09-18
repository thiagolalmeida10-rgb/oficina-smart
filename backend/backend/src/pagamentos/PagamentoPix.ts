import { Pagamento } from "./Pagamento";

export class PagamentoPix implements Pagamento {

    processar(valor: number): number {
        return valor * 0.90;
    }
}