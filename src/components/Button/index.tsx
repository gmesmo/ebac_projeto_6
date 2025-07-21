import { ButtonLink, BuyButton, StyledButton } from './styles'

type Props = {
  children: React.ReactNode
  to?: string
  size?: 'normal' | 'big'
}

const Button = ({ children, to }: Props) => {
  if (to) return <ButtonLink to={to}>{children}</ButtonLink>

  return <StyledButton>{children}</StyledButton>
}

export const CartButton = ({ children }: Props) => (
  <BuyButton>{children}</BuyButton>
)

export default Button
