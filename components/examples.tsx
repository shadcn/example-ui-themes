"use client"

import { Example as ExampleDefault } from "@/components/styles/default/examples/example"
import { Example as ExampleNewYork } from "@/components/styles/new-york/examples/example"
import { useTheme } from "@/components/themes/use-theme"
import { cn } from "@/lib/utils"

export function Examples() {
  const [theme] = useTheme()

  return (
    <div className="min-h-[300px]">
      <div className={cn(theme.style === "default" ? "flex" : "hidden")}>
        <ExampleDefault />
      </div>
      <div className={cn(theme.style === "new-york" ? "flex" : "hidden")}>
        <ExampleNewYork />
      </div>
    </div>
  )
}
