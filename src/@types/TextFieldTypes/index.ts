import { InputHTMLAttributes } from 'react'

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  rules?: object
  type: string
  defaultValue?: string
}
