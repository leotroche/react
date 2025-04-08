import type { ComponentProps } from 'react'
import { Link } from 'wouter'

interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ ...props }: HeaderProps) {
  return (
    <header {...props}>
      <nav className="flex gap-4 p-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}
