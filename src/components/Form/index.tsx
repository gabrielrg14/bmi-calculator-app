import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
} from "react-native";

import styles from "./styles";

type FormProps = {
  showModal: () => void;
  setBmiResult: (bmi: string | null, message: string) => void;
};

const Form = ({ showModal, setBmiResult }: FormProps) => {
  const initialValues = { height: "", weight: "" };
  const initialValidation = { height: false, weight: false };
  const requiredMessage = "This field is required!";

  const [values, setValues] = useState(initialValues);
  const [validation, setValidation] = useState(initialValidation);

  const calculateBMI = () => {
    const height = Number(values.height.replace(/[.,]/, "")) / 100;
    const weight = Number(values.weight);
    return weight / (height * height);
  };

  const getResultMessage = (bmi: number) => {
    if (bmi < 18.6) return "Underweight";
    else if (bmi >= 18.6 && bmi <= 24.9) return "Normal weight";
    else if (bmi >= 25.0 && bmi <= 29.9) return "Overweight";
    else if (bmi >= 30.0) return "Obesity";
    else return "Error when calculating BMI.";
  };

  const validateFields = () => {
    setValidation((prev) => ({
      ...prev,
      height: values.height === "" ? true : false,
    }));

    setValidation((prev) => ({
      ...prev,
      weight: values.weight === "" ? true : false,
    }));
  };

  const handleCalculate = () => {
    validateFields();
    showModal();

    if (values.height && values.weight) {
      const bmi = calculateBMI();
      setBmiResult(bmi.toFixed(2), getResultMessage(bmi));
      setValues(initialValues);
      setValidation(initialValidation);
    } else {
      setBmiResult(null, "Fill in height and weight!");
      Vibration.vibrate();
    }
  };

  return (
    <View style={styles.boxForm}>
      <Text style={styles.textLabel}>Height (cm)</Text>
      {validation.height && (
        <Text style={styles.textValidation}>{requiredMessage}</Text>
      )}
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
      {validation.weight && (
        <Text style={styles.textValidation}>{requiredMessage}</Text>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Ex. 80.5"
        keyboardType="numeric"
        value={values.weight}
        onChangeText={(text) =>
          setValues((prev) => ({ ...prev, weight: text }))
        }
      />

      <TouchableOpacity
        style={styles.buttonCalculate}
        onPress={() => handleCalculate()}
      >
        <Text style={styles.textButtonCalculate}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
