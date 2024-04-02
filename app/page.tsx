import { Example } from "@/components/example"
import { ThemeSelector } from "@/components/themes/theme-selector"
import { ThemeWrapper } from "@/components/themes/theme-wrapper"

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="grid gap-4">
        <ThemeSelector />
        <ThemeWrapper>
          <Example />
        </ThemeWrapper>
      </div>
    </main>
  )
}
