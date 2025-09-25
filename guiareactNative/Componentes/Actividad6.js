import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Actividad6() {
  const insets = useSafeAreaInsets();

  const juegos = [
    {
      title: "Minecraft",
      score: 9,
      description: "Un mundo listo para lo que quieras,consytuir,explorar,matar mounstruos o pvp",
      image: "https://cms-assets.xboxservices.com/assets/22/3a/223a1521-60cf-4a82-b708-c5f2fdfcf163.jpg?n=Minecraft-Vanilla_Sneaky-Slider-1084_Spring-to-Life_1600x675.jpg",
    },
    {
      title: "Sims 4",
      score: 10,
      description: "Crea tu propia historia viviendo la vida que siempre soñaste a travez de la pantalla",
      image: "https://help.ea.com/_images/seegk6e7ypwi/41Efk2CWkYtLMbIyV11Uxu/470cea64dc42a9413f33938254868ac7/the-sims-4-hero.webp", 
    },
    {
      title: "Tetr.io",
      score: 11,
      description: "Un battle royale de tetris, genial para jugar con amigos",
      image: "https://www2.minijuegosgratis.com/v3/games/thumbnails/247205_1.jpg",
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: "#f5f5f5",
      }}
    >
      {juegos.map((juego, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: juego.image }} style={styles.image} />
          <Text style={styles.title}>{juego.title}</Text>
          <Text style={styles.score}>⭐ {juego.score}</Text>
          <Text style={styles.description}>{juego.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  score: {
    fontSize: 16,
    marginVertical: 4,
    color: "#FFA500",
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});