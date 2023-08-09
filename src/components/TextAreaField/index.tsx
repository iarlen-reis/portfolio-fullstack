'use client'
import { TextareaHTMLAttributes } from 'react'
import { useController, useFormContext } from 'react-hook-form'

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  rules?: object
}

export const TextAreaField = ({
  label,
  name,
  rules,
  ...rest
}: TextAreaFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  })

  return (
    <fieldset className="flex max-w-full flex-col gap-1.5">
      <label htmlFor={name} className="font-poppins font-medium lg:text-lg">
        {label}
      </label>
      <textarea
        className="w-full rounded border-none bg-zinc-300 px-3 py-2 font-poppins text-base text-zinc-900 outline-none focus:outline-blue-600 disabled:animate-pulse disabled:bg-zinc-400 disabled:text-zinc-500 lg:text-lg"
        ref={ref}
        {...inputProps}
        {...rest}
        rows={8}
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </fieldset>
  )
}
