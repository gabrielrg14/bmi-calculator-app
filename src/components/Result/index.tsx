import { Modal, Share } from "react-native";

import * as S from "./styles";

type ResultProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  bmi: string | null;
  message: string;
};

const Result = ({ visible, setVisible, message, bmi }: ResultProps) => {
  const onShare = async () => {
    await Share.share({
      message: `I calculated my BMI today using the bmi-calculator-app, check the result: ${bmi} (${message})`,
    });
  };

  return (
    <Modal
      testID="resultModal"
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(!visible)}
    >
      <S.Wrapper>
        <S.ModalView>
          {bmi && <S.BmiText>{bmi}</S.BmiText>}
          <S.MessageText>{message}</S.MessageText>
          <S.ButtonsView>
            {bmi && (
              <S.ButtonShare
                accessibilityRole="button"
                onPress={onShare}
              >
                <S.ButtonText>Share</S.ButtonText>
              </S.ButtonShare>
            )}

            <S.ButtonClose
              testID="closeButton"
              accessibilityRole="button"
              onPress={() => setVisible(!visible)}
            >
              <S.ButtonText>Close</S.ButtonText>
            </S.ButtonClose>
          </S.ButtonsView>
        </S.ModalView>
      </S.Wrapper>
    </Modal>
  );
};

export default Result;
