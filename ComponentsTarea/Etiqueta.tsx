import { StyleSheet, Text, View } from'react-native';

type Etiqueta1 ={
    Texto: string, 
    colorFondo: string

}

export default function Etiqueta1 ({Texto, colorFondo}:Etiqueta1){
    return(

        <View style={[styles.etiqueta, { backgroundColor: colorFondo }]}>
        <Text style={styles.Nombre}>{Texto}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

Nombre:{
 fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',

},
etiqueta:{
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 20,
  alignSelf: 'flex-start',
}

});













