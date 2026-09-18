import { Notificacao } from "../interfaces/Notificacao";

export class NotificacaoWhatsApp implements Notificacao {

    enviar(mensagem: string): void {
        console.log("WhatsApp: ", mensagem);
    }
}