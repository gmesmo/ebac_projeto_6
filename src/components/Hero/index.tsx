import { Link, useLocation } from 'react-router-dom'
import { HeroContainer, RestaurantInfo, Text } from './styles'

interface Props {
  logo: string
}

export type LocationType = {
  pathname: string
}

const Hero = ({ logo }: Props) => {
  const location: LocationType = useLocation()

  if (location.pathname === '/') {
    return (
      <HeroContainer pathname={location.pathname}>
        <Link to='/'>
          <img src={logo} alt='Logo EFOOD' />
        </Link>
        <Text>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Text>
      </HeroContainer>
    )
  }

  return (
    <HeroContainer pathname={location.pathname}>
      <RestaurantInfo text='center'>Restaurante</RestaurantInfo>
      <Link to='/'>
        <img src={logo} alt='Logo EFOOD' />
      </Link>
      <RestaurantInfo>0 produto(s) no carrinho</RestaurantInfo>
    </HeroContainer>
  )
}

export default Hero
