import { StyleSheet, Text, View } from "react-native";
import Etiqueta from './Etiqueta';

type TargetaEjercicioProps ={

nombre: string, 
series:number, 
repeticiones: number,
grupoMuscular: string,
destacado?: boolean


}

export default function TargetaEjercicioProps ({nombre, series, repeticiones,grupoMuscular,destacado}:TargetaEjercicioProps){

    return(
        <View style={[styles.targetas, destacado && styles.destacado]}>
            <View style={styles.targt}>
            <Text style={styles.Nombre}>{nombre}</Text>
            <Etiqueta Texto={grupoMuscular} colorFondo="#DBEAFE" />
            </View>
            <Text>{series} series × {repeticiones} repeticiones</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    targetas:{
     backgroundColor: '#F1F5F9',
     padding: 15,
     borderRadius: 12,
     
    },

    destacado: {
    borderWidth: 3,
    borderColor:'red'
    },
    
    targt:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    },
    
    Nombre:{
        fontSize: 12,
        
        fontWeight:'bold',

    },
    Series:{
        fontWeight:'condensed',
        fontSize: 12,

    }
})