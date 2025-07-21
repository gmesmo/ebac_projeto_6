import { Banner, Cuisine, Name } from './styles'
import TrattoriaImage from '../../../../assets/images/trattoria.png'
import { useSearchParams } from 'react-router-dom'
import { restaurantes } from 'assets/restaurant-db'
import { Container } from 'styles'
import { DishesCard } from 'components/StoreCard'

const Trattoria = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const Trattoria = restaurantes.find(
    (restaurante) => restaurante.id === Number(id)
  )

  if (Trattoria) {
    return (
      <>
        <Banner image={TrattoriaImage}>
          <Cuisine>{Trattoria.cuisine}</Cuisine>
          <Name>{Trattoria.name}</Name>
        </Banner>
        <Container dish>
          {Trattoria.dishes?.map((dish) => (
            <DishesCard key={dish.id} dish={dish} />
          ))}
        </Container>
      </>
    )
  }

  return <div>Nada encontrado</div>
}

export default Trattoria
