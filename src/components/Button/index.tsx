import { ButtonLink, BuyButton, StyledButton } from './styles'

export type ButtonProps = {
  children: React.ReactNode
  to?: string
  size?: 'normal' | 'big'
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({ children, to }: ButtonProps) => {
  if (to) return <ButtonLink to={to}>{children}</ButtonLink>

  return <StyledButton>{children}</StyledButton>
}

export const CartButton = ({
  children,
  onClick,
  variant = 'primary'
}: ButtonProps) => (
  <BuyButton onClick={onClick} variant={variant}>
    {children}
  </BuyButton>
)

export default Button
