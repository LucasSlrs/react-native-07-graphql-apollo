import React from "react";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { client } from "~/graphql/client";
import { Products } from "~/screens/Product";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Products />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
