DESPLIEGUE descargando ZIP:
1.Descomprimir archivo
2.En la carpeta raíz del archivo descomprimido nexus_main abrir la consola
3.Ejecutar docker-compose up --build -d
-Se debe desplegar front y back de la aplicación junto con la BBDD, esta se crea por defecto cargando 2 registros que se deben actualizar al abrir la página en el puerto localhost:4200.
-El servicio de catalogo es el que suministra la info de la BBDD a la vista puede tardar en levantar, se puede comprobar estado en http://localhost:4200/api/products.

DESPLIEGUE LOCAL en la máquina:
