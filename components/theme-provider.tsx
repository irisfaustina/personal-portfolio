"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { Toaster } from "@/components/ui/sonner"


export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
    attribute="class" /* tells next-themes to use CSS classes for theme switching */
    defaultTheme="dark" /* sets the initial theme to match the system preference */
    enableSystem /* allows the theme to follow the system preference as defined in toggle */
    {...props}>
      <ToasterProvider /> {/* custome function to also pass the theme, toast provider */}
      {children}
    </NextThemesProvider>
  )
}


function ToasterProvider() { /* to pass on theme to toast */
  const {resolvedTheme} = useTheme()
  return (
    <Toaster 
    closeButton={true}
    position='top-right' 
    theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
  )
}
