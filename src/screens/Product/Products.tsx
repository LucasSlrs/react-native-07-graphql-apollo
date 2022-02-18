import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { tailwind } from "tailwind";

interface ProductsProps {}

export const Products: React.FunctionComponent<ProductsProps> = ({}) => {
  const buttonPressed = () => {
    console.log("Button pressed");
  };

  return (
    <SafeAreaView style={tailwind("flex flex-1")}>
      <View style={tailwind("flex-1")}></View>
      <View style={tailwind("p-5")}>
        <Text
          style={tailwind("mt-8 text-center uppercase text-xs tracking-wide")}
        >
          Wawa Sensei © 2022
        </Text>
      </View>
    </SafeAreaView>
  );
};
