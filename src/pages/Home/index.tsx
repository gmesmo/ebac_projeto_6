import StoreCard from '../../components/StoreCard'
import { Container } from '../../styles'
import { restaurantes } from 'assets/restaurant-db'

const Home = () => {
  return (
    <Container>
      {restaurantes.map((restaurante) => (
        <StoreCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </Container>
  )
}

export default Home
