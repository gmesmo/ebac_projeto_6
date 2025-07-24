import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type DishType = {
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
  cardapio: DishType[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getLojas: builder.query<LojasType[], void>({
      query: () => ''
    }),
    getLoja: builder.query<LojasType, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetLojasQuery, useGetLojaQuery } = api
export default api
