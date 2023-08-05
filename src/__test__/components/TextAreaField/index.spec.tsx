import React, { ReactNode } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextAreaField } from '@/components/TextAreaField'
import { FormProvider, useForm } from 'react-hook-form'

const TestWrapper = ({ children }: { children: ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

const renderTextAreaField = () => {
  return render(
    <TestWrapper>
      <TextAreaField
        name="description"
        label="Descrição:"
        rules={{ required: 'Campo obrigatório' }}
      />
    </TestWrapper>,
  )
}

describe('TextAreaField component', () => {
  it('should render TextAreaField component', () => {
    renderTextAreaField()
  })

  it('should display the "Descrição:" label', () => {
    const { getByText } = renderTextAreaField()

    expect(getByText('Descrição:')).toBeInTheDocument()
  })

  it('should have attribute name "description" on input textArea', () => {
    const { getByRole } = renderTextAreaField()

    const inputTextArea = getByRole('textbox')

    expect(inputTextArea).toHaveAttribute('name', 'description')
  })

  it('should write "Hello, Im Iarlen Reis" on input textArea', () => {
    const { getByRole } = renderTextAreaField()

    const inputTextArea = getByRole('textbox')

    fireEvent.change(inputTextArea, {
      target: { value: 'Hello, Im Iarlen Reis' },
    })

    expect(inputTextArea).toHaveValue('Hello, Im Iarlen Reis')
  })
})
