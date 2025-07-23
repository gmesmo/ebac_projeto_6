import { useEffect, useState } from 'react'

export type CardapioType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type LojasType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  banner: string
  cardapio: CardapioType[]
}

export const LojasApi = () => {
  const [lojas, setLojas] = useState<LojasType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [])

  return lojas
}
