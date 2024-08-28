import { View, Text } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

const TabBarIcon = ({ focused, children }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        //padding: 4,
        backgroundColor: focused ? Colors.general[400] : "",
        height: 50,
        width: 50,
      }}
    >
      {children}
    </View>
  );
};

export default TabBarIcon;
