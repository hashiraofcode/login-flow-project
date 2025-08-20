import { FormComponent } from '@/components'
import type { InputAtt } from '@/types'
import { MainContainer, MainTitle } from '@/styles'

const inputs: InputAtt[] = [
  { type: 'email', placeholder: 'Email' },
  { type: 'password', placeholder: 'Senha' },
]

const button = [{ children: 'Login' }]

export const Login = () => {
  return (
    <MainContainer color="dark">
      <MainTitle>Login for my Application</MainTitle>
      <FormComponent inputs={inputs} button={button} isLoginForm={true} />
    </MainContainer>
  )
}
