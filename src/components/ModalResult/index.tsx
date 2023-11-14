import { Modal, View, Text, Pressable } from "react-native";

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
          <Pressable
            style={styles.modalButton}
            onPress={() => setVisible(!visible)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalResult;
