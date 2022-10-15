//import Library
import { Col, Row, Container, Text, Button, Spacer, Card, Grid, Image } from "@nextui-org/react"
import NextImage from "next/image"

//Import assets
import DsLogoOnly from "../../../../../public/assets/logoOnly.svg"
import { BackIcon, BrushIcon, DownloadIcon, MinusIcon, PlusIcon } from "../../../../assets/icons"

//Import recoilstates
import { useRecoilState } from "recoil"
import { zoomState } from "../../../Editor/core/editor"
import { ColorPalette } from "../../../Editor/components/ColorPalette"
import { MockupLayer } from "../../../Editor/components/MockupLayer"

export const EditorLayout = ({ children }: EditorLayoutProps) => {
    const [zoomLevel, setZoomLevel] = useRecoilState(zoomState)

    const handleZoom = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target?.name === "zoomOut") setZoomLevel((zoomLevel) => zoomLevel - 0.05)
        if (event.target?.name === "zoomIn") setZoomLevel((zoomLevel) => zoomLevel + 0.05)
    }

    return (
        <Container gap={0} responsive={false} fluid css={{ height: 65, borderBottom: "2px solid $beige " }}>
            <Container gap={0} fluid responsive={false}>
                <Row align="center" css={{ height: 65, px: 24 }}>
                    <Col>
                        <Row align="center">
                            <NextImage alt="Designstripe" src={DsLogoOnly} width={40} height={40} />
                            <Spacer x={1.5} />
                            <Button icon={<BackIcon />} auto size="xs" css={{ color: "$darkpurple", bg: "$beige" }}>
                                Back to catalog
                            </Button>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="center">
                            <Text>iPhone 14</Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end" align="center">
                            <Text css={{ fontFamily: "Sharp Sans" }}>{`${zoomLevel * 100 + 50}  %`}</Text>
                            <Spacer x={0.75} />
                            <Button.Group bordered size="sm" color="secondary">
                                <Button name="zoomOut" onClick={handleZoom}>
                                    <MinusIcon />
                                </Button>
                                <Button name="zoomIn" onClick={handleZoom}>
                                    <PlusIcon />
                                </Button>
                            </Button.Group>
                        </Row>
                    </Col>
                </Row>
                <Row css={{ minH: "calc(100vh - 65px)", maxH: "calc(100vh - 65px)" }}>
                    <Col css={{ height: "calc(100vh - 65px)" }}>
                        <Container
                            gap={0}
                            fluid
                            responsive={false}
                            display="flex"
                            justify="center"
                            alignItems="center"
                            css={{ minHeight: "calc(100vh - 65px)", maxH: "calc(100vh - 65px)", overflow: "auto" }}
                        >
                            {children}
                        </Container>
                    </Col>
                    <Col css={{ borderLeft: "2px solid $beige", minWidth: 360, maxWidth: 360, height: "calc(100vh - 65px)" }}>
                        <Container gap={0} display="flex" direction="column" justify="space-between" css={{ minHeight: "stretch" }}>
                            <Container gap={0} css={{ p: 16 }}>
                                <Row justify="center">
                                    <Text color="primary">Colors</Text>
                                </Row>
                                <Spacer y={1} />
                                <ColorPalette />
                                <Spacer y={1} />
                                <Row>
                                    <Button
                                        iconLeftCss={{ bg: "red" }}
                                        size="lg"
                                        css={{ width: "stretch", color: "$darkpurple", bg: "$beige" }}
                                    >
                                        <Row align="center">
                                            <BrushIcon />
                                            <Spacer x={0.5} />
                                            <Text css={{ letterSpacing: "$normal" }}>Suggest a new palette</Text>
                                        </Row>
                                    </Button>
                                </Row>
                                <Spacer y={1} />
                                <MockupLayer />
                            </Container>
                            <Container gap={0} css={{ borderTop: "2px solid $beige", p: 16 }}>
                                <Button size="lg" css={{ width: "stretch" }}>
                                    <Row align="center">
                                        <DownloadIcon />
                                        <Spacer x={0.25} />
                                        <Text color="white">Download</Text>
                                    </Row>
                                </Button>
                                <Row justify="center" css={{ my: 8 }}>
                                    <Text size={14} css={{ fontFamily: "Sharp Sans", letterSpacing: "$normal" }}>
                                        Help
                                    </Text>
                                </Row>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

interface EditorLayoutProps {
    children: React.ReactNode
}
