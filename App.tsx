import { StyleSheet, Text, View } from 'react-native';
import Encabezado from './ComponentsTarea/Encabezado';
import CajaEstadistica from './ComponentsTarea/CajaEstadistica';
import Etiqueta from './ComponentsTarea/Etiqueta';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>MY RUTINE APP</Text>
      
      <View>
        <Encabezado
        title="Mis Rutinas de Hoy"
        subtitulo="Lunes-Tren Superior"
      />
      </View>

      <View style={styles.Datos}>
      <CajaEstadistica Valor="4" etiqueta="Ejercicios" />
      <CajaEstadistica Valor="45" etiqueta="Minutos" />
      <CajaEstadistica Valor="320" etiqueta="Kcal" />
      </View>

      <View style={styles.etiqueta}>
        <Etiqueta Texto="Pecho" colorFondo='#DBEAFE'/>
        <Etiqueta Texto="Esplada" colorFondo='#D1FAE5'/>
        <Etiqueta Texto="Pierna" colorFondo='#FCE7F3'/>
      
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    textAlign: 'justify',
    marginTop: 30,
    
    
  },
  Datos:{

    flexDirection: 'row',
    gap:10,
    marginTop:20
  },

  titulo:{
     paddingLeft: 22,
  },
  etiqueta:{
    flexDirection: "column",
    alignItems:'flex-end'
  }


});
