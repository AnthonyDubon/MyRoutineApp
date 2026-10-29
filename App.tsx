import { StyleSheet, Text, View } from 'react-native';
import Encabezado from './ComponentsTarea/Encabezado';
import CajaEstadistica from './ComponentsTarea/CajaEstadistica';
import TargetaEjercicio from './ComponentsTarea/TarjetaEjercicio';

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


      <Text style={styles.Subtitulo}>EJERCICIOS</Text>

    
      <View style={styles.targetas}>
        <TargetaEjercicio
         nombre="Press de banca"
         series={4}
         repeticiones={10}
         grupoMuscular="pecho"
        />

         <TargetaEjercicio
         nombre="Remo con Barra"
         series={4}
         repeticiones={12}
         grupoMuscular="Espalda"
         destacado={true}
        />

         <TargetaEjercicio
         nombre="Press militar"
         series={3}
         repeticiones={15}
         grupoMuscular="Hombro"
        />

         <TargetaEjercicio
         nombre="Curl de biceps"
         series={3}
         repeticiones={13}
         grupoMuscular="Biceps"
        />
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
  },

  Subtitulo:{
    paddingLeft: 22,
    marginTop: 30,
    fontWeight:'bold',
    fontSize: 16,
  },
  targetas:{
    marginTop: 15,
    gap: 12,
    
        
  }



});
