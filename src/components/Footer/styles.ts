import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${cores.offWhite};

  padding: 40px;
`

export const Social = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 32px;
  margin-bottom: 80px;

  width: 88px;
`

export const Disclaimer = styled.p`
  width: 480px;
  font-size: 10px;

  color: ${cores.laranja};
  text-align: center;
`
