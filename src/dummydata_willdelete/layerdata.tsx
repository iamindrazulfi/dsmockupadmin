interface layerProps {
    file: string
    type: string
    opacity: number
    colorId?: number
    screenName?: string
    screenId?: number
    screenWidth?: number
    screenHeight?: number
}

export const layersdata: layerProps[] = [
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/macstudio1_0005_1_5iolEKmOK.png",
        type: "colorable",
        opacity: 1,
        colorId: 0,
    },
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/macstudio1_0004_2_JHX90bTln.png",
        type: "normal",
        opacity: 1,
        colorId: 0,
    },
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/macstudio1_0003_3_5_swVwViV.png",
        type: "normal",
        opacity: 1,
        colorId: 0,
    },
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/macstudio1_0002_4_RquJyTHWd.png",
        type: "normal",
        opacity: 1,
        colorId: 0,
    },
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/macstudio1_0001_5_S6Vcasz0x.png",
        type: "normal",
        opacity: 1,
        colorId: 0,
    },
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/macstudio1_0000_6_screenmask_3XD23XTTh.png",
        type: "screenmask",
        opacity: 1,
        colorId: 0,
    },
    {
        file: "https://ik.imagekit.io/iv2hqmrup/ds-test/screen_uxos10A7l.png",
        type: "screen",
        opacity: 1,
        screenName: "iPhone 14",
        screenId: 0,
        screenWidth: 1800,
        screenHeight: 2400,
    },
]
