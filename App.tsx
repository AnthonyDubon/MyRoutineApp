
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './Components/CustumButton';
import CustomInput from './Components/CustomInput';
import { useState } from 'react';

export default function App() {
  // Hooks de React: useState, useEffect, useMemo, etc.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressPrimaryButton = () => {
    console.log("Imprimiendo desde boton 1");
  };

  const handleOnPressSecondaryButton = () => {
    console.log("Imprimiendo desde boton 2");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <CustomInput
        onChangeText={setEmail}
        value={email}
        placeholder="Correo electrónico"
        type="email"
        
      />

      <CustomInput
        onChangeText={setPassword}
        value={password}
        placeholder="Contraseña"
        type="password"
        
      />

      <View style={styles.buttonsContainer}>
        <CustomButton
          title="My App Button"
          onPressButton={handleOnPressPrimaryButton}
        />

        <CustomButton
          title="My App Button #2"
          onPressButton={handleOnPressSecondaryButton}
          variant="secondary"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#b6a8e4',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 15,
    backgroundColor: 'pink',
  },
});
