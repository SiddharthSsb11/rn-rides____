import React from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "../../../constants/index";
import styles from "./Oauth.styles";

const OAuth = () => {
  const handleGoogleSignIn = () => {
    console.log("--google---");
  };

  return (
    <View>
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>Or</Text>
        <View style={styles.separatorLine} />
      </View>

      <CustomButton
        title="Log In with Google"
        containerStyle={styles.customButtonContainer}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.googleIcon}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
