import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewForm: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  boxForm: {
    width: "100%"
  },
  textLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 5
  },
  textValidation: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 5
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: "#F6F6F6"
  },
  buttonCalculate: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18a330"
  },
  textButtonCalculate: {
    fontSize: 20,
    color: "#FFF"
  }
})

export default styles
