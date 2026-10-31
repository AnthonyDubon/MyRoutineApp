import React from "react";
import {Text, TouchableOpacity, ActivityIndicator, StyleSheet,} from "react-native";

type AparienciaBoton =
  | "principal"
  | "alternativa"
  | "destructiva"
  | "enlace";

type TamanoBoton = "pequeno" | "mediano" | "grande";

type BotonAccionProps = {
  titulo: string;
  onPress: () => void;
  apariencia?: AparienciaBoton;
  tamano?: TamanoBoton;
  anchoCompleto?: boolean;
  deshabilitado?: boolean;
  cargando?: boolean;
};

export default function BotonAccion({
  titulo,
  onPress,
  apariencia = "principal",
  tamano = "mediano",
  anchoCompleto = false,
  deshabilitado = false,
  cargando = false,
}: BotonAccionProps) {
  const bloqueado = deshabilitado || cargando;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={bloqueado}
      style={[
        styles.boton,
        estilosApariencia[apariencia],
        estilosTamano[tamano],
        anchoCompleto && styles.anchoCompleto,
        bloqueado && styles.deshabilitado,
      ]}
    >
      {cargando ? (
        <ActivityIndicator
          color={apariencia === "principal" || apariencia === "destructiva" ? "#FFFFFF" : "#68442B"}
        />
      ) : (
        <Text
          style={[
            styles.texto,
            textosApariencia[apariencia],
            textosTamano[tamano],
          ]}
        >
          {titulo}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
  },

  texto: {
    fontWeight: "bold",
  },

  principal: {
    backgroundColor: "#68442B",
    borderColor: "#68442B",
  },

  alternativa: {
    backgroundColor: "transparent",
    borderColor: "#68442B",
  },

  destructiva: {
    backgroundColor: "#B83B3B",
    borderColor: "#B83B3B",
  },

  enlace: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  pequeno: {
    minHeight: 34,
    paddingHorizontal: 12,
  },

  mediano: {
    minHeight: 44,
    paddingHorizontal: 18,
  },

  grande: {
    minHeight: 54,
    paddingHorizontal: 24,
  },

  textoPequeno: {
    fontSize: 12,
  },

  textoMediano: {
    fontSize: 15,
  },

  textoGrande: {
    fontSize: 18,
  },

  textoClaro: {
    color: "#FFFFFF",
  },

  textoOscuro: {
    color: "#68442B",
  },

  textoEnlace: {
    color: "#68442B",
    textDecorationLine: "underline",
  },

  anchoCompleto: {
    alignSelf: "stretch",
  },

  deshabilitado: {
    opacity: 0.45,
  },
});

const estilosApariencia = {
  principal: styles.principal,
  alternativa: styles.alternativa,
  destructiva: styles.destructiva,
  enlace: styles.enlace,
};

const estilosTamano = {
  pequeno: styles.pequeno,
  mediano: styles.mediano,
  grande: styles.grande,
};

const textosApariencia = {
  principal: styles.textoClaro,
  alternativa: styles.textoOscuro,
  destructiva: styles.textoClaro,
  enlace: styles.textoEnlace,
};

const textosTamano = {
  pequeno: styles.textoPequeno,
  mediano: styles.textoMediano,
  grande: styles.textoGrande,
};