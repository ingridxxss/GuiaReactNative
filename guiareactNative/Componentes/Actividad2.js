import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Actividad2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Ingrid Sension</Text>
      <Text style={styles.texto}>6to año</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E24AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 26, 
    color: '#000000ff', 
    fontWeight: 'bold',
    marginTop: 5, 
  },
});

export default Actividad2;