import { Link } from 'react-router-dom'
import { Props as StoreCardProps } from '../StoreCard'

import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonLink = styled(Link)<StoreCardProps>`
  font-size: ${({ size }) => (size === 'big' ? '14px' : '12px')};

  display: inline-block;

  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 4px 6px;
  cursor: pointer;

  text-decoration: none;
`

export const StyledButton = styled.a<StoreCardProps>`
  font-size: ${({ size }) => (size === 'big' ? '14px' : '12px')};

  display: inline-block;

  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 4px 6px;

  text-decoration: none;
`

export const BuyButton = styled.a`
  display: inline-block;

  width: 100%;
  padding: 4px;
  text-align: center;

  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${cores.offWhite};
  color: ${cores.laranja};
`
