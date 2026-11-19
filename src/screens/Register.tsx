import { View,Text } from "react-native"
import CustomButton from "../components/CustomButton"


export default function Register(){
    return(
        <View>
            <Text>Want to join?</Text>
            <CustomButton title="Ir a home" onPressButton={()=>{}}/>
        </View>
    )
}