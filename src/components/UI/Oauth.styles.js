import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEF3F5",
  },
  separatorText: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  customButtonContainer: {
    marginTop: 16,
    width: "100%",
    shadowColor: "transparent",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});

export default styles;
