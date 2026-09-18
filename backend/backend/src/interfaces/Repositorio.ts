import { Orcamento } from "../entities/Orcamento";

export interface Repositorio {
    salvar(orcamento: Orcamento): void;
}