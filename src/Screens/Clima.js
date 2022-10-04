import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import * as Contacts from "expo-contacts";

export default function Clima() {
  
  return (
    <View style={styles.container}>

        <Text>hOLAAAAAAA</Text>
      <StatusBar style="auto" backgroundColor="##2a7afa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedor: {
    backgroundColor: "red",
    width: 200,
    height: 'auto',
    margin: 10,
  },
  boton: {
    backgroundColor: "#000"
  }
});
