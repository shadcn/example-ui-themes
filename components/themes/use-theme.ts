import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const configAtom = atomWithStorage<{
  theme: string
  style: string
}>("theme", {
  theme: "zinc",
  style: "default",
})

export function useTheme() {
  return useAtom(configAtom)
}
