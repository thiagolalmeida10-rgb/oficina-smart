import { Notificacao } from "../interfaces/Notificacao";
import { Repositorio } from "../interfaces/Repositorio";
import { Pagamento } from "../pagamentos/Pagamento";


export class OficinaService {
    constructor(
        private pagamento: Pagamento,
        private notificacao: Notificacao,
        private repositorio: Repositorio
    ){}
}