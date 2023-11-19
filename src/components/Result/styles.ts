import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background-color: #FFF;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const BmiText = styled.Text`
  color: #000;
  font-size: 20px;
`;

export const MessageText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ButtonsView = styled.View`
  width: 100%;
  align-items: center;
  gap: 5px;
`;

export const ButtonShare = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #1877f2;
`;

export const ButtonClose = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #18a330;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 20px;
  padding: 10px 30px;
`;
