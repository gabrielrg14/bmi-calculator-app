import { useState } from "react";
import { Vibration } from "react-native";

import * as S from "./styles";

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
    <S.Wrapper>
      <S.Label>Height (cm)</S.Label>
      {validation.height && <S.Validation>{requiredMessage}</S.Validation>}
      <S.Input
        placeholder="Ex. 175"
        keyboardType="numeric"
        value={values.height}
        onChangeText={(text) =>
          setValues((prev) => ({ ...prev, height: text }))
        }
      />

      <S.Label>Weight (kg)</S.Label>
      {validation.weight && <S.Validation>{requiredMessage}</S.Validation>}
      <S.Input
        placeholder="Ex. 80.5"
        keyboardType="numeric"
        value={values.weight}
        onChangeText={(text) =>
          setValues((prev) => ({ ...prev, weight: text }))
        }
      />

      <S.ButtonCalculate
        accessibilityRole="button"
        onPress={() => handleCalculate()}
      >
        <S.TextButton>Calculate</S.TextButton>
      </S.ButtonCalculate>
    </S.Wrapper>
  );
};

export default Form;
