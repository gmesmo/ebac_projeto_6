import { useParams } from 'react-router-dom'
import { useGetLojaQuery } from 'services/api'

import { Banner, Cuisine, Name } from './styles'
import { Container } from 'styles'
import { DishesCard } from 'components/StoreCard'

const Store = () => {
  const { id } = useParams()

  const { data: store } = useGetLojaQuery(id!)

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
