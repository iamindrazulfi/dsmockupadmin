import { atom } from "recoil"

export const editorState = atom<"preview" | "design">({
    key: "editorState",
    default: "preview",
})

export const zoomState = atom<number>({
    key: "zoomState",
    default: 0.25,
})

export const pixelRatioState = atom<number>({
    key: "pixelRatioState",
    default: 1,
})
