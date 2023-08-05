import React, { ReactNode } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputField from '@/components/InputField'
import { FormProvider, useForm } from 'react-hook-form'

const TestWrapper = ({ children }: { children: ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

const RenderInputField = () => {
  return render(
    <TestWrapper>
      <InputField
        name="title"
        label="Nome:"
        type="text"
        rules={{ required: 'Campo obrigatório' }}
      />
    </TestWrapper>,
  )
}

describe('InputField component', () => {
  it('should render input field component', () => {
    RenderInputField()
  })

  it('should display label with text "Nome"', () => {
    const { getByText } = RenderInputField()

    const label = getByText('Nome:')

    expect(label).toBeInTheDocument()
  })

  it('should display input with type "text"', () => {
    const { getByRole } = RenderInputField()

    const input = getByRole('textbox')

    expect(input).toHaveAttribute('type', 'text')
  })

  it('should display input with name "title"', () => {
    const { getByRole } = RenderInputField()

    const input = getByRole('textbox')

    expect(input).toHaveAttribute('name', 'title')
  })

  it('should write "Hello World" in input', () => {
    const { getByRole } = RenderInputField()

    const input = getByRole('textbox')

    fireEvent.change(input, {
      target: {
        value: 'Hello World',
      },
    })

    expect(input).toHaveValue('Hello World')
  })
})
