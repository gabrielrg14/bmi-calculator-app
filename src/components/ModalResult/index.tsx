import { Share, Modal, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

type ModalResultProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  bmi: string | null;
  message: string;
};

const ModalResult = ({
  visible,
  setVisible,
  message,
  bmi,
}: ModalResultProps) => {

  const onShare = async () => {
    await Share.share({
      message: `I calculated my BMI today using the bmi-calculator-app, check the result: ${bmi} (${message})`,
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(!visible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {bmi && <Text style={styles.bmiText}>{bmi}</Text>}
          <Text style={styles.messageText}>{message}</Text>
          <View style={styles.buttonsView}>
            {bmi && (
              <TouchableOpacity style={styles.buttonShare} onPress={onShare}>
                <Text style={styles.buttonText}>Share</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setVisible(!visible)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalResult;
