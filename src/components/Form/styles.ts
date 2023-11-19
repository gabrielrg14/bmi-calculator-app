import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  color: #000;
  font-size: 18px;
  padding-left: 5px;
`;

export const Validation = styled.Text`
  font-size: 12px;
  color: red;
  font-weight: bold;
  padding-left: 5px;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding-left: 10px;
  margin: 10px 0px;
  border-radius: 50px;
  background-color: #F6F6F6;
`;

export const ButtonCalculate = styled.TouchableOpacity`
  border-radius: 50px;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: #18a330;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #FFF;
`;
