# Block de notas con React

Para instalacion de las dependencias 
- npm install

Para ejecución 
- npm run dev

# Conexión con el servicio web.

Utilizar fetch para realizar las solicitudes HTTP al servidor (get, post)

El sistema utiliza el siguiente codigo para hacer las solicitudes:
- https://github.com/Fernant00/MERN-CRUD-AUTH.git

Para instalacion de las dependencias 
- npm install

Para ejecución 
- node src/app.js

# Descripción del proyecto (estructura y uso del proyecto)

Mi proyecto es un bloc de notas, cuenta con una pantalla principal donde se mostrara todas las notas realizadas y otra donde lo mandara a un formulario para llenar la nota.

Entre los usos que tiene mi proyecto es la organizacion, asi como el guardado de informacion para un mejor manejo de la informacion y recopilacion.

# Descripción de las pruebas y cómo ejecutarlas

El proyecto tiene una prueba de renderizado para el formulario

Para ejecutar las pruebas solo es necesario:
- npm run test

- screen.debug(): Imprime el DOM renderizado en la consola para depuración.
- expect(screen.getByText(/Registrar nota/i)).toBeInTheDocument(): Verifica que el texto "Registrar nota" esté presente en el documento.

- expect(screen.getByPlaceholderText(/Escribe el titulo/i)).toBeInTheDocument(): Verifica que el input con el placeholder "Escribe el titulo" esté presente en el documento.

- expect(screen.getByPlaceholderText(/Escribe la descripcion/i)).toBeInTheDocument(): Verifica que el textarea con el placeholder "Escribe la descripcion" esté presente en el documento.

- expect(screen.getByText(/Guardar/i)).toBeInTheDocument(): Verifica que el botón con el texto "Guardar" esté presente en el documento.

# Estructura

Contexto
- El proyecto utiliza el contexto de React para manejar el estado global de las notas. El contexto se define en BlocContext.jsx.

Componentes
- BlockCard: Componente para mostrar una nota individual.
- BlockForm: Componente para crear una nueva nota.
- BlockList: Componente para listar todas las notas.