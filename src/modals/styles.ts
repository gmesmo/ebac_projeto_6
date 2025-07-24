import styled from 'styled-components'
import { cores } from 'styles'

export const DetailsCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 1024px;
  height: 344px;
  padding: 32px;

  background-color: ${cores.laranja};
  color: ${cores.branco};

  display: flex;

  .close {
    position: absolute;
    top: 8px;
    right: -16px;
    cursor: pointer;

    width: 16px;
    height: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    margin-right: 24px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;

    margin: 16px 0;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`
