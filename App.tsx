
import { StyleSheet, Text, View } from 'react-native';
import CustumButton from './Components/CustumButton';

export default function App() {

  const handleOnPressPrimaryBuuton = () =>{
    console.log("Inciando Cesion");
  }

  const handleOnPressSecondaryButton = () =>{
    console.log("Llendo a Registrase");
  }

  return (
    <View style={styles.container}>

      <Text>Mi primera aplicación móvil</Text>

      <View style={styles.boton}>
      <CustumButton title="Iniciar Cesion" onPress={handleOnPressPrimaryBuuton} />
      <CustumButton title="Registrarse" onPress={handleOnPressSecondaryButton} />
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height:190,
    margin:30,
    
   
    justifyContent: 'center',
  },
  boton:{
    flex:1,
    padding:15,
    backgroundColor:'pink',
    marginTop:30,
  }
});
