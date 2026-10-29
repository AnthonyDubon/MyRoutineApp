import {StyleSheet, Text, View} from 'react-native';

type CajaEstadisticaProps ={

    Valor:String;
    etiqueta:String;
}

export default function CajaEstadistica1 ({Valor,etiqueta}:CajaEstadisticaProps){

    return(
    <View style={styles.caja}>
       <Text style={styles.numero}>{Valor}</Text>
       <Text style={styles.descricion}>{etiqueta}</Text>

    </View>

);
    

}

const styles = StyleSheet.create({

    numero:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
    },
    descricion:{
        
        textAlign:'center',
    },

    caja:{
        
        backgroundColor:'red',
        padding:15,
        borderRadius:12,  
        flex: 1

    }

});