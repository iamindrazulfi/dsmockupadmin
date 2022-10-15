import { ColorBucket } from "../ColorBucket"
import { paletteState } from "../../core/project"
import { useRecoilState, useRecoilValue } from "recoil"
import { Badge, Container, Row, Spacer } from "@nextui-org/react"
import { HexColorPicker, HexColorInput } from "react-colorful"
import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { pixelRatioState } from "../../core/editor"

export const ColorPalette = () => {
    const paletteData = useRecoilValue(paletteState)

    return (
        <Container gap={0}>
            <Row justify="center">
                <Row css={{ width: "fit-content" }}>
                    {paletteData.map(({ id, color, isLocked }) => {
                        return <ColorBucketSingle key={id} id={id} color={color} />
                    })}
                </Row>
            </Row>
        </Container>
    )
}

const ColorBucketSingle = ({ id, color }: any) => {
    const [paletteData, setPaletteData] = useRecoilState(paletteState)
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [currentColor, setCurrentColor] = useState(color)
    let changedPalettedData = Array.from(paletteData)
    const [, setPixelRatio] = useRecoilState(pixelRatioState)

    const handleChangeColor = (value: string) => {
        setCurrentColor(value)
        changedPalettedData.splice(id, 1, { id: id, color: value.substring(1), isLocked: false })
        setPaletteData(changedPalettedData)
    }

    return (
        <Container
            gap={0}
            css={{ height: "32px", width: "fit-content", position: "relative", mr: 4 }}
            onClick={() => {
                setShowColorPicker(true)
                setPixelRatio(0.15)
            }}
        >
            <Badge content="..." size="xs" color="error">
                <ColorBucket fillColor={currentColor} />
            </Badge>
            {showColorPicker && (
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setShowColorPicker(false)
                        setPixelRatio(1)
                    }}
                >
                    <Container
                        gap={0}
                        css={{
                            width: "fit-content",
                            position: "absolute",
                            top: 0,
                            right: 40,
                            zIndex: 9999,
                            p: 12,
                            bg: "$beige",
                            borderRadius: 12,
                        }}
                    >
                        <HexColorPicker color={currentColor} onChange={handleChangeColor} />
                        <Spacer y={0.5} />
                        <HexColorInput
                            color={currentColor}
                            onChange={handleChangeColor}
                            style={{ width: 200, padding: 6, border: "none", borderRadius: 12 }}
                        />
                    </Container>
                </OutsideClickHandler>
            )}
            {/* <Container fluid responsive={false} gap={0} css={{ position: "fixed", inset: 0, zIndex: 999 }}></Container> */}
        </Container>
    )
}
