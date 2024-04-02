"use client"

import { useTheme } from "@/components/themes/use-theme"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeSelector() {
  const [theme, setTheme] = useTheme()

  return (
    <div className="flex ml-auto items-center justify-center gap-2">
      <Button
        size="icon"
        variant="outline"
        className={cn("w-7 h-7", theme.theme === "zinc" && "border-zinc-950")}
        onClick={() =>
          setTheme({
            ...theme,
            theme: "zinc",
          })
        }
      >
        <div className="bg-zinc-950 aspect-square w-5 rounded-sm" />
        <span className="sr-only">Zinc</span>
      </Button>
      <Button
        size="icon"
        variant="outline"
        className={cn(
          "w-7 h-7",
          theme.theme === "orange" && "border-orange-400"
        )}
        onClick={() =>
          setTheme({
            ...theme,
            theme: "orange",
          })
        }
      >
        <div className="bg-orange-400 aspect-square w-5 rounded-sm" />
        <span className="sr-only">Orange</span>
      </Button>
      <Button
        size="icon"
        variant="outline"
        className={cn("w-7 h-7", theme.theme === "green" && "border-green-600")}
        onClick={() =>
          setTheme({
            ...theme,
            theme: "green",
          })
        }
      >
        <div className="bg-green-600 aspect-square w-5 rounded-sm" />
        <span className="sr-only">Orange</span>
      </Button>
    </div>
  )
}
