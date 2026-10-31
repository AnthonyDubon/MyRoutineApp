import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BotonAccion from "./BotonAccion";

type EncabezadoSeccionProps = {
  titulo: string;
  cantidad?: number;
  onVerTodo?: () => void;
};

export default function EncabezadoSeccion({
  titulo,
  cantidad,
  onVerTodo,
}: EncabezadoSeccionProps) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.titulos}>
        <Text style={styles.titulo}>{titulo}</Text>

        {cantidad !== undefined && (
          <Text style={styles.cantidad}>({cantidad})</Text>
        )}
      </View>

      {onVerTodo && (
        <BotonAccion
          titulo="Ver todo"
          onPress={onVerTodo}
          apariencia="enlace"
          tamano="pequeno"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  titulos: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },

  titulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
  },

  cantidad: {
    fontSize: 15,
    color: "gray",
    marginLeft: 5,
  },
});