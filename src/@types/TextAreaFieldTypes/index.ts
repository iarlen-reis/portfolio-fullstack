import { TextareaHTMLAttributes } from 'react'

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  rules?: object
  defaultValue?: string
}
