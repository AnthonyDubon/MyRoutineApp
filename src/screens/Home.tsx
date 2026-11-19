import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { View,Text } from "react-native"
import { RootStackParamList } from "../navigation/StackNavigator"

// type props = {email: string};
type props = NativeStackScreenProps <RootStackParamList, 'HomeScreen'>;

export default function Home({route}: props){
    const {email} = route.params;

    return(
        <View>
            <Text>Welcome home, {email} </Text>
        </View>
    )
}