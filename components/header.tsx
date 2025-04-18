//global header

import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'> {/* header components */}
      <nav className='container flex max-w-3xl items-center justify-between mx-auto px-4'> {/* nav components */}
        <div> {/* logo */}
          <Link href='/' className='text-2xl font-bold'>
            IL
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'> {/* menu items */}
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div> {/* theme toggle light or dark */}
          <ThemeToggle /> {/* nested from the toggle component */}
        </div>
      </nav>
    </header>
  )
}