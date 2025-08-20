import { FormContainer, Button, Inputs, MensageComponent } from '@/styles'
import { RegistrationText } from '@/styles/registrationText'
import type { FormProps } from '@/types/index'
import { Link } from 'react-router-dom'

export const FormComponent = ({
  inputs,
  button,
  mensage,
  isLoginForm,
}: FormProps) => {
  return (
    <FormContainer>
      {inputs.map((input, index) => {
        return <Inputs {...input} key={index} />
      })}

      {mensage && (
        <MensageComponent className={`${mensage.status}`}>
          {mensage.msg}
        </MensageComponent>
      )}
      {button.map((button, index) => {
        return (
          <Button {...button} key={index}>
            {button?.children ?? 'mensagem falhou verificar em formComponents'}
          </Button>
        )
      })}
      {isLoginForm && (
        <RegistrationText>
          Não tem conta? <Link to="/registration">Registre-se já</Link>
        </RegistrationText>
      )}
    </FormContainer>
  )
}
