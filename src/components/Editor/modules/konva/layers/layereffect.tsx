import React, { useEffect, useRef } from "react"
import Konva from "konva"
import { Image } from "react-konva"
import useImage from "use-image"

interface LayereffectProps {
  imageurl: string
  width: number
  height: number
  opacity: number
  mode: any
  pixelRatio?: number
}

export const Layereffect = React.memo(
  ({ imageurl, width, height, opacity, mode, pixelRatio }: LayereffectProps) => {
    //@ts-ignore
    const [image] = useImage(imageurl, "Anonimus")
    const imageRef = useRef<any>(null)

    useEffect(() => {
      if (image && image.complete) {
        imageRef.current.cache({ pixelRatio: pixelRatio })
        // imageRef.current.getLayer().batchDraw()
      }
    }, [image, pixelRatio])

    return (
      <Image
        image={image}
        globalCompositeOperation={mode}
        width={width}
        height={height}
        ref={imageRef}
        opacity={opacity}
      />
    )
  }
)

Layereffect.displayName = "Layereffect"
