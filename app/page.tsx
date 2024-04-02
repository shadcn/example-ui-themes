import { Examples } from "@/components/examples"
import { StyleSelector } from "@/components/themes/style-selector"
import { ThemeSelector } from "@/components/themes/theme-selector"
import { ThemeWrapper } from "@/components/themes/theme-wrapper"

export default function Home() {
  return (
    <main className="h-screen px-6 flex items-center justify-center">
      <div className="grid gap-4">
        <div className="flex items-center">
          <StyleSelector />
          <ThemeSelector />
        </div>
        <ThemeWrapper>
          <Examples />
        </ThemeWrapper>
      </div>
    </main>
  )
}
