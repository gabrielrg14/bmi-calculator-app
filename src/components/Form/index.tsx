import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

import ModalResult from "../ModalResult";

const Form = () => {
  const initialValues = { height: "", weight: "" };

  const [values, setValues] = useState(initialValues);
  const [modalVisible, setModalVisible] = useState(false);
  const [bmiResult, setBmiResult] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState("");

  const calculateBMI = () => {
    const height = Number(values.height) / 100;
    const weight = Number(values.weight);
    return weight / (height * height);
  };

  const getResultMessage = (bmi: number) => {
    if (bmi < 18.6) return "Underweight";
    else if (bmi >= 18.6 && bmi <= 24.9) return "Normal weight";
    else if (bmi >= 25.0 && bmi <= 29.9) return "Overweight";
    else if (bmi >= 30.0) return "Obesity";
    else return "An error occurred while calculating your BMI.";
  };

  const showModalResult = () => {
    if (values.height && values.weight) {
      const bmi = calculateBMI();
      setBmiResult(bmi.toFixed(2));
      setModalMessage(getResultMessage(bmi));
      setValues(initialValues);
    } else {
      setModalMessage("Fill in height and weight!");
      setBmiResult(null);
    }
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.viewForm}>
        <View style={styles.boxForm}>
          <Text style={styles.textLabel}>Height (cm)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex. 175"
            keyboardType="numeric"
            value={values.height}
            onChangeText={(text) =>
              setValues((prev) => ({ ...prev, height: text }))
            }
          />

          <Text style={styles.textLabel}>Weight (kg)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex. 80"
            keyboardType="numeric"
            value={values.weight}
            onChangeText={(text) =>
              setValues((prev) => ({ ...prev, weight: text }))
            }
          />

          <TouchableOpacity
            style={styles.buttonCalculate}
            onPress={() => showModalResult()}
          >
            <Text style={styles.textButtonCalculate}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ModalResult
        visible={modalVisible}
        setVisible={() => setModalVisible(!modalVisible)}
        bmi={bmiResult}
        message={modalMessage}
      />
    </>
  );
};

export default Form;
