import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Actividad1(){
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> hola munditooooo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d5ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 26, 
    color: 'violet', 
  },
});
export default Actividad1;