import styled from 'styled-components'
import { Dimensions } from 'react-native';

const window = Dimensions.get("window").width;


export const PokeRectangle = styled.TouchableOpacity`
  display: flex;
  margin-top: 50px;
  width: ${window-40};
  height: 100%;
`;
export const PokeInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;
export const ImageItem = styled.Image`
  width:80px;
  height:80px;
  margin-left: 25px;
  margin-right: 10px;
`;
export const PokeType = styled.View`
  display:flex;
  justify-content:space-around;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PokeIndex = styled.Text`
  justify-content: flex-end;
  font-size: 72px;
  font-weight: bold;
  color: white;
  opacity: 0.3;
  margin-right: 20px;
`;

export const PokeInfoType = styled.View`
  display: flex;
  flex-direction: row;
  
`;

export const TextInfo = styled.Text`
  
`;
