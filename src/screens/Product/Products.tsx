import React from "react";
import { FlatList, Image, ListRenderItem, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { tailwind } from "tailwind";
import { Product } from "~/components/Product";
import { ProductFragment } from "~/components/Product/Products.generated";
import { useProductListQuery } from "./Products.generated";

interface ProductsProps {}
const PAGE_SIZE = 9;
export const Products: React.FunctionComponent<ProductsProps> = ({}) => {
  // usually use fechtMore and not refetch
  const {data, refetch, variables, loading} = useProductListQuery({
    variables: {
      skip: 0,
      take: PAGE_SIZE
    }
  });

  const nextPage = () => {
    if((data?.productsPagination.nodes.length || 0) < (data?.productsPagination.totalCount || 0)) {
      refetch({
        ...variables,
        take: (data?.productsPagination.nodes.length  || 0) + PAGE_SIZE,
      })
    }
  }

  const renderItem: ListRenderItem<ProductFragment> = ({item}) => <Product product={item} />
  const buttonPressed = () => {
    console.log("Button pressed");
  };

  return (
    <SafeAreaView style={tailwind("flex flex-1")}>
      <FlatList data={data?.productsPagination.nodes} renderItem={renderItem} onEndReached={nextPage} onRefresh={() => refetch()} refreshing={loading}/>
      <View style={tailwind("flex-1")}></View>
      <View style={tailwind("p-5")}>
        <Text
          style={tailwind("mt-8 text-center uppercase text-xs tracking-wide")}
        >
          Lucas Souleyrasse © 2022
        </Text>
      </View>
    </SafeAreaView>
  );
};
