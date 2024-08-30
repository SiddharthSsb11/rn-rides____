import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 50,
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  bgPrimary: {
    backgroundColor: Colors.primary[500],
  },
  bgSecondary: {
    backgroundColor: "#697586",
  },
  bgDanger: {
    backgroundColor: "#E54B4F",
  },
  bgSuccess: {
    backgroundColor: "#23C45F",
  },
  bgOutline: {
    backgroundColor: "transparent",
    borderColor: "#d4d4d4",
    borderWidth: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrimary: {
    color: "black",
  },
  textSecondary: {
    color: "#F1F4F6",
  },
  textDanger: {
    color: "#F8E1E3",
  },
  textSuccess: {
    color: "#D2F8E8",
  },
  textDefault: {
    color: "white",
  },
});

export default styles;
