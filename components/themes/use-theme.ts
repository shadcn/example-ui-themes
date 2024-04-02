import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const configAtom = atomWithStorage<string>("theme", "")

export function useTheme() {
  return useAtom(configAtom)
}
