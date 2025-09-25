import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function Actividad7() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.texto}>claro clarito</Text>

      <View style={styles.seccionOscura}>
        <StatusBar style="dark" />
        <Text style={styles.textoBlanco}>negro negrito</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001e39ff",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 10,
    color: "#fff",
    marginBottom: 5,
  },
  seccionOscura: {
    backgroundColor: "#f7c8e9ff", 
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  textoBlanco: {
    fontSize: 10,
    color: "#000",
  },
});