import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  viewFields: {
    flex: 1,
    padding: 20,
  },
  h1: {
    color: "#000",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    color: "#424242",
    letterSpacing: 1,
  },
  viewButton: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e64a19",
    height: 45,
    width: "100%",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "#f5f5f5",
    height: 45,
    borderWidth: 0.3,
    padding: 5,
    borderColor: "#fafafa",
    borderRadius: 5,
    color: "#000",
    marginTop: 10,
  },
  picker: {
    width: "100%",
    // height: 45,
    marginTop: 10,
    backgroundColor: "#f5f5f5",
  },
  labelTitle: {
    color: "#000",
  },
  labelGrey: {
    color: "#424242",
  },
  h2: {
    // fontWeight: "bold",
    color: "#424242",
    letterSpacing: 1,
  },
  viewTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  backgroundHeader: {
    flex: 1,
  },
  viewActivityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#f5f5f5",
    marginBottom: 30,
  },
  fab: {
    backgroundColor: "#e64a19",
  },
  containerViewQrCode: {
    backgroundColor: "#fff",
  },
  card: {
    padding: 15,
    borderRadius: 5,
    elevation: 5,
    height: 350,
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  cameraView: {
    flex: 1,
    justifyContent: "flex-start",
  },
  viewCamera: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0.2, 0.2, 0.2, 0.2)",
    alignItems: "center",
    justifyContent: "space-around",
  },
  viewMaskCamera: {
    width: 350,
    height: 350,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
  },
  viewFooter: {
    padding: 25,
    justifyContent: "space-around",
  },
  viewButtonFooter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  labelButtonFooter: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#e64a19",
  },
});
