import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    width: "100%",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 4,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  inputContainerFocused: {
    borderColor: Colors.primary[500],
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  input: {
    flex: 1,
    padding: 12,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    borderRadius: 50,
    textAlign: "left",
  },
});

export default styles;
