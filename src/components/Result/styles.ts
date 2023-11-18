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
    fontSize: 20
  },
  messageText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  buttonsView: {
    width: "100%",
    alignItems: "center",
    gap: 5
  },
  buttonShare: {
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#1877f2"
  },
  buttonClose: {
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#18a330"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 30
  }
})

export default styles
