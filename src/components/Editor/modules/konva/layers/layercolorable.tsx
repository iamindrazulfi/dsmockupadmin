import React, { useEffect, useRef } from "react"
import Konva from "konva"
import { Image } from "react-konva"
import useImage from "use-image"
import chroma from "chroma-js"
import { useRecoilValue } from "recoil"
import { pixelRatioState } from "../../../core/editor"

export const Layercolorable = React.memo(
    ({ imageurl, width, height, x = 0, y = 0, color, opacity, onClick, onMouseEnter, onMouseLeave }: LayerColorableProps) => {
        const [image] = useImage(imageurl, "anonymous")
        const imageRef = useRef<any>(null)
        const colorOverlay = chroma(color).rgb()
        const pixelRatio = useRecoilValue(pixelRatioState)

        useEffect(() => {
            if (image && image.complete) {
                imageRef.current.cache({ pixelRatio: pixelRatio })
                imageRef.current.drawHitFromCache(0.5)
            }
        }, [image, pixelRatio])

        return (
            <Image
                applyCache
                applyHitFromCache
                x={x}
                y={y}
                filters={[Konva.Filters.RGB]}
                red={colorOverlay[0]}
                green={colorOverlay[1]}
                blue={colorOverlay[2]}
                image={image}
                width={width}
                height={height}
                ref={imageRef}
                opacity={opacity}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        )
    }
)

Layercolorable.displayName = "Layercolorable"

interface LayerColorableProps {
    imageurl: string
    width: number
    height: number
    opacity: number
    color: string
    x?: number
    y?: number
    onClick?: (e: any) => void
    onMouseEnter?: (e: any) => void
    onMouseLeave?: (e: any) => void
}
