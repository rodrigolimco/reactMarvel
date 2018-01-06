# Práctica React-native
## V KeepCoding Mobile Development Bootcamp
<br>
## Sinopsis
Apliación híbidra creada sobre React-native que obtiene sus datos del Marvel Developer API.

<br>

## Requisitos

### Obligatorios:
- La app deberá usar uno de los componentes de navegación mostrados en las
diapositivas del curso (Recomendado 'react-native-router-flux').

-  Deberá hacer uso de la librería Redux

- Pantalla con un listado FlatList y datos cargados desde el web services
sobre la temática elegida.

- Pantalla de vista detalle, al pulsar una celda iremos a su vista detalle,
que será otra pantalla con la vista individual del elemento de la lista elegido.

<br>
### Opcionales:

- El uso de este spinner en los tiempos de carga, que tendremos que
enlazar MANUALMENTE con nuestros proyectos nativos:
**<https://github.com/maxs15/react-native-spinkit>**.

- Un formulario de añadir personaje (aunque no esté conectado contra un webservice).

<br>


## Detalles implementación

- La aplicación utiliza dos módulos adicionales:
	- **React-native-image-picker**, para la gestión de las imágenes al momento de crear un nuevo personaje.
	- **React-native-spinkit**, se usa en la pantalla inicial para dar feedback al usuario cuando se lanza la aplicación. Éste componente es visible sólo mientras se están obteniendo datos del API; una vez finalizada la descarga, desaparece.

- Ejecutar el comando `npm install` para descargar las dependencias antes de iniciar la aplicación.

- No se ha generado una release para ningún OS, por lo que la apliación depende de un servidor de Node.  
Antes de inicar la aplicación, deberá ejecutarse el comando `npm start`.

- La aplicación funciona correctamente tanto en iOS como en Android.  

### Pantalla inicial
- Se muestran 4 endpoints: Characters, MyCharacters, Creators y Comics.


### Characters
- Este endpoint lleva a un listado que usa un scroll infinito donde se muestran todos los personajes obtenidos desde el Marvel Developer API.
- Al seleccionar cualquier personaje, se navega a una vista detalle del mismo, donde se puede ver información adicional sobre el mismo.

### My Characters
- Este endpoint es un listado de los personajes creados por el usuario.
- Cuenta con un botón 'Add' para que el usuario pueda agregar personajes manualmente.
- Este listado se almacena por separado, sólo está almacenado en memoria y no se persiste de ninguna manera.
- De igual manera, una vez creado el personaje, se puede acceder a una vista de detalle del mismo igual que en el listado de 'Characters'.

### Creators / Comics
- Estos endpoints no están disponibles ya que no están conectados al Marvel Developer API.
- Esto se ha implementado así deliberadamente.
