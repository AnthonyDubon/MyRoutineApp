
import React from "react";
import { View,Text, ScrollView,Alert, StyleSheet} from "react-native";

import type { Producto } from "./Producto";
import BotonAccion from "./ComponentsLaboratorio/BotonAccion";
import TarjetaProducto from "./ComponentsLaboratorio/TarjetaProducto";
import EncabezadoSeccion from "./ComponentsLaboratorio/EncabezadoSeccion";

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Café americano",
    categoria: "bebida",
    precio: 35,
    disponibilidad: "disponible",
  },
  {
    id: 2,
    nombre: "Licuado de fresa",
    categoria: "bebida",
    precio: 55,
    disponibilidad: "pocasUnidades",
    nuevo: true,
  },
  {
    id: 3,
    nombre: "Empanada de queso",
    categoria: "comida",
    precio: 30,
    disponibilidad: "disponible",
    descuento: 10,
  },
  {
    id: 4,
    nombre: "Sándwich de pollo",
    categoria: "comida",
    precio: 75,
    disponibilidad: "agotado",
  },
  {
    id: 5,
    nombre: "Pastel de chocolate",
    categoria: "postre",
    precio: 45,
    disponibilidad: "pocasUnidades",
    descuento: 20,
  },
  {
    id: 6,
    nombre: "Galleta de avena",
    categoria: "postre",
    precio: 20,
    disponibilidad: "disponible",
    nuevo: true,
  },
];

export default function App() {
  const favoritos = productos.filter(
    (producto) => producto.id === 1 || producto.id === 6
  );

  const calcularPrecioFinal = (producto: Producto): number => {
    const descuento = producto.descuento ?? 0;
    return producto.precio - (producto.precio * descuento) / 100;
  };

  const formatearPrecio = (precio: number): string => {
    return `L ${precio.toFixed(2)}`;
  };

  const agregarProducto = (producto: Producto): void => {
    Alert.alert("CampusCafé", `${producto.nombre} agregado al pedido`);
  };

  const pedirOtraVez = (producto: Producto): void => {
    Alert.alert("CampusCafé", `Pedido rápido: ${producto.nombre}`);
  };

  const mostrarMenu = (): void => {
    Alert.alert("CampusCafé", "Mostrando el menú completo");
  };

  const confirmarPedido = (): void => {
    Alert.alert("CampusCafé", "Pedido confirmado");
  };

  const vaciarPedido = (): void => {
    Alert.alert("CampusCafé", "Se vació el pedido");
  };

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>CampusCafé</Text>
      <Text style={styles.subtitulo}>Bienvenido a nuestro menú</Text>

      <EncabezadoSeccion
        titulo="Menú del día"
        cantidad={productos.length}
        onVerTodo={mostrarMenu}
      />

      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          producto={producto}
          textoAccion="Agregar"
          onAccion={() => agregarProducto(producto)}
          precioFormateado={formatearPrecio(producto.precio)}
          precioFinalFormateado={formatearPrecio(calcularPrecioFinal(producto))}
        />
      ))}

      <EncabezadoSeccion
        titulo="Sus favoritos"
        cantidad={favoritos.length}
      />

      {favoritos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          producto={producto}
          textoAccion="Pedir otra vez"
          onAccion={() => pedirOtraVez(producto)}
          precioFormateado={formatearPrecio(producto.precio)}
          precioFinalFormateado={formatearPrecio(calcularPrecioFinal(producto))}
        />
      ))}

      <EncabezadoSeccion titulo="Su pedido" />

      <View style={styles.botones}>
        <BotonAccion
          titulo="Confirmar pedido"
          onPress={confirmarPedido}
          apariencia="principal"
          tamano="mediano"
          anchoCompleto
        />

        <BotonAccion
          titulo="Vaciar pedido"
          onPress={vaciarPedido}
          apariencia="destructiva"
          tamano="mediano"
          anchoCompleto
        />

        <BotonAccion
          titulo="Enviando..."
          onPress={() => {}}
          cargando
          anchoCompleto
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  contenido: {
    padding: 15,
    paddingTop: 50,
    paddingBottom: 30,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "brown",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15,
  },

  botones: {
    gap: 10,
    marginBottom: 20,
  },
});
