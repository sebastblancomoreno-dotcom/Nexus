DESPLIEGUE descargando ZIP:
1.Descomprimir archivo
2.En la carpeta raíz del proyecto abrir consola
3.*** Ejecutar docker-compose up --build -d ***
-Se debe desplegar front y back de la aplicación junto con la BBDD, esta se crea por defecto cargando todo el contenido por defecto.
-El servicio de catalogo es el que suministra la info de la BBDD a la vista puede tardar en levantar, se puede comprobar estado en http://localhost:4200/api/products:
Se ha añadido un spinner de carga que se muestra cuando se levanta la aplicación y carga el contenido una vez se levanta y queda operativo el servicio de catalogo.


