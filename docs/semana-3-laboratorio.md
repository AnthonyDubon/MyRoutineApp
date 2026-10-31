### P1. BotonAccion
Tipo de props utilizado (ComponentsLaboratorio/BotonAccion.tsx, líneas 12–20):

type BotonAccionProps = {
  titulo: string;
  onPress: () => void;
  apariencia?: AparienciaBoton;
  tamano?: TamanoBoton;
  anchoCompleto?: boolean;
  deshabilitado?: boolean;
  cargando?: boolean;
};

Las propiedades opcionales permiten utilizar el botón sin tener que configurar todas sus características. En las líneas 25–29 se definen sus valores predeterminados. Para evitar que se ejecute una acción cuando está deshabilitado o cargando, se utiliza la variable bloqueado (línea 31) y la propiedad disabled (línea 36). si solo le cambiara su apariencia no funcionaria porque no impide que el usuario lo precione



### P2. Flujo del botón "Pedir otra vez"

Cuando presiono "Pedir otra vez", en "App.tsx", líneas 126-135, se envía la función "pedirOtraVez" a la tarjeta mediante "onAccion". La función está definida en las líneas 83-85 y muestra el mensaje con el nombre del producto.

En "ComponentsLaboratorio/TarjetaProducto.tsx", la tarjeta recibe "onAccion" y se lo pasa al botón. Finalmente, en "ComponentsLaboratorio/BotonAccion.tsx", líneas 34-36, el botón utiliza "onPress" para ejecutar la acción.

### P3. Cálculo del descuento y formato del precio

En "App.tsx", líneas 70-73, calculo el precio final aplicando el porcentaje de descuento. En las líneas 75-77 utilizo "toFixed(2)" para mostrar el precio en lempiras con dos decimales.

En las líneas 116-117 y 132-133 se envían los precios formateados a las tarjetas. Si otra sede utiliza otra moneda, solamente tendría que cambiar la función "formatearPrecio" de "App.tsx".

Si el cálculo o el formato estuvieran dentro de "TarjetaProducto.tsx", tendría que modificar ese componente cada vez que cambiara la moneda o la regla de descuento.

### P4. Componente EncabezadoSeccion

En "ComponentsLaboratorio/EncabezadoSeccion.tsx", líneas 5-9, definí las propiedades del componente. "cantidad" y "onVerTodo" son opcionales porque tienen el símbolo "?", mientras que "titulo" es obligatorio.

En las líneas 21-23 verifico si se recibió una cantidad para mostrar el contador. En las líneas 26-33 verifico si existe la función "onVerTodo" para mostrar el botón "Ver todo".

Esto permite utilizar el mismo encabezado en las tres secciones sin repetir código, mostrando solamente los elementos que necesita cada una.

### P5. Funciones utilizadas en App.tsx

En "App.tsx" utilicé varias funciones para organizar las acciones de la aplicación:

"calcularPrecioFinal(producto: Producto): number" (líneas 70-73): calcula el precio después del descuento.
"formatearPrecio(precio: number): string" (líneas 75-77): muestra el precio en lempiras con dos decimales.
"agregarProducto(producto: Producto): void" (líneas 79-81): muestra una alerta cuando se agrega un producto.
"pedirOtraVez(producto: Producto): void" (líneas 83-85): muestra la alerta del pedido rápido.
"mostrarMenu(): void" (líneas 87-89): muestra el mensaje del menú completo.
"confirmarPedido(): void" (líneas 91-93): muestra la confirmación del pedido.
"vaciarPedido(): void" (líneas 95-97): muestra el mensaje para vaciar el pedido.

Estas funciones están separadas de los componentes reutilizables, por lo que puedo utilizar los mismos botones y tarjetas con diferentes acciones.


### P6. Agregar una sección de Promociones

Para agregar una sección llamada "Promociones", utilizaría nuevamente los componentes "EncabezadoSeccion" y "TarjetaProducto" desde "App.tsx".

En "App.tsx", líneas 104-119, ya se muestra cómo utilizar estos componentes para crear el menú. Podría hacer algo parecido, pero filtrando los productos que tienen descuento.

No tendría que modificar "ComponentsLaboratorio/EncabezadoSeccion.tsx" ni "ComponentsLaboratorio/TarjetaProducto.tsx", porque ambos reciben la información mediante sus propiedades y se pueden reutilizar en diferentes secciones.


### E1. Categoría incorrecta

En "App.tsx", línea 20, cambié temporalmente la categoría "bebida" por "bebidas".

Error de TypeScript: [Type '"bebidas"' is not assignable to type 'CategoriaProducto'. Did you mean '"bebida"'?ts(2820)
Producto.ts(8, 3): The expected type comes from property 'categoria' which is declared here on type 'Producto'
(property) categoria: CategoriaProducto].

El error aparece porque en "Producto.ts" definimos que las únicas categorías permitidas son "bebida", "comida" y "postre". TypeScript detecta que "bebidas" no pertenece a ese tipo.

Después corregí el valor y lo dejé nuevamente como "bebida".


### E2. Propiedad obligatoria faltante

En "App.tsx", eliminé temporalmente la propiedad "precio" del primer producto, que estaba en la línea 21.

Error de TypeScript: [Property 'precio' is missing in type '{ id: number; nombre: string; categoria: "bebida"; disponibilidad: "disponible"; }' but required in type 'Producto'.
Producto.ts(9, 3): 'precio' is declared here.].

El error aparece porque en "Producto.ts" la propiedad "precio" es obligatoria. En cambio, "descuento" y "nuevo" son opcionales porque tienen el símbolo "?". Por eso puedo omitir esas dos propiedades sin generar un error.

Después agregué nuevamente "precio: 35" para corregirlo.


### E3. Propiedad obligatoria de TarjetaProducto

En "App.tsx", línea 114, eliminé temporalmente la propiedad "textoAccion" de la primera tarjeta del menú.

Error de TypeScript: [Property 'textoAccion' is missing in type '{ key: number; producto: Producto; onAccion: () => void; precioFormateado: string; precioFinalFormateado: string; }' but required in type 'TarjetaProductoProps'.
TarjetaProducto.tsx(8, 3): 'textoAccion' is declared here.].

El error aparece porque en "ComponentsLaboratorio/TarjetaProducto.tsx" definimos "textoAccion" como una propiedad obligatoria de tipo "string". TypeScript comprueba que enviemos todas las propiedades requeridas al utilizar el componente.

Después agregué nuevamente "textoAccion" con el valor "Agregar" para corregir el error.

