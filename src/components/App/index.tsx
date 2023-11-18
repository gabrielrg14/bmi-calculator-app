import { useState } from "react";
import { SafeAreaView, Pressable, Keyboard } from "react-native";

import styles from "./styles";

import { BmiResult } from "../../@types/BmiResult";

import Title from "../Title";
import Form from "../Form";
import Listing from "../Listing";
import ModalResult from "../Result";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bmiResult, setBmiResult] = useState(null as string | null);
  const [resultMessage, setResultMessage] = useState("");
  const [bmiList, setBmiList] = useState([] as BmiResult[]);

  const handleBmiResult = (bmi: string | null, message: string) => {
    setBmiResult(bmi);
    setResultMessage(message);
    if (bmi) setBmiList((prev) => [...prev, { id: Date.now(), bmi, message }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="BMI Calculator" />

      <Pressable style={styles.formList} onPress={Keyboard.dismiss}>
        <Form
          showModal={() => setModalVisible(true)}
          setBmiResult={handleBmiResult}
        />
        <Listing list={bmiList} />
      </Pressable>

      {modalVisible && (
        <ModalResult
          visible={modalVisible}
          setVisible={() => setModalVisible(!modalVisible)}
          bmi={bmiResult}
          message={resultMessage}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
