import { Disclaimer, FooterContainer, Social } from './styles'

import facebook from '../../assets/images/social/facebook.png'
import instagram from '../../assets/images/social/instagram.png'
import twitter from '../../assets/images/social/twitter.png'
import { Link } from 'react-router-dom'

interface Props {
  logo: string
}

const Footer = ({ logo }: Props) => {
  return (
    <FooterContainer>
      <Link to='/'>
        <img src={logo} alt='Logo EFOOD' />
      </Link>
      <Social>
        <img src={instagram} alt='Link para instagram' />
        <img src={facebook} alt='Link para facebook' />
        <img src={twitter} alt='Link para twitter' />
      </Social>
      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Disclaimer>
    </FooterContainer>
  )
}

export default Footer
