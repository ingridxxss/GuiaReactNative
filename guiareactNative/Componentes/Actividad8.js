import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Actividad8() {
  const insets = useSafeAreaInsets();
  const [siguiendo, setSiguiendo] = useState(false);

  const actividades = [
    "Ensayar guiones",
    "Clases de canto",
    "Sesión de fotos",
    "Rodaje de película",
    "Descansar con amigos",
  ];

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Perfil de Actriz</Text>
      </View>

      <Image
        source={{ uri: "/guiaNative/native/assets/ingrid.png" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Ingrid Sension</Text>
      <Text style={styles.details}>Edad: 20 años | Profesión: Actriz</Text>

      <Pressable
        style={[
          styles.followButton,
          siguiendo ? styles.btnActivo : styles.btnInactivo,
        ]}
        onPress={() => setSiguiendo(!siguiendo)}
      >
        <Text style={styles.btnTexto}>
          {siguiendo ? "Siguiendo ⭐" : "Seguir"}
        </Text>
      </Pressable>

      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          paddingTop: 10,
        }}
      >
        {actividades.map((item, i) => (
          <View key={i} style={styles.itemCard}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
  },
  topBar: {
    backgroundColor: "#8E24AA",
    padding: 15,
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignSelf: "center",
    marginVertical: 18,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#311B92",
  },
  details: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 15,
    color: "#444",
  },
  followButton: {
    alignSelf: "center",
    paddingVertical: 9,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginBottom: 10,
  },
  btnInactivo: {
    backgroundColor: "#5C6BC0",
  },
  btnActivo: {
    backgroundColor: "#43A047",
  },
  btnTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  listContainer: {
    maxHeight: 250,
  },
  itemCard: {
    backgroundColor: "#F3E5F5",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    color: "#000",
  },
});