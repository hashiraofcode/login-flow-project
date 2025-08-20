import { FormContainer, Button, Inputs, MensageComponent } from '@/styles'
import type { FormProps } from '@/types/index'

export const FormComponent = ({ inputs, button, mensage }: FormProps) => {
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
    </FormContainer>
  )
}
