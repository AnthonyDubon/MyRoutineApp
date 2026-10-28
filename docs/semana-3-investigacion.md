# Semana 3 - Tarea 1
## Parte A: Investigación sobre estilos y Flexbox

### A1. Flexbox

**1. ¿Cuál es el valor por defecto de flexDirection en React Native? ¿En qué se diferencia de CSS web?**

En React Native, el valor por defecto es "column", esto quiere decir que los elementos se colocan uno debajo de otro. En CSS para la web, el valor por defecto es "row", por lo que se colocan horizontalmente.

**2. ¿Cuál es la diferencia entre justifyContent y alignItems?**

"justifyContent" este viene siendo como organizar los elementos en el eje principal, mientras que "alignItems" los alinea en el eje secundario.

- Con flexDirection: 'column', justifyContent, trabaja verticalmente y alignItems horizontalmente.
- Con flexDirection: 'row', justifyContent trabaja horizontalmente y alignItems verticalmente.

**3. Menciona cuatro valores de justifyContent.**

- flex-start: coloca los elementos al inicio del contenedor.
- center: coloca los elementos en el centro.
- flex-end: coloca los elementos al final.
- space-between: distribuye el espacio entre los elementos, dejando el primero y el último en los extremos.

**4. ¿Qué significa flex: 1? ¿Cómo se reparte el espacio entre flex: 1 y flex: 2?**

flex: 1 permite que un componente ocupe una parte del espacio disponible dentro de su contenedor. Si tenemos dos componentes con flex: 1
flex: 2, el primero recibe una tercera parte y el segundo dos terceras partes del espacio que se reparte.

### A2. Estilos de View

**5. Diferencia entre padding y margin. ¿Qué hacen paddingHorizontal y marginVertical?**

padding basicamente agrega espacio dentro de un componente y margin agrega espacio por fuera del componente

paddingHorizontal agrega espacio interno a la izquierda y derecha y marginVertical agrega espacio externo arriba y abajo.

**6. ¿Qué propiedades permiten dibujar bordes y redondear esquinas?**

Podemos utilizar borderWidth para definir el grosor del borde, borderColor para elegir su color y borderRadius para redondear las esquinas.

### A3. Estilos de Text

**7. ¿Para qué sirven las siguientes propiedades?**

- fontSize: define el tamaño del texto.
- fontWeight: establece qué tan gruesa o negrita será la letra.
- color: cambia el color del texto.
- textAlign: alinea el texto a la izquierda, derecha o centro.
- lineHeight: controla el espacio vertical entre líneas.
- letterSpacing: modifica la separación entre letras.

fontWeight acepta valores como "normal", "bold" y pesos escritos como texto, por ejemplo "700".

**8. ¿Qué hacen textTransform y textDecorationLine?**

textTransform permite cambiar la presentación de las letras. Por ejemplo, uppercase muestra el texto en mayúsculas.

textDecorationLine agrega decoraciones al texto. Por ejemplo, underline coloca una línea debajo de las palabras.

**9. ¿Por qué un Text dentro de otro Text hereda estilos, pero un Text dentro de View no?**

Porque React Native maneja los textos anidados como parte de un mismo bloque de texto y permite que compartan estilos. En cambio, View funciona como un contenedor de distribución y no transmite automáticamente propiedades de texto como el color o el tamaño de letra a sus hijos.

### A4. StyleSheet

**10. ¿Qué ventajas tiene StyleSheet.create?**

Permite mantener los estilos organizados y separados del contenido visual, reutilizarlos en diferentes elementos y facilitar la lectura del código. Además, ayuda a detectar errores en las propiedades de estilo mediante TypeScript y las sugerencias del editor.

**11. ¿Qué sucede si dos estilos de un arreglo tienen backgroundColor?**

Cuando usamos "style={[estilos.tarjeta, estilos.tarjetaDestacada]}", el último estilo tiene prioridad si ambos definen la misma propiedad.