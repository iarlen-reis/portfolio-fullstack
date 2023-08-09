import Link from 'next/link'
import React from 'react'

interface IPageNavigationProps {
  from: string
  to: string
  link: string
}

/*
 <div>
        <p className="font-roboto text-sm transition-colors lg:text-base">
          <Link
            href={link}
            aria-label="Voltar para a lista de projetos"
            className="hover:font-semibold hover:text-zinc-400"
          >
            {to}
          </Link>{' '}
          &gt; <span className="font-semibold capitalize">{from}</span>
        </p>
      </div>
*/

const PageNavigation = ({ from, to, link }: IPageNavigationProps) => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-1">
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
    </>
  )
}

export default PageNavigation
