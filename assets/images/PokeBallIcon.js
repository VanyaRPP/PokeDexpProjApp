import * as React from "react";
import { View } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";

export const PokeBallIcon = (props) =>{
  return (
    <View
      style={{
        marginBottom: 20
      }}
      >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 62 62"
        fill="none"
        {...props}
      >
        <Circle
          cx={31}
          cy={31}
          r={29.5}
          fill="#000"
          stroke="#000"
          strokeWidth={3}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.157 32.74h22.02-22.02zM3 29.88h21.34a6.316 6.316 0 01-.007-.286c0-3.632 3.105-6.577 6.934-6.577s6.933 2.945 6.933 6.577c0 .096-.002.191-.006.286H59C59 15.035 46.464 3 31 3S3 15.035 3 29.88zm55.843 2.86H37.357h21.486z"
          fill="#EC2929"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.157 29.26h22.02-22.02zM3 32.12h21.34c-.005.095-.007.19-.007.286 0 3.632 3.105 6.577 6.934 6.577s6.933-2.945 6.933-6.577c0-.096-.002-.191-.006-.286H59C59 46.965 46.464 59 31 59S3 46.965 3 32.12zm55.843-2.86H37.357h21.486z"
          fill="#fff"
        />
        <Circle cx={31} cy={31} r={9} fill="#000" />
        <Circle cx={31} cy={31} r={8} fill="#fff" />
      </Svg>
    </View>
  );
};



