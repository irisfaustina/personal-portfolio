'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes' /* usethme hook from next theme package */

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function ThemeToggle() { /* don't run on server since no access to the theme */
  const { setTheme, resolvedTheme } = useTheme() /* function to set the theme and resolved theme what ever resolved from user system: dark or light*/
  const [mounted, setMounted] = useState(false) /* only render toggle if this theme is mounted */

  useEffect(() => {
    setMounted(true) /* if mounted, return button */
  }, [])

  if (!mounted) { /* if unmounted, return null */
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark') 
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4' />
      ) : (
        <MoonIcon className='size-4' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}