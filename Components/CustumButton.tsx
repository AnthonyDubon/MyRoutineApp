
import { Pressable, StyleSheet, Text } from "react-native";
import { CustomButtonProps, CustomButtonVariant } from "../utiles/ButtonProps";

export default function CustomButton({title, onPressButton, variant = "primary", disabled = false,}: CustomButtonProps) {
  const styles = getStyles(variant);

  return (
    <Pressable
      style={styles.button}
      onPress={onPressButton}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const getStyles = (variant: CustomButtonVariant) =>

  // aqui van definidos los estilos y las condicionales del estilo
  StyleSheet.create({ button: { backgroundColor: 
          variant === "primary"? "#24327b" // aqui pregunta si es primary que muestre azul
          : variant === "secondary" ? "lightgray" // si ya pregunto y no es primary pero si secundary entonces muestra gris
          : "transparent", // si ya pregunto las dos y no son, entonces lo muestra transparente

      width: 180,
      paddingVertical: 14,
      paddingHorizontal: 18,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    },
    
    buttonText: {
      color: variant === "primary" ? "white" : "#000000",
      fontWeight: "500",
      fontSize: variant === "tertiary" ? 11 : 15,
      letterSpacing: 0.3,
    },
  });
