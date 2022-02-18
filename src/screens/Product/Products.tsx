import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { tailwind } from "tailwind";
import { useProductsListQuery } from "./Products.generated";

interface ProductsProps {}

export const Products: React.FunctionComponent<ProductsProps> = ({}) => {
  const buttonPressed = () => {
    console.log("Button pressed");
  };
  const { data } = useProductsListQuery();

  console.log(data);
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
