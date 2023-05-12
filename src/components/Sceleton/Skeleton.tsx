import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={390}
        viewBox="0 0 280 390"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="6" y="9" rx="10" ry="10" width="260" height="321" />
    </ContentLoader>
)

export default Skeleton