import styled from 'styled-components'
import type { ColorContainer } from '@/types'

export const MainContainer = styled.div<{ color: ColorContainer }>`
  width: 100%;
  height: 100dvh;
  background-color: ${(props) => (props.color === 'ligth' ? '#fff' : '#666')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
