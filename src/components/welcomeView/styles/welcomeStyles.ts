import { StyleSheet } from "react-native";
export const welcomeStyles = StyleSheet.create({
  view: {
    font: "#ffffff",
    width: "100%",
    height: "100%",
    backgroundColor: "#1a1a1a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#ffffff",
  },
  btnCont: {
    padding: 10,
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
});
