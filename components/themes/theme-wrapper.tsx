"use client"

import "@/components/themes/themes.css"
import { useTheme } from "@/components/themes/use-theme"
import { cn } from "@/lib/utils"

export function ThemeWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [theme] = useTheme()

  return <div className={cn(theme && `theme-${theme.theme}`)}>{children}</div>
}
