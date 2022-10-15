import React from "react"
import { Row, Card, Grid, Text, Container, Image, Button } from "@nextui-org/react"
import { layersdata } from "../../../../dummydata_willdelete/layerdata"

export const MockupLayer = () => {
    const screenLayerData = Array.from(layersdata).filter((e) => e.type === "screen")

    return (
        <Container gap={0}>
            {screenLayerData.map(({ screenWidth, screenHeight, screenId, screenName }, index: number) => {
                return (
                    <DesignLayer
                        key={index}
                        screenName={screenName}
                        screenWidth={screenWidth}
                        screenHeight={screenHeight}
                        screenId={screenId}
                    />
                )
            })}
        </Container>
    )
}

const DesignLayer = ({ screenName, screenWidth, screenHeight, screenId }: any) => {
    return (
        <Row css={{ mb: 12 }}>
            <Card variant="bordered" borderWeight="normal" css={{ borderColor: "$beige" }}>
                <Card.Body css={{ py: 8, px: 0 }}>
                    <Grid.Container gap={0}>
                        <Grid xs={3}>
                            <Image src="https://i.pravatar.cc/300" width={60} height={60} objectFit="cover" css={{ borderRadius: 8 }} />
                        </Grid>
                        <Grid xs={6}>
                            <Container gap={0} display="flex" direction="column" justify="center" css={{ pl: 8 }}>
                                <Text>{screenName}</Text>
                                <Text size={14} css={{ fontFamily: "Sharp Sans", letterSpacing: "$normal" }}>
                                    {`${screenWidth} x ${screenHeight} px`}
                                </Text>
                            </Container>
                        </Grid>
                        <Grid xs={3}>
                            <Container gap={0} display="flex" alignItems="center" justify="flex-end" css={{ pr: 12 }}>
                                <Button auto css={{ px: 12, bg: "$skyblue" }}>
                                    <EditIcon />
                                </Button>
                            </Container>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </Row>
    )
}

const EditIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16">
            <path
                stroke="#391145"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M8.66 4.198l-5.944 5.944a.358.358 0 00-.117.22l-.593 3.162a.432.432 0 00.49.498l3.163-.6a.433.433 0 00.22-.118l5.95-5.951"
            ></path>
            <path
                fill="#391145"
                d="M13.719 1.709l.615.615a2.416 2.416 0 010 3.418l-.41.359a.527.527 0 01-.732 0L9.89 2.85a.527.527 0 010-.732l.41-.41a2.416 2.416 0 013.419 0z"
            ></path>
        </svg>
    )
}
