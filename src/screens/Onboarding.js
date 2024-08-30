import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import Colors from "../../constants/Colors";
import CustomButton from "../components/UI/CustomButton";
import { onboarding } from "../../constants/index";
import styles from "./Onboarding.styles";

const Onboarding = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={styles.skipButton}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {item.title}{" "}
                {item.id === 1 && (
                  <Text
                    style={{
                      color: Colors.primary[500],
                      fontSize: 32,
                      fontFamily: "Poppins-ExtraBold",
                    }}
                  >
                    Rides
                  </Text>
                )}
              </Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? navigation.navigate("Signup")
            : swiperRef.current?.scrollBy(1)
        }
        containerStyle={styles.customButton}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
