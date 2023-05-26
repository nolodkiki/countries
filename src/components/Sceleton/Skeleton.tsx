import React from "react"
import ContentLoader from "react-content-loader"
import { useAppSelector } from "../../hook"

const Skeleton = () => {
    // <ContentLoader
    //     speed={2}
    //     width={280}
    //     height={390}
    //     viewBox="0 0 280 390"
    //     backgroundColor="#f3f3f3"
    //     foregroundColor="#ecebeb"
    // >
    //     <rect x="6" y="9" rx="10" ry="10" width="260" height="321" />
    // </ContentLoader>
    const { darkMode } = useAppSelector(state => state.data)
    return (
        <>
            {darkMode
                ? <ContentLoader
                    speed={2}
                    max-width={330}
                    max-height={400}
                    viewBox="0 0 330 400"
                    backgroundColor="#2f3945"
                    foregroundColor="#1c2022"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="330" height="400" />
                    <rect x="119" y="266" rx="0" ry="0" width="330" height="400" />
                </ContentLoader>
                : <ContentLoader
                    speed={2}
                    max-width={330}
                    max-height={400}
                    viewBox="0 0 330 400"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="330" height="400" />
                    <rect x="119" y="266" rx="0" ry="0" width="1" height="1" />
                </ContentLoader>}


        </>
    )

}



export default Skeleton