import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 240,
  },
  image: {
    zIndex: 0,
    width: "100%",
    height: 240,
  },
  titleText: {
    fontSize: 24,
    color: "black",
    fontFamily: "Poppins-SemiBold",
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  signUpButton: {
    marginTop: 24,
    elevation: 6,
  },
  linkText: {
    fontSize: 18,
    textAlign: "center",
    color: "#D1D5DB",
    marginTop: 40,
  },
  primaryLinkText: {
    color: "#3B82F6",
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingVertical: 36,
    borderRadius: 20,
    minHeight: 300,
  },
  modalTitle: {
    fontFamily: "JakartaExtraBold",
    fontSize: 24,
    marginBottom: 8,
  },
  modalText: {
    fontFamily: "Jakarta",
    marginBottom: 20,
  },
  errorText: {
    color: "#EF4444",
    marginTop: 4,
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: "#10B981",
  },
  successModalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingVertical: 36,
    borderRadius: 20,
    minHeight: 300,
  },
  successImage: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginVertical: 20,
  },
  successTitle: {
    fontFamily: "JakartaBold",
    fontSize: 24,
    textAlign: "center",
  },
  successText: {
    fontSize: 16,
    color: "#9CA3AF",
    fontFamily: "Jakarta",
    textAlign: "center",
    marginTop: 8,
  },
  browseHomeButton: {
    marginTop: 20,
  },
  signupContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
  signupText: {
    fontSize: 16,
    color: Colors.general[200],
    fontFamily: "Poppins-Regular",
  },
  signupLink: {
    fontSize: 16,
    color: Colors.primary[500],
    fontFamily: "Poppins-SemiBold",
    marginLeft: 5,
  },
});

export default styles;
