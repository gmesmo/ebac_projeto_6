import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LojasType } from 'services/api'

import { Banner, Cuisine, Name } from './styles'
import { Container } from 'styles'
import { DishesCard } from 'components/StoreCard'

const Store = () => {
  const { id } = useParams()

  const [store, setStore] = useState<LojasType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setStore(res))
  }, [id])

  if (!store) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner image={store.capa}>
        <Container>
          <Cuisine>{store.tipo}</Cuisine>
          <Name>{store.titulo}</Name>
        </Container>
      </Banner>
      <Container dish>
        {store.cardapio.map((dish) => (
          <DishesCard key={dish.id} dish={dish} />
        ))}
      </Container>
    </>
  )
}

export default Store
