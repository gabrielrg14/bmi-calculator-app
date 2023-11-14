import { StyleSheet, View } from "react-native";

import Title from "./src/components/Title";
import Form from "./src/components/Form";

const App = () => {
  return (
    <View style={styles.container}>
      <Title text="BMI Calculator" />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E5E5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
});

export default App;
