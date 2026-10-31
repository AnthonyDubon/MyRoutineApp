import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { Producto } from "../Producto";
import BotonAccion from "./BotonAccion";

type TarjetaProductoProps = {
  producto: Producto;
  textoAccion: string;
  onAccion: () => void;
  precioFormateado: string;
  precioFinalFormateado: string;
};

export default function TarjetaProducto({
  producto,
  textoAccion,
  onAccion,
  precioFormateado,
  precioFinalFormateado,
}: TarjetaProductoProps) {
  const agotado = producto.disponibilidad === "agotado";
  const pocasUnidades = producto.disponibilidad === "pocasUnidades";
  const tieneDescuento = producto.descuento !== undefined;

  return (
    <View style={styles.tarjeta}>
      <View style={styles.encabezado}>
        <Text style={styles.nombre}>{producto.nombre}</Text>

        <Text
          style={[
            styles.categoria,
            estilosCategoria[producto.categoria],
          ]}
        >
          {producto.categoria}
        </Text>
      </View>

      <View style={styles.etiquetas}>
        {producto.nuevo && (
          <Text style={styles.nuevo}>Nuevo</Text>
        )}

        {pocasUnidades && (
          <Text style={styles.pocasUnidades}>
            Últimas unidades
          </Text>
        )}

        {agotado && (
          <Text style={styles.agotado}>Agotado</Text>
        )}
      </View>

      <View style={styles.precios}>
        {tieneDescuento && (
          <Text style={styles.precioAnterior}>
            {precioFormateado}
          </Text>
        )}

        <Text style={styles.precioFinal}>
          {precioFinalFormateado}
        </Text>
      </View>

      <BotonAccion
        titulo={agotado ? "Agotado" : textoAccion}
        onPress={onAccion}
        deshabilitado={agotado}
        apariencia="principal"
        tamano="mediano"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },

  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    flex: 1,
  },

  categoria: {
    fontSize: 12,
    padding: 5,
    marginLeft: 5,
  },

  bebida: {
    backgroundColor: "lightblue",
    color: "blue",
  },

  comida: {
    backgroundColor: "lightyellow",
    color: "brown",
  },

  postre: {
    backgroundColor: "pink",
    color: "purple",
  },

  etiquetas: {
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: "wrap",
  },

  nuevo: {
    backgroundColor: "lightgreen",
    padding: 5,
    marginRight: 5,
    fontSize: 12,
  },

  pocasUnidades: {
    backgroundColor: "yellow",
    padding: 5,
    marginRight: 5,
    fontSize: 12,
  },

  agotado: {
    backgroundColor: "lightcoral",
    padding: 5,
    marginRight: 5,
    fontSize: 12,
  },

  precios: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  precioAnterior: {
    fontSize: 14,
    color: "gray",
    textDecorationLine: "line-through",
    marginRight: 10,
  },

  precioFinal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

const estilosCategoria = {
  bebida: styles.bebida,
  comida: styles.comida,
  postre: styles.postre,
};