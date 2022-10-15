import "../styles/globals.css"
import type { AppProps } from "next/app"
import { NextUIProvider, createTheme } from "@nextui-org/react"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider theme={apptheme}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </NextUIProvider>
    )
}

export default MyApp

const apptheme = createTheme({
    type: "light",
    theme: {
        colors: {
            primary: "#391145",
            secondary: "#E9DCD6",
            blue: "#6DD0FE",
            skyblue: "#00AEFF",
            emerald: "#58E9B6",
            green: "#33CC66",
            lavender: "#C0B3F9",
            violet: "#917DF9",
            babypink: "#FFBCFF",
            pink: "#FF8AE1",
            salmon: "#FF9992",
            red: "#FF4A4A",
            sun: "#FFAB48",
            orange: "#FF6E01",
            daisy: "#FDF76A",
            yellow: "#FDD02E",
            white: "#FFFFFF",
            purplegrey: "#8E7F93",
            darkpurple: "#391145",
            natural: "#F9F3F1",
            beige: "#E9DCD6",
        },
        space: {},
        fonts: {
            sans: "'Sharp Grotesk Medium',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
        },
    },
})
