import { LojasApi } from 'services/api'
import StoreCard from '../../components/StoreCard'
import { Container } from '../../styles'

const Home = () => {
  const restaurantes = LojasApi()

  return (
    <Container>
      {restaurantes.map((restaurante) => (
        <StoreCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </Container>
  )
}

export default Home
