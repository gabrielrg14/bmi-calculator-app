import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  bmiText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  messageText: {
    color: "#000",
    fontSize: 20,
    marginBottom: 15
  },
  modalButton: {
    borderRadius: 5,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#18a330"
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF"
  }
})

export default styles
