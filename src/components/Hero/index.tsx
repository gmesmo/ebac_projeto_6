import { Link, useLocation } from 'react-router-dom'
import { HeroContainer, RestaurantInfo, Text } from './styles'
import { Container } from 'styles'

interface Props {
  logo: string
}

type LocationType = {
  pathname: string
}

export type isHomeType = {
  isHome?: boolean
}

const Hero = ({ logo }: Props) => {
  const location: LocationType = useLocation()

  const isHome = location.pathname === '/'

  // if (isHome) {
  //   return (
  //     <HeroContainer isHome>
  //       <Link to='/'>
  //         <img src={logo} alt='Logo EFOOD' />
  //       </Link>
  //       <Text>
  //         Viva experiências gastronômicas
  //         <br />
  //         no conforto da sua casa
  //       </Text>
  //     </HeroContainer>
  //   )
  // }

  return (
    <HeroContainer isHome={isHome}>
      <Container>
        {isHome ? (
          <>
            <Link to='/'>
              <img src={logo} alt='Logo EFOOD' />
            </Link>
            <Text>
              Viva experiências gastronômicas
              <br />
              no conforto da sua casa
            </Text>
          </>
        ) : (
          <>
            <RestaurantInfo text='left'>Restaurante</RestaurantInfo>
            <Link to='/'>
              <img src={logo} alt='Logo EFOOD' />
            </Link>
            <RestaurantInfo>0 produto(s) no carrinho</RestaurantInfo>
          </>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
