import { StyleSheet, Text, View } from 'react-native';
import Encabezado from './ComponentsTarea/Encabezado';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>My RUTINE APP</Text>
      
      <view>
        <Encabezado
        title="Mi Rutina de Hoy"
        subtitulo="Lunes-Tren Superior"
      />
      </view>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    textAlign: 'justify',
    marginTop: 10,

    
  },
});
