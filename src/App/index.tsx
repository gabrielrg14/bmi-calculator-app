import { useState } from "react";
import { Keyboard } from "react-native";

import * as S from "./styles";

import { BmiResult } from "../@types/BmiResult";

import Title from "../components/Title";
import Form from "../components/Form";
import Listing from "../components/Listing";
import ModalResult from "../components/Result";

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
    <S.Wrapper>
      <Title text="BMI Calculator" />

      <S.FormList onPress={Keyboard.dismiss}>
        <Form
          showModal={() => setModalVisible(true)}
          setBmiResult={handleBmiResult}
        />
        <Listing list={bmiList} />
      </S.FormList>

      {modalVisible && (
        <ModalResult
          visible={modalVisible}
          setVisible={() => setModalVisible(!modalVisible)}
          bmi={bmiResult}
          message={resultMessage}
        />
      )}
    </S.Wrapper>
  );
};

export default App;
