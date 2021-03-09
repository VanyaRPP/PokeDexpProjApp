import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const FilterIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={29}
      viewBox="0 0 28 29"
      fill="none"
      {...props}
    >
      <Path
        d="M25.866.122L1.4.006C.276.001-.298 1.413.495 2.242l9.704 10.162-.053 11.269c-.002.428.197.83.534 1.078l4.205 3.081c.829.608 1.991.001 1.996-1.066l.068-14.33L26.75 2.367c.799-.82.242-2.24-.884-2.245z"
        fill="#fff"
      />
    </Svg>
  )
}

