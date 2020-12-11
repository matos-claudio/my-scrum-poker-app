import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    backgroundColor: "#9C56DE",
  },
  viewLogo: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
  },
  fontTitle: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  fontSubtitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  fontAvatar: {
    color: "grey",
    fontWeight: "bold",
    // fontSize: 14,
    textAlign: "center",
  },

  fontMyAvatar: {
    color: "grey",
    fontSize: 10,
  },

  viewFields: {
    flex: 1,
    justifyContent: "center",
  },

  textInput: {
    // backgroundColor: "#fff",
    height: 45,
    borderWidth: 0.3,
    padding: 5,
    borderColor: "#fafafa",
    borderRadius: 5,
    color: "#fff",
  },

  viewButtons: {
    flex: 1,
    justifyContent: "space-around",
  },

  buttonLogin: {
    backgroundColor: "#FFDA1A",
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
  },

  labelButtonLogin: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#000",
  },

  viewButtonSignup: {
    flexDirection: "row",
    justifyContent: "center",
  },

  labelSignup: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
  },

  labelButtonSignup: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1565c0",
  },
});
