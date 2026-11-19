import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


export default function Login ({navigation} : any){
        //hooks de react: useState, useEffect, useMemo, etc. 
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleOnPressLogIn = () => {
            navigation.navigate("HomeScreen", {email});
        }

        const handleOnPressSignUp = () => {
            navigation.navigate("RegisterScreen")
        }
        const handleOnPressForgotPwd = () => {
            console.log("Imprimiendo desde boton 3");
        }
    return(
 <View style={styles.container}>

      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomInput  
        onChangeText={setEmail}
        value={email}
        placeholder='email'
        type='email'
        />
      <CustomInput  
        onChangeText={setPassword}
        value={password}
        placeholder='Contraseña'
        type='password'
        />
      <View style ={styles.buttonsContainer}>
          <CustomButton title = "Log In" onPressButton={handleOnPressLogIn} />
          <CustomButton title = "Sign Up" onPressButton={handleOnPressSignUp} variant='secondary'/>
          <CustomButton title = "Forgot your password?" onPressButton={handleOnPressForgotPwd} variant='tertiary' disabled />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
  }
});