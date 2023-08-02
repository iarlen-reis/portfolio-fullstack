import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FrameWorkIcons from '@/components/FrameWorkIcons'

const renderFrameWorkIcons = () => {
  return render(<FrameWorkIcons />)
}

describe('FrameWorkIcons component', () => {
  it('should render FrameWorkIcons component', () => {
    renderFrameWorkIcons()
  })

  it('should display icon "ReactJs" with href', () => {
    const { getAllByRole } = renderFrameWorkIcons()

    const reactJsIcon = getAllByRole('link')[0]

    expect(reactJsIcon).toHaveAttribute('href', 'https://react.dev/')
  })

  it('should display icon "NextJs" with href', () => {
    const { getAllByRole } = renderFrameWorkIcons()

    const nextJsIcon = getAllByRole('link')[1]

    expect(nextJsIcon).toHaveAttribute('href', 'https://nextjs.org/')
  })

  it('should display icon "Tailwind" with href', () => {
    const { getAllByRole } = renderFrameWorkIcons()

    const tailwindIcon = getAllByRole('link')[2]

    expect(tailwindIcon).toHaveAttribute('href', 'https://tailwindcss.com/')
  })

  it('should display icon "Fastify" with href', () => {
    const { getAllByRole } = renderFrameWorkIcons()

    const fastifyIcon = getAllByRole('link')[3]

    expect(fastifyIcon).toHaveAttribute('href', 'https://fastify.dev/')
  })
})
