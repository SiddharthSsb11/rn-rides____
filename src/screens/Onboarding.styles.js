import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  skipButton: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  skipText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: Colors.primary[500],
    borderRadius: 2,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: -40,
  },
  image: {
    width: "100%",
    height: 300,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  title: {
    color: "#000000",
    fontSize: 28,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    color: Colors.general[200],
    marginHorizontal: 16,
    marginTop: 8,
  },
  customButton: {
    width: "90%",
    marginTop: 20,
    marginBottom: 28,
  },
});

export default styles;
