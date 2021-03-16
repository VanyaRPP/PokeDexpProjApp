import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

export const HeartIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={55}
      height={55}
      viewBox="0 0 43 43"
      fill="none"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h42.904v42.904H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#prefix__image0" transform="scale(.00556)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={180}
          height={180}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAACPVBMVEVMaXHn6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6ern6errSiKQAAAAvnRSTlMAAwQFBgcICQoLDQ4QERMUFRYXGBkaGxwdHh8gISIjJCYnKCosLi8wMTI0NTY3Ozw9Pj9AQUJDREVHSElKS0xNTk9QUlNXWFlaW11fYGFiY2RlaWprbG1vcHFyc3R1dnd7fH1+f4CChYeJiouNj5GSlZaXmJqdnqChoqSlp6iqq6ytrq+wsbO0tba4ubq7vb/AwcPExsvMzc7Q0dLT1NbX2tvd3t/g4ePk5ebn6Onq6+3u8fP09fb3+Pr7/P3+MouInQAABaFJREFUeNrt3ftbFFUYB/AXEEUBNcRbLJCKYEigIGgIRoF4YQUUMVHUvBOJEnmpBIQ0ExUviRjkJTAERRCUVJS+f1vwWD7M7szuXM7MvtMznz/gfb4/zJ455z3nzJLD4XA4HA6HwzF9TnxKRlZm5urUhAWRwUYqBUcuSEhdnZmZlZESHz2dzDPDtTx7/bZdeyor9+5w56UtnhWkt1LQrMVpee4deysr9+zatj4n2TWDzDBzRVndjd5RTDLc0XAgLy5Ea6WQuLwDDR3DkyuN9t6oK1sxk4SKzq97AHnDLRVJwRqeiqSKlmGFUg/q8qNJlLTafvjUWjxHXaU5xa2+K/XXppEAoRvb4N9QdZz/UnHVQypKtW0MNZq5qBsq1S30XWlhndpK3UWGIufcg3pjVVOVK02tGtNQ6l6O7sjzm6FNb75SqfxejaWa5+vLvHUEmtVHyFWKqNdeaWSrjshhDdCjZ5V3qVU9uko1hGnNnHgXOu32LLVbb6W7idoyrxuGbt9KS9XqrzS8TkvmEhjRNOnNPuWcoVIl6jOXwpgrM95Psa4YLFWqetiAUVeD/p3MXYVRKgeRAhjX/K5UM4wrUJM5dQwC1L77DQowluo/87w+CFFBVAEh+ub5DX0ZgixdCkEu+8t8FKJ0dUGUo74zZ4OlbF+ZIzrBUmeEj9BVYKpKOXPKCzD1IkUxdD3YqlfKvBaMrVUIfR6MnZfPnP4ajL1Olw19Bqydkcs89ylYezpXJvROMLdTJvR1MHfdO/Oi52Du+SKv0OVgr3xSXHErI5M1ezW7u8Fet2fzPmEU7I0meIR2wwbcHqGrYQPVdposKUyaQtthA+2h0m2nHthAT7T0fTgEGxj6SLo6HIEN/JUsCb3GBsP0+EC9Rtr5fwMbeCPdGci1R+hcaei3sIG30tDpr2ADr6SL20T2S4AJz6V7dDEDsIGBGEno8PuwgfvhJHENNnCNpE7DBk57hN4DG/Dcdl8NG8jyCP2BDaZ5z2aTh9/A3h3y9BPYO+cV+jDY+8or9Gfg7u8c7z1x9i9yuQb1LTB3k7wdA3PVMqG/AHOfy4Sezbz18efE8Wq7daibSM52sFYmGzq+F4z1xZKsJjDWRPKKwZhbIXTUH2CrazYpOAG2TozHs9s5hJcZpOgimPqZlG0BU1t8hI68A5ZuR05OKewovLkqfN8SeQiGHvq5P7IfDO0n31yDYGfQRX4cAjuHyJ8odgvcgSjyaxeY2Un+hTM7rtKl6vrtJrCySS4j8w7ILVInHYykk0o/go0zpNbcl2BiRPlONt+ThTtIgzaw0EZaLAMLy0iTI2DgCGnE4PhYO2mVLOSGnxFjyXK5mC8H9pMOrQioVtLD9QwB9MxFuhQigApJpxoETA3p9isC5CbpF/cEAdHvIgNyERC5RjILu0YtsgumwklY7jsyKsTyc2StU8iwaHH3v1XpEvIBqSRLrwu/SCIhPoWFskmQIlimiITZB4vsI4G+gSW+JqEsGa5PkmBnYbqzJJzpG6MXSbygSzDVpSAyQXALTNQSTKaYIux7Nt4uC5hwKKQ27bn+xbTM46lNOjHUGEJm+gEmOE0mOw7hjpPphB+0PkwWEHzocDtZokDglbq3BWSRT4Ttnw8uJ8t8KOjY0O0FZKGpjRCgcRpZ6yAMO0iWKzS4Q/qqkALg498NfZhNUKtAqwgD7/TvIylQKnSO2GNfUgBldOp6NDIooCJPac98KnCPxn+KNO4WPBHYRNIv9rymr6HEEg/lquciA+XERswFdZkvxBAnGx75j/xoAzET5veW3bEw4mdJi89mzBLiaV2H4uskh/ja/FD2pPlmYi20pMtru6rE8D9wmC7U3Sl5MNz8I0+YVnDl/XfsC6xeUekXtLLmMfC4ZqUpPWfzxJeWxpPdBCcmmtQmdzgcDofD4XD8P/0DPD9yydZKh5YAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

