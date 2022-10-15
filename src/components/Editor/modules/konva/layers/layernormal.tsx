import React, { useEffect, useRef } from "react"
import { Image } from "react-konva"
import useImage from "use-image"

interface LayerNormalProps {
    imageurl: string
    width: number
    height: number
    opacity: number
}

export const Layernormal = React.memo(({ imageurl, width, height, opacity }: LayerNormalProps) => {
    //@ts-ignore
    const [image] = useImage(imageurl, "Anonimus")
    const imageRef = useRef<any>(null)

    useEffect(() => {
        if (image && image.complete) {
            imageRef.current.cache({ pixelRatio: 2 })
            // imageRef.current.getLayer().batchDraw()
        }
    }, [image])

    return (
        <Image
            x={0}
            y={0}
            image={image}
            width={width}
            height={height}
            ref={imageRef}
            opacity={opacity}
            // onDragEnd={onDragEnd}
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
        />
    )
})

Layernormal.displayName = "Layernormal"
