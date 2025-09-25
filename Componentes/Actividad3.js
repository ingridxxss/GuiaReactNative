import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Actividad3() {
  return (
    <View style={styles.container}>
    <Image
      source={{ uri: 'https://i0.wp.com/svmusica.com/wp-content/uploads/2023/04/gustavo-cerati-joven-svmusica.jpg?fit=956%2C709&ssl=1' }}
      style={styles.imagen}
    />

      <Text style={styles.nombre}>Gustavo Cerati</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 15,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff', 
  },
});

export default Actividad3;