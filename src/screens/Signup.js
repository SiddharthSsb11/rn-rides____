import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import CustomButton from "../components/UI/CustomButton";
import OAuth from "../components/UI/OAuth";
import InputField from "../components/UI/InputField";
import { icons, images } from "../../constants";
import styles from "./Signup.styles";

const Signup = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.signUpCar} style={styles.image} />
          <Text style={styles.titleText}>Create Your Account</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={() => console.log("--signup--")}
            containerStyle={styles.signUpButton}
          />
          <OAuth />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.signupLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
