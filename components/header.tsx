//global header

import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      
      <nav className='container flex max-w-3xl flex items-center justify-between mx-auto px-4'>
        <Link href='/' className='text-2xl font-bold'>
          Iris Liu
        </Link>

        <ul className='flex items-center gap-2 text-sm font-light text-muted-foreground sm:gap-10'>
        <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
        <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/investments'>Investments</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}