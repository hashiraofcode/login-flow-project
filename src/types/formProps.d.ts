import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

export type InputAtt = InputHTMLAttributes & {
  type: string
  placeholder: string
  position?: number
}
export type ButtonAtt = ButtonHTMLAttributes & {
  children: string | ReactNode
}
type mensage = {
  status: 'sucsses' | 'error'
  msg: string
}
export interface FormProps {
  inputs: InputAtt[]
  button: ButtonAtt[]
  mensage?: mensage
  isLoginForm?: boolean
}
