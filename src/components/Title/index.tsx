import { View, Text } from "react-native";

import styles from "./styles";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>{text}</Text>
    </View>
  );
};

export default Title;
