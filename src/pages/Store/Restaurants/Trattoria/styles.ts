import styled from 'styled-components'
import { cores } from 'styles'

type Props = {
  image: string
}

export const Banner = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  padding: 25px 170px 32px 170px;
  color: ${cores.branco};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;

    filter: brightness(50%);
  }
`

export const Cuisine = styled.p`
  font-size: 32px;
  font-weight: 100;
`

export const Name = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
