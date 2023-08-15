'use client'
import { IPageNavigationProps } from '@/@types/PageNavigationTypes'
import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const PageNavigation = ({ from, to, link }: IPageNavigationProps) => {
  return (
    <Slide triggerOnce>
      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href={link}
              aria-label="Voltar para a lista de projetos"
              className="hover:font-semibold hover:text-zinc-400"
            >
              {to}
            </Link>
          </li>
          <li>&gt;</li>
          <li>
            <span className="font-semibold capitalize">{from}</span>
          </li>
        </ul>
      </nav>
    </Slide>
  )
}

export default PageNavigation
