import styled from 'styled-components'
import { LocationType } from '.'
import { Container, cores } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  text?: 'left' | 'right'
}

export const HeroContainer = styled.div<LocationType>`
  flex-direction: ${({ pathname }) => (pathname === '/' ? 'column' : 'row')};
  justify-content: ${({ pathname }) =>
    pathname === '/' ? 'center' : 'space-between'};
  align-items: center;

  background-image: url(${require('../../assets/images/fundo.png')});
  background-size: cover;
  background-repeat: no-repeat;
  height: ${({ pathname }) => (pathname === '/' ? '384px' : '186px')};
  width: 100%;
  padding: 40px 0;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 0;
    margin-bottom: 0;

    height: 100%;

    a {
      align-self: center;
    }
  }

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
  text-align: ${({ text }) => (text === 'left' ? 'left' : 'right')};

  width: 200px;
`
