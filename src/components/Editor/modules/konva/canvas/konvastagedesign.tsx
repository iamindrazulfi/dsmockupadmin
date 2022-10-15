import { Stage, Layer, Rect, Transformer, Image } from "react-konva"
import { useRef, useEffect, useState } from "react"
import useImage from "use-image"
import OutsideClickHandler from "react-outside-click-handler"
import { Portal } from "react-konva-utils"

interface CanvasProps {
    stageRef: any
    imageurl: string
    stagewidth: number
    stageheight: number
    imagewidth: number
    imageheight: number
    scale: number
    x: number
    y: number
    aspectRatioX: number
    aspectRatioY: number
    onTranformEnd: (e: any) => void
    latestPosition: any
}

export default function Canvas({
    stageRef,
    imageurl,
    stagewidth,
    stageheight,
    imagewidth,
    imageheight,
    scale,
    x,
    y,
    aspectRatioX,
    aspectRatioY,
    onTranformEnd,
    latestPosition,
}: CanvasProps) {
    const [image] = useImage(imageurl, "anonymous")
    const imageRef = useRef<any>(null)
    const transRef = useRef<any>(null)
    const maskRef = useRef<any>(null)
    const containerRef = useRef<any>(null)
    const [selected, setSelected] = useState<any>(null)
    const [scaleConstant, setScaleConstant] = useState<number>(0.1)

    const [currentPos, setCurrentPos] = useState<any>({
        x: 0,
        y: 0,
        width: 1000,
        height: 1000,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
    })

    let [parentContainer, setParentContainer] = useState<any>({
        parentContainerHeight: 0,
        parentContainerWidth: 0,
    })

    useEffect(() => {
        if (image && image.complete) {
            imageRef.current.cache({ pixelRatio: 0.75 })
            setCurrentPos({
                ...currentPos,
                width: imagewidth,
                height: imageheight,
            })
        }
    }, [image, imagewidth, imageheight, x, y])

    useEffect(() => {
        if (stageheight * 2000) {
            setScaleConstant(0.35)
        }
        const parentContainerHeight = containerRef.current.offsetParent.clientHeight
        const parentContainerWidth = containerRef.current.offsetParent.clientWidth
        parentContainer.parentContainerHeight = parentContainerHeight - 220
        parentContainer.parentContainerWidth = parentContainerWidth - 280
        setParentContainer(parentContainer)

        if (latestPosition.x != 0) {
            setCurrentPos({
                x: latestPosition.x,
                y: latestPosition.y,
                width: latestPosition.width,
                height: latestPosition.height,
                rotation: latestPosition.rotation,
                scaleX: latestPosition.scaleX,
                scaleY: latestPosition.scaleY,
            })
        }
    }, [])

    return (
        <OutsideClickHandler
            onOutsideClick={(e) => {
                transRef.current.nodes([])
                setSelected(null)
            }}
        >
            <div ref={containerRef} className="bg-transparent-canvas-dark bg-center bg-auto bg-repeat">
                <div className="bg-natural py-2 flex justify-between text-sm font-semibold">
                    <div>{`${aspectRatioX * 150}x${aspectRatioY * 150}px`}</div>
                    {/* <div>Auto-fit</div> */}
                </div>
                <Stage
                    ref={stageRef}
                    width={parentContainer.parentContainerWidth}
                    height={parentContainer.parentContainerHeight}
                    scaleX={1}
                    scaleY={1}
                    onClick={(e) => {
                        if (e.target === imageRef.current) {
                            transRef.current.nodes([imageRef.current])
                            setSelected(imageRef.current)
                            document.body.style.cursor = "grab"
                        } else {
                            transRef.current.nodes([])
                            setSelected(null)
                            document.body.style.cursor = "default"
                        }
                    }}
                >
                    <Layer>
                        <Portal selector=".topLayer" enabled={false}>
                            <Image
                                draggable={selected === imageRef.current ? true : false}
                                x={currentPos.x}
                                y={currentPos.y}
                                image={image}
                                width={currentPos.width}
                                height={currentPos.height}
                                rotation={currentPos.rotation}
                                ref={imageRef}
                                opacity={1}
                                scaleX={currentPos.scaleX}
                                scaleY={currentPos.scaleY}
                                name="image"
                                onMouseEnter={() => {
                                    if (selected === imageRef.current) {
                                        document.body.style.cursor = "grab"
                                    }
                                }}
                                onMouseLeave={() => {
                                    document.body.style.cursor = "default"
                                }}
                                onDragMove={(e) => {
                                    onTranformEnd(e)
                                    const latestPos = e.target.attrs
                                    setCurrentPos({
                                        ...currentPos,
                                        x: latestPos.x,
                                        y: latestPos.y,
                                    })
                                }}
                                onDragEnd={() => imageRef.current.cache({ pixelRatio: 2 })}
                                onTransformEnd={() => imageRef.current.cache({ pixelRatio: 2 })}
                            />
                        </Portal>

                        {/* Top Mask */}
                        <Rect
                            ref={maskRef}
                            width={parentContainer.parentContainerWidth}
                            height={parentContainer.parentContainerHeight / 2 - (stageheight * scale * scaleConstant) / 2}
                            fill="black"
                            opacity={0.55}
                        />
                        {/* Left Mask  */}
                        <Rect
                            ref={maskRef}
                            x={0}
                            y={parentContainer.parentContainerHeight / 2 - (stageheight * scale * scaleConstant) / 2}
                            width={parentContainer.parentContainerWidth / 2 - (stagewidth * scale * scaleConstant) / 2}
                            height={stageheight * scale * scaleConstant}
                            fill="black"
                            opacity={0.55}
                        />
                        {/* Bottom Mask  */}
                        <Rect
                            ref={maskRef}
                            x={0}
                            y={
                                parentContainer.parentContainerHeight / 2 -
                                (stageheight * scale * scaleConstant) / 2 +
                                stageheight * scale * scaleConstant
                            }
                            width={parentContainer.parentContainerWidth}
                            height={parentContainer.parentContainerHeight / 2 - (stageheight * scale * scaleConstant) / 2}
                            fill="black"
                            opacity={0.55}
                        />
                        {/* Right Mask  */}
                        <Rect
                            ref={maskRef}
                            x={
                                parentContainer.parentContainerWidth / 2 -
                                (stagewidth * scale * scaleConstant) / 2 +
                                stagewidth * scale * scaleConstant
                            }
                            y={parentContainer.parentContainerHeight / 2 - (stageheight * scale * scaleConstant) / 2}
                            width={parentContainer.parentContainerWidth / 2 - (stagewidth * scale * scaleConstant) / 2}
                            height={stageheight * scale * scaleConstant}
                            fill="black"
                            opacity={0.55}
                        />
                    </Layer>
                    <Layer name="topLayer">
                        <Transformer
                            ref={transRef}
                            keepRatio={true}
                            name="transformer"
                            anchorCornerRadius={40}
                            anchorStrokeWidth={2}
                            anchorStroke="indigo"
                            borderStroke="indigo"
                            rotateAnchorOffset={40}
                            rotationSnaps={[0, 45, 90, 135, 180, 225, 270]}
                            rotationSnapTolerance={4}
                            onTransform={(e) => {
                                const latestPos = e.target.attrs
                                setCurrentPos({
                                    ...currentPos,
                                    x: latestPos.x,
                                    y: latestPos.y,
                                    scaleX: latestPos.scaleX,
                                    scaleY: latestPos.scaleY,
                                    rotation: latestPos.rotation,
                                })
                                onTranformEnd(e)
                            }}
                            onTransformEnd={() => imageRef.current.cache({ pixelRatio: 0.5 })}
                        />
                    </Layer>
                    <Layer>
                        <Image
                            draggable={selected === imageRef.current ? true : false}
                            x={currentPos.x}
                            y={currentPos.y}
                            image={image}
                            width={currentPos.width}
                            height={currentPos.height}
                            rotation={currentPos.rotation}
                            ref={imageRef}
                            opacity={0}
                            scaleX={currentPos.scaleX}
                            scaleY={currentPos.scaleY}
                            name="image"
                            onMouseEnter={() => {
                                if (selected === imageRef.current) {
                                    document.body.style.cursor = "grab"
                                }
                            }}
                            onMouseLeave={() => {
                                document.body.style.cursor = "default"
                            }}
                            onDragMove={(e) => {
                                onTranformEnd(e)
                                const latestPos = e.target.attrs
                                setCurrentPos({
                                    ...currentPos,
                                    x: latestPos.x,
                                    y: latestPos.y,
                                })
                            }}
                            onDragEnd={() => imageRef.current.cache({ pixelRatio: 2 })}
                            onTransformEnd={() => imageRef.current.cache({ pixelRatio: 2 })}
                        />
                    </Layer>
                </Stage>
            </div>
        </OutsideClickHandler>
    )
}
