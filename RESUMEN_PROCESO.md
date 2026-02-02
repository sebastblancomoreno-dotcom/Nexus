# Diario de Construcción: SynthNexus 🎹

Aquí tienes el resumen paso a paso de todo lo que hemos construido y configurado para levantar tu entorno de estudio Enterprise.

## 1. La Arquitectura (El Plano)
Diseñamos un sistema basado en **Microservicios** en lugar de una sola app gigante, para aprender cómo se comunican las piezas en el mundo real.

*   **Discovery Service (Eureka):** Es el "listín telefónico". Todos los servicios se apuntan aquí para que los demás sepan dónde encontrarlos.
*   **API Gateway:** Es el "portero". El Frontend (la web) solo habla con él, y él redirige la petición al microservicio correcto.
*   **Catalog Service:** Es el "almacén". Gestiona los productos y habla con la base de datos PostgreSQL.
*   **Frontend:** La tienda visual hecha en Angular.

## 2. Infraestructura (Los Cimientos)
Usamos **Docker** para no tener que instalar bases de datos sueltas en tu Windows.
*   Creamos un `docker-compose.yml`.
*   Al lanzar `docker compose up`, se descargan y arrancan un **PostgreSQL** y un **MongoDB** automáticamente.

**🔧 Problema que arreglamos:**
Tu Windows no encontraba el comando `docker`. Tuvimos que buscar la ruta real del ejecutable y añadirla al "Path" del sistema.

## 3. El Backend (Java Spring Boot)
Crearmos 3 proyectos Java independientes:

1.  **Discovery:** Solo configuración estándar de Eureka Server.
2.  **Gateway:**
    *   Configuramos una ruta: "Si alguien pide `/api/products`, mándalo al `CATALOG-SERVICE`".
    *   **🔧 Problema DNS:** Netty (el motor del Gateway) fallaba al intentar resolver el nombre de tu PC (`DESKTOP-...`).
    *   **Solución:** Configuramos `prefer-ip-address: true` y `hostname: 127.0.0.1` para que usen IPs numéricas (localhost) en lugar de nombres complejos.
3.  **Catalog:**
    *   Creamos la entidad `Product` (Nombre, Precio, Marca...).
    *   Añadimos datos de prueba en `data.sql` (Korg Minilogue, Moog Matriarch).
    *   **🔧 Problema Datos:** Spring Boot 3 ignoraba el script de datos. Forzamos su carga con `spring.sql.init.mode=always`.
    *   **🔧 Problema Java:** Tu sistema usaba Java 8 por defecto. Tuvimos que configurar la variable `JAVA_HOME` para usar Java 21.

## 4. El Frontend (Angular)
*   Creamos un proyecto Angular 17+ moderno ("Standalone", sin módulos antiguos).
*   Instalamos **TailwindCSS** para diseñar rápido sin escribir CSS a mano.
*   Creamos un **Proxy (`proxy.conf.json`)**: Esto engaña al navegador para que crea que el Backend está en el mismo puerto que el Frontend, evitando problemas de seguridad (CORS).

## 🚀 Cómo arrancar todo (Resumen Rápido)

Si mañana reinicias el PC, estos son los pasos "limpios":

1.  **Abre Docker Desktop** (espera a la luz verde).
2.  **Abre Antigravity/Terminal**.
3.  **Arranca la Infra:** `docker compose up -d postgres mongodb`
4.  **Arranca el Backend (3 terminales):**
    *   `cd backend/discovery-service` -> `mvn spring-boot:run`
    *   `cd backend/api-gateway` -> `mvn spring-boot:run`
    *   `cd backend/catalog-service` -> `mvn spring-boot:run`
    *   *(Recuerda el truco de `$env:JAVA_HOME` si te da error de Java).*
5.  **Arranca el Frontend:**
    *   `cd frontend` -> `npm start`
6.  **¡A disfrutar!** Entra en `http://localhost:4200`.

Este documento se queda guardado en tu carpeta del proyecto como `RESUMEN_PROCESO.md` para que lo tengas siempre a mano. ¡Buen estudio!
