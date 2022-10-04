import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home'
import Contactos from "./src/Screens/Contactos";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Contactos" component={Contactos}
         options={{
         headerTitle: "Contactos",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
    backgroundColor: "#2c7ef2",
    borderRadius: 20,
    height: 20,
    width: 40
  }
});
