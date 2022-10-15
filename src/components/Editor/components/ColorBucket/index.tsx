export const ColorBucket = ({ fillColor }: { fillColor: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 25">
            <g filter="url(#filter0_i_417_783)">
                <path
                    fill={fillColor}
                    d="M4.72 23.235C1.32 21.87 0 18.675 0 12.068 0 2.266 3.398 0 11.946 0 20.602 0 24 2.266 24 12.068c0 9.447-3.398 12.205-12.054 12.205-3.074 0-5.474-.246-7.227-1.038z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_i_417_783"
                    width="26"
                    height="26.273"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_417_783"></feBlend>
                </filter>
            </defs>
        </svg>
    )
}
