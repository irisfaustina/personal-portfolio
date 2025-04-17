"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
    attribute="class" /* tells next-themes to use CSS classes for theme switching */
    defaultTheme="system" /* sets the initial theme to match the system preference */
    enableSystem /* allows the theme to follow the system preference as defined in toggle */
    {...props}>
      {children}
    </NextThemesProvider>
  )
}
