import type { NextPage } from "next"
import { EditorLayout } from "../components/EditorTemplates/components/EditorLayout"
import { CanvasNoSSR } from "../components/Editor/components/CanvasSSR"

const Home: NextPage = () => {
    return (
        <EditorLayout>
            <CanvasNoSSR />
        </EditorLayout>
    )
}

export default Home
