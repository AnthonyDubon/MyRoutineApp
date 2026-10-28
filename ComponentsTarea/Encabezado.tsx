import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';


type EncabezadoProps = {
  title: string;    
  subtitulo: string;
};

export default function Encabezado ({title, subtitulo}:EncabezadoProps){
  return (
   
      <View>
        <Text style={styles.Texto}>{title}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({

  Texto: {
    fontSize: 24,
    fontWeight:'bold',
    color:'Black',
    paddingHorizontal: 20,
    marginTop: 5,
    paddingVertical: 8
    
    
  },
  subtitulo:{
    fontWeight:'100',
   
    paddingHorizontal: 20,
    

  }
});

