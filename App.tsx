
import { StyleSheet, Text, View } from 'react-native';
import CustumButton from './Components/CustumButton';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Mi primera aplicación móvil</Text>

      <CustumButton title="Iniciar Cesion" />
      <CustumButton title="Registrarse" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
