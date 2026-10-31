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

Cuando el usuario presiona "Pedir otra vez", el botón utiliza la propiedad "onPress" para ejecutar la función recibida ("ComponentsLaboratorio/BotonAccion.tsx", líneas 34-36). En "TarjetaProducto.tsx", la propiedad "onAccion" permite pasar esa función al botón.

La función que muestra el mensaje "Pedido rápido" estará definida en "App.tsx", por lo que la tarjeta se puede reutilizar sin cambiar su código.

**Líneas pendientes:* las líneas exactas de "TarjetaProducto.tsx" y "App.tsx" cuando terminemos la integración.

### P3. Cálculo del descuento y formato del precio

El precio final con descuento se calculará en "App.tsx", donde también tendremos una función para mostrar los precios en lempiras con dos decimales.

En "TarjetaProducto.tsx", las propiedades "precioFormateado" y "precioFinalFormateado" reciben esos valores para mostrarlos en pantalla. Si otra sede utiliza otra moneda, solamente tendríamos que modificar la función de formato en "App.tsx".

Si el cálculo o el formato estuvieran escritos dentro de "TarjetaProducto.tsx", tendríamos que modificar también ese componente cuando cambiara la moneda o la forma de calcular los descuentos.

**Líneas pendientes:** se agregaran posteriormente las líneas exactas del cálculo y formato en "App.tsx", y las líneas correspondientes de "TarjetaProducto.tsx".
