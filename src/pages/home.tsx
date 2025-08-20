import { FormComponent } from '@/components'
import type { InputAtt } from '@/types'

const inputs: InputAtt[] = [
  { type: 'email', placeholder: 'Email' },
  { type: 'password', placeholder: 'Senha', position: 2 },
]

const button = [{ children: 'Login' }]

export const Home = () => {
  return (
    <>
      <FormComponent
        inputs={inputs}
        button={button}
        mensage={{ msg: 'falha ao logar', status: 'error' }}
      />
    </>
  )
}
