import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MenuContext } from '@/contexts/MenuContext'
import MenuButton from '@/components/Header/MenuButton'
import '@testing-library/jest-dom'

const mockHandleIsMobile = jest.fn()

const renderMenuButton = (isVisible: boolean) => {
  return render(
    <MenuContext.Provider
      value={{ isMobile: isVisible, handleIsMobile: mockHandleIsMobile }}
    >
      <MenuButton />
    </MenuContext.Provider>,
  )
}

describe('MenuButton component', () => {
  it('should render menu button component', () => {
    const { getByRole } = renderMenuButton(false)

    const menuButton = getByRole('button')

    expect(menuButton).toBeInTheDocument()
  })

  it('should display the open menu icon and not display the close menu icon.', () => {
    const { getByTestId, queryByTestId } = renderMenuButton(false)

    const menuButton = getByTestId('menu')

    expect(menuButton).toBeInTheDocument()

    expect(menuButton).toBeInTheDocument()

    const openMenuButton = queryByTestId('close')

    expect(openMenuButton).not.toBeInTheDocument()
  })

  it('should display the close menu icon and not display the open menu icon.', () => {
    const { getByTestId, queryByTestId } = renderMenuButton(true)

    const menuButton = getByTestId('close')

    expect(menuButton).toBeInTheDocument()

    const openMenuButton = queryByTestId('menu')

    expect(openMenuButton).not.toBeInTheDocument()
  })

  it('should call the handleIsmobile function when clicking on the open menu button.', () => {
    const { getByTestId } = renderMenuButton(false)

    const menuButton = getByTestId('menu')

    fireEvent.click(menuButton)

    expect(mockHandleIsMobile).toHaveBeenCalled()
  })
})
