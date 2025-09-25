import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Actividad1 from './Componentes/Actividad1';
import Actividad2 from './Componentes/Actividad2';
import Actividad3 from './Componentes/Actividad3';
import Actividad4 from './Componentes/Actividad4';
import Actividad5 from './Componentes/Actividad5';
import Actividad6 from './Componentes/Actividad6';
import Actividad7 from './Componentes/Actividad7';
import Actividad8 from './Componentes/Actividad8';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Actividad1 />
        <Actividad2 />
        <Actividad3 />
        <Actividad4 />
        <Actividad5 />
        <Actividad6 />
        <Actividad7 />
        <Actividad8 />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});