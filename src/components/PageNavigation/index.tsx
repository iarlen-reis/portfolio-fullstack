import Link from 'next/link'
import React from 'react'

interface IPageNavigationProps {
  from: string
  to: string
  link: string
}
const PageNavigation = ({ from, to, link }: IPageNavigationProps) => {
  return (
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
  )
}

export default PageNavigation
