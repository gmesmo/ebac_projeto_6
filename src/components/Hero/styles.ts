import styled from 'styled-components'
import { LocationType } from '.'
import { cores } from '../../styles'

type Props = {
  text?: string
}

export const HeroContainer = styled.div<LocationType>`
  display: flex;
  flex-direction: ${({ pathname }) => (pathname === '/' ? 'column' : 'row')};
  justify-content: ${({ pathname }) =>
    pathname === '/' ? 'center' : 'space-between'};
  align-items: center;

  background-image: url(${require('../../assets/images/fundo.png')});
  background-size: cover;
  background-repeat: no-repeat;
  height: ${({ pathname }) => (pathname === '/' ? '384px' : '186px')};
  width: 100%;
  padding: 40px 176px;

  img {
    display: inline-block;
    width: 125px;
  }
`

export const Text = styled.p`
  color: ${cores.laranja};
  font-size: 36px;
  font-weight: 900;
  text-align: center;

  margin-top: auto;
`

export const RestaurantInfo = styled.div<Props>`
  color: ${cores.laranja};
  font-size: 18px;
  font-weight: 900;
  text-align: ${({ text }) => (text === 'center' ? 'center' : 'right')};
  width: 260px;
`
