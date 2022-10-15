import dynamic from "next/dynamic"
import React from "react"

const KonvaStageNoSSR = dynamic(() => import("../../modules/konva/canvas/konvastage"), {
    ssr: false,
})

export const CanvasNoSSR = () => {
    return <KonvaStageNoSSR />
}
