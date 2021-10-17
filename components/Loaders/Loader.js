import React from "react";
import { View, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../../utils/Colors";
import {Text} from "../Themed";

const { width, height, _text } = Dimensions.get("window");

const Loader = () => {
    const text = _text || 'Loading...'
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        width,
        height,
        backgroundColor: "rgba(128, 129, 130,0.5)",
        zIndex: 1101,
        justifyContent: "center",
      }}
    >
      <Text style={{textAlign: 'center', marginBottom: 10}}> {text} </Text>
      <ActivityIndicator size='large' color={Colors.lighter_green} />
    </View>
  );
};

export default Loader;
