import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Actividad5() {
  const frases = [
  "cuando el mundo parecía oscuro y aterrador",
  "el amor podía hacerte salir a bailar",
  "la risa podía llevarse una parte del dolor",
  "y la belleza podía erosionar el miedo.",
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {frases.map((frase, index) => (
          <Text key={index} style={styles.frase}>
            {frase}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  frase: {
    fontSize: 18,
    marginVertical: 10,
    color: "#000000ff", 
    textAlign: "center",
  },
});