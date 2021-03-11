import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const LeftArrowIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={16}
      viewBox="0 0 22 16"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.8}
        d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM22 7H1v2h21V7z"
        fill="#fff"
      />
    </Svg>
  )
}