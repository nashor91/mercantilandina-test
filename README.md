# Onboarding test de Mercantil Andina
Proyecto challenge de Mercantil Andina con onboarding de usuarios. En el mismo, el usuario debe ingresar manualmente datos personales, datos del vehículo a asegurar y seleccionar un plan de cobertura que se adapte a sus necesidades.
El proyecto fue desarrollado con:

- Angular 11
- Bootstrap 5

## Distribución de módulos
Se dividió el proyecto en dos módulos, uno dedicado a aquellos componentes que son compartidos dentro de la aplicación, y otro con componentes propios de negocio.
## Distribución de servicios
Se dividió el proyecto en cinco servicios, de los cuales tres se enfocan principalmente en obtener datos de diferentes fuentes, uno de ellos funciona como un almacenador de datos de la sesión, y un último servicio funciona como un helper utilitario con diversas funciones.
## Módulos
- **Onboarding:** Módulo encargado de manejar toda la lógica de negocio relacionada al alta de un usuario en la aplicación.
- **Shared:** Módulo encargado de manejar toda la lógica de los componentes compartidos en la aplicación.
## Componentes
- **PersonalInfoComponent:** Componente encargado de la carga de datos personales del usuario. Es el primer paso del flujo.
- **VehicleInfoComponent:** Componente encargado de la carga de datos del vehículo del usuario. Es el segundo paso del flujo.
- **InsuranceCoverageComponent:** Componente encargado de la selección de un plan de cobertura para el vehículo del usuario. Es el tercer paso del flujo.
- **ReviewInfoComponent:** Componente encargado de mostrar al usuario la información seleccionada en los pasos anteriores. Es el cuarto paso del flujo.
- **FinishStepComponent:** Componente encargado de simular una respuesta correcta del alta de un usuario. Es el quinto y último paso del flujo.
- **NavbarComponent:** Componente encargado de mostrar el header de la aplicación. Presenta el branding de la empresa y colores.
- **FooterComponent:** Componente encargado de mostrar el footer de la aplicación. Presenta el links dummies y colores.
## Servicios
- **UtilsFunctionsService:** Servicio encargado de presentar funciones comunes a los distintos componentes de la aplicación.
- **DataService:** Servicio encargado de presentar getters y setters para el almacenamiento de los pasos de la aplicación y de los datos cargados por el usuario.
- **GeorefService:** Servicio encargado de exponer funciones para obtener datos de la API de Provincias y Municipios.
- **MercantilApiService:** Servicio encargado de exponer funciones para obtener datos de la API de Marcas, Modelos y Versiones de Mercantil Andina.
- **MercantilMockApiService:** Servicio encargado de exponer funciones para obtener datos del Mock de Usuarios y de Planes de Coberturas de Mercantil Andina.
## Interfaces
Se generaron interfaces a través de la aplicación **QuickType** con la respuesta de los servicios de Provincias, Municipios, Marcas, Versiones y Coberturas.
