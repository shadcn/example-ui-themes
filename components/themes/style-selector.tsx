"use client"

import { useTheme } from "@/components/themes/use-theme"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StyleSelector() {
  const [theme, setTheme] = useTheme()

  return (
    <Select
      value={theme.style}
      onValueChange={(value) =>
        setTheme({
          ...theme,
          style: value,
        })
      }
    >
      <SelectTrigger className="h-7 text-xs px-2 w-[100px]">
        <SelectValue placeholder="Select a style" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        <SelectItem value="new-york">New York</SelectItem>
      </SelectContent>
    </Select>
  )
}
