import React from "react";
import { StyleSheet, View, Button, Alert, Platform } from "react-native";

export default function Actividad4() {
  const mostrarAlerta = () => {
    if (Platform.OS === "web") {
      alert("Hola desde Wewb"); 
    } else {
      Alert.alert("hola", "presionast el boton biEN ahi");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Presiona" onPress={mostrarAlerta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  botonCustom: {
    backgroundColor: "#42A5F5",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});