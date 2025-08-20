import styled from 'styled-components'

export const Inputs = styled.input<{ position?: number }>`
  font: 300 clamp(1.5rem, 2vw, 1.9rem) inherit;
  color: #03fcd2ff;
  width: 100%;
  height: 40px;
  border-radius: 0.5rem;
  border: 1px solid #999;
  padding: 0 0.9rem 0 0.9rem;
  margin-bottom: 1rem;

  &:nth-child(${(props) => props.position}) {
    margin-bottom: 0.2rem;
  }
  &:focus {
    outline: 0.5px solid #03fcd29f;
  }
`
