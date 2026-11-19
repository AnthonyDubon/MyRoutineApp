import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

//1. declarar tipado: pantallas junto con sus parametros
export type RootStackParamList ={
    LoginScreen: undefined;
    RegisterScreen: undefined; 
    HomeScreen: {email: string};
}


//2. crear el componente StackNavigator, que se encarga de manejar la navegacion en la aplicacion
const Stack = createNativeStackNavigator<RootStackParamList>();

//3. utilizar el componente StackNavigator
export default function StackNavigator(){

    return(
        <Stack.Navigator
            initialRouteName='LoginScreen'
        >
            <Stack.Screen 
                name="LoginScreen"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={Register}
            />

            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{title: "Home"}}
            />
        </Stack.Navigator>
    );
}

