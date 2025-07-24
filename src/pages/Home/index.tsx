import { useGetLojasQuery } from 'services/api'
import StoreCard from '../../components/StoreCard'
import { Container } from '../../styles'

const Home = () => {
  const { data: restaurantes } = useGetLojasQuery()

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <Container>
      {restaurantes.map((restaurante) => (
        <StoreCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </Container>
  )
}

export default Home
