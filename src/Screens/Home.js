import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

export default function Home() {
  
  return (
    <View style={styles.container}>
    <Pressable 
    style={styles.boton}
    onPress={()=>navigation.navigate('Clima')}/>
  <StatusBar style="auto" />
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
