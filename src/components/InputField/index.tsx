'use client'
import { InputHTMLAttributes } from 'react'
import { useController, useFormContext } from 'react-hook-form'

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  rules?: object
  type: string
  defaultValue?: string
}

const TextField = ({
  name,
  label,
  type,
  rules,
  defaultValue,
  ...rest
}: ITextFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  return (
    <fieldset className="flex w-full flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-poppins text-sm font-medium lg:text-lg"
      >
        {label}
      </label>
      <input
        type={type}
        {...inputProps}
        {...rest}
        ref={ref}
        className="w-full rounded bg-zinc-300 px-3 py-2 font-poppins text-base text-zinc-900 outline-none focus:outline-blue-600 disabled:animate-pulse disabled:bg-zinc-400 disabled:text-zinc-500 lg:text-lg"
      />
      {error?.message && (
        <span className="text-xs text-red-500">{error.message}</span>
      )}
    </fieldset>
  )
}

export default TextField
