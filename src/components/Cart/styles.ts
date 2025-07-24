import styled from 'styled-components'
import { cores } from 'styles'

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  width: 360px;
  height: 100vh;
  padding: 32px 8px;

  color: ${cores.branco};
  background-color: ${cores.laranja};

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    font-size: 16px;
    font-weight: 700;
  }

  a {
    font-size: 16px;
  }
`

export const SelectedItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 40px;
`

export const Item = styled.div`
  position: relative;
  display: flex;
  gap: 8px;

  width: 100%;
  height: 100px;
  padding: 8px 8px 12px 8px;

  background-color: ${cores.offWhite};
  color: ${cores.laranja};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  .remove {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;

    width: 16px;
    height: 16px;
  }
`
