"use client"

import { useState } from "react"

interface Cliente {
  nome: string
  telefone: string
}

interface Veiculo {
  marca: string
  modelo: string
  ano: number
  placa: string
}

interface Servico {
  descricao: string
  valor: number
}

interface Orcamento {
  cliente: Cliente
  veiculo: Veiculo
  servicos: Servico[]
}

const servicosDisponiveis = [
  {
    descricao: "Troca de oleo",
    valor: 150
  },
  {
    descricao: "Alinhamento",
    valor: 80
  },
  {
    descricao: "Balanceamento",
    valor: 60
  },
  {
    descricao: "Troca de Pastilhas de freio",
    valor: 250
  }
]

export default function Home() {
  const [servicoSelecionado, setServicoSelecionado] = useState("")

  const [orcamento, setOrcamento] = useState<Orcamento>({
    cliente: {
      nome: "",
      telefone: ""
    },
    veiculo: {
      marca: "",
      modelo: "",
      ano: 0,
      placa: ""
    },
    servicos: []
  })

  function adicionarServico() {
    const servico = servicosDisponiveis.find(
      (servico) => servico.descricao === servicoSelecionado
    )

    if (!servico) {
      return
    }

    setOrcamento({
      ...orcamento,
      servicos: [
        ...orcamento.servicos,
        servico
      ]
    })

    setServicoSelecionado("")
  }

  function removerServico(index: number) {
    setOrcamento({
      ...orcamento,
      servicos: orcamento.servicos.filter(
        (_, i) => i !== index
      )
    })
  }

  const total = orcamento.servicos.reduce(
    (total, servico) => total + servico.valor,
    0
  )

  return (
    <main className="min-h-screen text-black bg-gray-400 p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-3xl font-bold">
          Orçamento
        </h1>

        {/* CLIENTE */}
        <section className="mb-6 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Cliente
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label className="mb-1 block">
                Nome
              </label>

              <input
                type="text"
                value={orcamento.cliente.nome}
                onChange={(e) =>
                  setOrcamento({
                    ...orcamento,
                    cliente: {
                      ...orcamento.cliente,
                      nome: e.target.value
                    }
                  })
                }
                placeholder="Nome do cliente"
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block">
                Telefone
              </label>

              <input
                type="text"
                value={orcamento.cliente.telefone}
                onChange={(e) =>
                  setOrcamento({
                    ...orcamento,
                    cliente: {
                      ...orcamento.cliente,
                      telefone: e.target.value
                    }
                  })
                }
                placeholder="(00) 00000-0000"
                className="w-full rounded border p-2"
              />
            </div>

          </div>
        </section>

        {/* VEÍCULO */}
        <section className="mb-6 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Veículo
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label className="mb-1 block">
                Marca
              </label>

              <input
                type="text"
                value={orcamento.veiculo.marca}
                onChange={(e) =>
                  setOrcamento({
                    ...orcamento,
                    veiculo: {
                      ...orcamento.veiculo,
                      marca: e.target.value
                    }
                  })
                }
                placeholder="Ex: Toyota"
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block">
                Modelo
              </label>

              <input
                type="text"
                value={orcamento.veiculo.modelo}
                onChange={(e) =>
                  setOrcamento({
                    ...orcamento,
                    veiculo: {
                      ...orcamento.veiculo,
                      modelo: e.target.value
                    }
                  })
                }
                placeholder="Ex: Corolla"
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block">
                Ano
              </label>

              <input
                type="number"
                value={orcamento.veiculo.ano || ""}
                onChange={(e) =>
                  setOrcamento({
                    ...orcamento,
                    veiculo: {
                      ...orcamento.veiculo,
                      ano: Number(e.target.value)
                    }
                  })
                }
                placeholder="2025"
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block">
                Placa
              </label>

              <input
                type="text"
                value={orcamento.veiculo.placa}
                onChange={(e) =>
                  setOrcamento({
                    ...orcamento,
                    veiculo: {
                      ...orcamento.veiculo,
                      placa: e.target.value.toUpperCase()
                    }
                  })
                }
                placeholder="ABC-1234"
                className="w-full rounded border p-2"
              />
            </div>

          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="mb-6 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Serviços
          </h2>

          <div className="flex gap-3">

            <select
              value={servicoSelecionado}
              onChange={(e) =>
                setServicoSelecionado(e.target.value)
              }
              className="flex-1 rounded border p-2"
            >
              <option value="">
                Selecione um serviço
              </option>

              {servicosDisponiveis.map((servico) => (
                <option
                  key={servico.descricao}
                  value={servico.descricao}
                >
                  {servico.descricao} - R$ {servico.valor}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={adicionarServico}
              className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Adicionar
            </button>

          </div>

          {/* LISTA DE SERVIÇOS */}
          <div className="mt-6">

            {orcamento.servicos.length === 0 ? (
              <p className="text-gray-500">
                Nenhum serviço adicionado.
              </p>
            ) : (
              <ul className="space-y-3">

                {orcamento.servicos.map((servico, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between rounded border p-3"
                  >
                    <div>
                      <p className="font-medium">
                        {servico.descricao}
                      </p>

                      <p className="text-gray-600">
                        R$ {servico.valor.toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removerServico(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remover
                    </button>
                  </li>
                ))}

              </ul>
            )}

          </div>

          {/* TOTAL */}
          <div className="mt-6 border-t pt-4 text-right">
            <span className="text-xl font-bold">
              Total: R$ {total.toFixed(2)}
            </span>
          </div>

        </section>

        {/* FINAL */}
        <button
          type="button"
          onClick={() => console.log(orcamento)}
          className="w-full rounded-lg bg-green-600 py-3 font-bold text-white hover:bg-green-700"
        >
          Gerar Orçamento
        </button>

      </div>
    </main>
  )
}
