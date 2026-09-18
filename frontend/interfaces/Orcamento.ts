export interface Cliente {
  nome: string
  telefone: string
}
export interface Veiculo {
  marca:string
  modelo: string
  ano:number
  placa: string
}
export interface Servico {
  descricao: string
  valor: number
}
export interface Orcamento {
  cliente: Cliente
  veiculo: Veiculo
  servicos: Servico[]
}