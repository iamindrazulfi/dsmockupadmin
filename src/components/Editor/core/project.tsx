import { atom } from "recoil"

export const paletteState = atom<palette[]>({
    key: "paletteState",
    default: [{ id: 0, color: "#bdd2ff", isLocked: false }],
})

interface palette {
    id: number
    color: string
    isLocked: boolean
}
