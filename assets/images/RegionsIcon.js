import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const RegionsIcon = (props) => {
  return (
    <Svg
      width={22}
      height={30}
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.87 29.395C1.545 17.053 0 15.785 0 11.25 0 5.037 4.925 0 11 0s11 5.037 11 11.25c0 4.536-1.545 5.803-9.87 18.145a1.358 1.358 0 01-2.26 0zM11 15.938c2.531 0 4.583-2.1 4.583-4.688 0-2.589-2.052-4.688-4.583-4.688s-4.583 2.1-4.583 4.688c0 2.589 2.052 4.688 4.583 4.688z"
        fill="#fff"
      />
    </Svg>
  )
}