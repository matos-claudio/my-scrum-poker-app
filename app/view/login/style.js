import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  viewLogo: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
  },
  fontTitle: {
    color: "grey",
    fontWeight: "bold",
    opacity: 0.5,
  },

  viewFields: {
    flex: 1,
    justifyContent: "center",
  },

  textInput: {
    backgroundColor: "#fff",
    height: 45,
    borderWidth: 0.3,
    padding: 5,
    borderColor: "grey",
    borderRadius: 5,
    color: "grey",
  },

  viewButtons: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-around",
  },

  buttonLogin: {
    backgroundColor: "#6a1b9a",
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
  },

  labelButtonLogin: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
  },

  viewButtonSignup: {
    flexDirection: "row",
    justifyContent: "center",
  },

  labelSignup: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "grey",
  },

  labelButtonSignup: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#e64a19",
  },
  flex1: {
    flex: 1,
  },
  container: {
    backgroundColor: Platform.OS == "android" ? "#9C56DE" : "#FFF",
  },
  primaryColor: {
    backgroundColor: "#9C56DE",
  },
  font18: {
    fontSize: 18,
  },
  labelWhite: {
    color: "#fff",
  },
  labelGrey: {
    color: "#424242",
  },
  padding: {
    padding: 20,
  },
  h2: {
    fontWeight: "bold",
  },
  viewTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  backgroundHeader: {
    backgroundColor: "#E9EBF6",
    flex: 0.7,
  },
  header: {
    backgroundColor: "#9C56DE",
    flex: 3,
    borderBottomRightRadius: 190,
    justifyContent: "space-around",
  },
  viewFields: {
    backgroundColor: "#fff",
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    height: 170,
    minWidth: 320,
    alignContent: "flex-end",
    marginHorizontal: 20,
    flex: 1,
    position: "absolute",
    top: 110,
    borderRadius: 15,
    shadowColor: "#616161",
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  viewLoginButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#FFF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  }
});
