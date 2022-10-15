import { Stage, Layer, Line } from "react-konva"
import { Layernormal } from "../layers/layernormal"
import { Layercolorable } from "../layers/layercolorable"
import { useState, useEffect, useRef } from "react"
import { Container } from "@nextui-org/react"
import { layersdata } from "../../../../../dummydata_willdelete/layerdata"
import { useRecoilValue } from "recoil"
import { paletteState } from "../../../core/project"
import { zoomState } from "../../../core/editor"

export default function Canvas() {
    const paletteData = useRecoilValue(paletteState)
    const scale = useRecoilValue(zoomState)
    const dimension = 2400

    return (
        <Container
            fluid
            display="flex"
            justify="center"
            alignItems="center"
            gap={0}
            css={{ minHeight: "calc(100vh - 65px)", width: "100%" }}
        >
            <Stage width={dimension * scale} height={dimension * scale} scaleX={scale} scaleY={scale}>
                <Layer>
                    {layersdata.map(({ file, type, opacity, colorId }, index: number) => {
                        const colorIndex = colorId as number
                        if (type === "normal") {
                            return <Layernormal key={index} imageurl={file} width={dimension} height={dimension} opacity={opacity} />
                        }
                        if (type === "colorable") {
                            return (
                                <Layercolorable
                                    key={index}
                                    imageurl={file}
                                    width={dimension}
                                    height={dimension}
                                    opacity={opacity}
                                    color={paletteData[colorIndex].color}
                                />
                            )
                        }
                        if (type === "screenmask") {
                            return <Layernormal key={index} imageurl={file} width={dimension} height={dimension} opacity={opacity} />
                        }
                        if (type === "screen") {
                            return <ScreenLayer key={index} file={file} dimension={dimension} />
                        }
                    })}
                </Layer>
            </Stage>
        </Container>
    )
}

const ScreenLayer = ({ file, dimension }: any) => {
    const [opacity, setOpacity] = useState(0)

    return (
        <Layercolorable
            imageurl={file}
            width={dimension}
            height={dimension}
            opacity={opacity}
            color="#41c9fa"
            onMouseEnter={() => {
                setOpacity(0.75)
                document.body.style.cursor = "pointer"
            }}
            onMouseLeave={() => {
                setOpacity(0)
                document.body.style.cursor = "default"
            }}
        />
    )
}
