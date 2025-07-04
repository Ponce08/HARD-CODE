¿Qué Son Los comandos Linux?
Los comandos de Linux te permiten controlar tu sistema desde la interfaz de línea de comandos (CLI) en lugar de utilizar tu ratón o trackpad. Son instrucciones de texto introducidas en el terminal para indicarle a tu sistema exactamente qué hacer.

Los comandos que ingreses en el terminal de Linux distinguen entre mayúsculas y minúsculas y siguen una sintaxis como “comando -opciones argumentos“. Puedes combinarlos para tareas complejas mediante pipelines y redirecciones.

Algunas cosas clave para saber sobre los comandos de Linux:

Son sensibles a mayúsculas y minúsculas; por ejemplo, “ls” y “LS” significan cosas diferentes.
Siguen una sintaxis específica como “comando -opciones argumentos“.
Se pueden combinar para realizar operaciones complejas mediante pipelines y redirecciones.
Te proporcionan un control detallado sobre tu sistema, algo difícil de lograr con interfaces gráficas.
Te permiten automatizar tareas mediante scripts de shell y procesamiento por lotes.
Se pueden utilizar para acceder a recursos del sistema como el sistema de archivos, red, memoria y CPU.
Forman la base de la interacción con servidores y sistemas operativos Linux.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
1. ls – Listar Contenidos de Directorio

Algunas de las opciones más útiles de ls incluyen:
-l – Muestra los resultados en formato largo, mostrando detalles adicionales como permisos, propiedad, tamaño y fecha de modificación para cada archivo y directorio.
-a – Muestra archivos y directorios ocultos que comienzan con . además de los elementos no ocultos.
-R – Lista de forma recursiva todo el contenido de los subdirectorios, descendiendo indefinidamente en carpetas secundarias.
-S – Ordena los resultados por tamaño de archivo, comenzando por el más grande.
-t – Ordena por marca de tiempo, el más reciente primero.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------

2. cd – Cambiar de Directorio
El comando cd se utiliza para navegar entre directorios. Te permite moverte desde el directorio de trabajo actual a una nueva ubicación en el sistema de archivos.

Cuando ejecutas el comando cd por sí mismo, te llevará al directorio de inicio. También puedes pasar una ruta específica para cambiar a ella. Por ejemplo:

cd /usr/local – Cambia al directorio /usr/local 
cd .. – Te mueve un nivel atrás hacia el directorio principal 
cd ~/pictures – Cambia a la carpeta pictures en tu directorio de inicio
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
3. mkdir – Crear un Nuevo Directorio
El comando mkdir te permite crear una nueva carpeta. Simplemente, específicas el nombre del directorio a crear.

Sintaxis:

mkdir [opción] <directorio>

Esto creará un directorio llamado por ejemplo “nuevoproyecto” en el directorio de trabajo actual.

Algunas opciones útiles de mkdir:

-p – Crea directorios principales de forma recursiva según sea necesario.
-v – Muestra un resultado detallado que indica los directorios creados.
Ejemplo:

mkdir -v ~/project/code
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
4. rmdir – Eliminar Directorio
Para eliminar un directorio vacío, utiliza el comando rmdir. Ten en cuenta que rmdir solo puede eliminar directorios vacíos, y necesitaremos el comando rm para eliminar los que tengan algún contenido.

Sintaxis:

rmdir [opciones] <directorio>

Algunas opciones para rmdir incluyen:

-v – Muestra un resultado detallada al eliminar directorios.
-p – Elimina directorios principales de forma recursiva según sea necesario.
Ejemplo:

rmdir -v ~/project/code
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
5. touch – Crear Un Nuevo Archivo Vacío

El comando touch se utiliza para crear instantáneamente un nuevo archivo vacío. Esto es útil cuando necesitas un archivo vacío para llenarlo con datos más tarde.

La sintaxis básica de touch es:

touch [opciones] /nombredearchivo

Algunas opciones útiles para touch incluyen:

-c – No crea el archivo si ya existe. Evita sobrescribir archivos existentes accidentalmente.
-m – En lugar de crear un nuevo archivo, actualiza la marca de tiempo en un archivo existente. Esto se puede usar para cambiar la hora de modificación
Por Ejemplo:

touch /home/user/nuevoarchivo.txt
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
6. cp – Copiar Archivos y Directorios
El comando cp copia archivos o directorios de una ubicación a otra. Requiere pasar una ruta de origen y un destino.

La sintaxis básica de cp es:

cp [opciones] /origen/ /destino/

Algunas opciones útiles de cp:

-r – Copia directorios de forma recursiva, descendiendo a subdirectorios para copiar su contenido también. 
-i – Solicita confirmación antes de sobrescribir archivos existentes en el destino. Evita sobrescribir datos accidentalmente.
-v – Muestra un resultado detallado que indica los detalles de cada archivo mientras se copia. Útil para confirmar exactamente lo que se copió.
Por Ejemplo:

cp -r /home/user/documents /backups/

Esto copiaría de forma recursiva el directorio /home/user/documents y todo su contenido al directorio /backups/. La opción -r es necesaria para copiar directorios.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
7. mv – Mover o Renombrar Archivos y Directorios
El comando mv se utiliza para mover archivos o directorios a una ubicación diferente o renombrarlos. A diferencia del comando anterior, los archivos de la ruta de origen se eliminan después de haber sido movidos al destino.

También puedes usar el comando mv para renombrar archivos, ya que solo necesitas cambiar las rutas de origen y destino al antiguo y nuevo nombre.

La sintaxis de mv es:

mv [opciones] /origen/ /destino/

Opciones útiles de mv:

-i – Solicitar antes de sobrescribir archivos existentes en la ubicación de destino. Esto evita sobrescribir datos accidentalmente.
-v – Producir un resultado detallado que muestre cada archivo o directorio a medida que se mueve. Útil para confirmar exactamente lo que se movió.
Por Ejemplo:

mv ~/folder1 /tmp/folder1

Esto moverá folder1 desde el directorio de inicio (~) al directorio /tmp/. Echemos un vistazo a otro ejemplo de cómo usar el comando mv para renombrar archivos.

mv folder1 folder2

Aquí, “folder1” es renombrado a “folder2.” 
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
8. rm – Eliminar Archivos y Directorios
El comando rm elimina archivos y directorios. Úsalo con precaución porque los archivos y directorios eliminados no se pueden recuperar.

La Sintaxis es:

rm [opciones] /nombre/

Opciones útiles de rm:

-r – Elimina directorios de forma recursiva, incluyendo todos los contenidos dentro de ellos. Necesario al eliminar directorios.
-f – Forzar la eliminación y suprimir todas las solicitudes de confirmación. ¡Peligroso sin posibilidad de recuperación!
-i – Solicitar confirmación antes de eliminar cada archivo o directorio. Proporciona seguridad contra borrado accidental. 
Por Ejemplo:

rm -rf temp

Esto eliminará de forma recursiva el directorio “temp” y todos sus contenidos sin solicitar confirmaciones (-f anula las confirmaciones).

Nota: El comando rm borra permanentemente archivos y carpetas, así que úsalo con extrema precaución. Si se usa con privilegios de sudo, también podrías eliminar por completo el directorio raíz y Linux dejará de funcionar después de reiniciar tu computadora.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
🧠 Sintaxis básica de find:

find [ruta] [condiciones] [acciones]

✅ Ejemplos comunes
1. 🔍 Buscar todos los archivos en un directorio

find .

Busca todo (archivos y carpetas) desde el directorio actual (.) hacia abajo.

2. 📁 Buscar por nombre de archivo

find . -name archivo.txt

Busca archivo.txt en el directorio actual y subdirectorios.

🔁 Para que ignore mayúsculas/minúsculas:

find . -iname archivo.txt

3. 📄 Buscar todos los archivos con una extensión específica

find . -name "*.js"

Encuentra todos los archivos .js (JavaScript).

4. 🧱 Buscar solo directorios

find . -type d -name "mi_carpeta"

5. 📂 Buscar solo archivos

find . -type f -name "*.txt"

6. 📅 Buscar archivos por fecha de modificación

find . -mtime -1

Archivos modificados en las últimas 24 horas.

-mtime -N → modificados hace menos de N días

-mtime +N → modificados hace más de N días

7. 📏 Buscar archivos por tamaño

find . -size +10M
Archivos con más de 10 megabytes.

Ejemplo:


find . -size +1G
Archivos con más de 1 GB.

8. 🔧 Ejecutar una acción sobre los archivos encontrados

find . -name "*.log" -exec rm {} \;

Encuentra todos los .log y los elimina.

-exec → ejecuta un comando para cada archivo encontrado.
{} → se reemplaza por el nombre del archivo encontrado.
\; → finaliza el comando -exec.

9. 🪄 Buscar archivos vacíos

find . -type f -empty

🧪 Práctica avanzada
🔁 Buscar y mover archivos:

find . -name "*.png" -exec mv {} /ruta/destino/ \;

🔁 Buscar y copiar:

find . -name "*.csv" -exec cp {} /ruta/destino/ \;

📝 Consejito
Si tienes problemas con espacios en los nombres de archivos, puedes usar find junto con xargs o -print0 y -0:

find . -name "*.mp3" -print0 | xargs -0 rm
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
10. du – Estimar el Uso del Espacio de un Archivo
El comando du mide el uso del espacio en disco para un directorio dado. Cuando se usa sin opciones, muestra el uso del disco para el directorio de trabajo actual.

La Sintaxis de du Es:

du [opciones] [ruta]

Opciones útiles de du:

-h –  Muestra los tamaños de archivo en un formato fácil de leer para humanos, como K para kilobytes en lugar de un recuento de bytes. Mucho más fácil de analizar.
-s – Muestra solo el tamaño total para un directorio, en lugar de enumerar cada subdirectorio y archivo. Bueno para resúmenes.
-a – Muestra tamaños individuales de archivos además de totales. Ayuda a identificar archivos grandes.
Por Ejemplo:

du -sh pictures

Esto imprimirá un tamaño total fácil de leer para el directorio “pictures.”

El comando du es útil para analizar el uso del espacio en disco de un árbol de directorios e identificar archivos que consumen espacio en exceso.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
🧠 ¿Qué hace grep?
Busca líneas que coincidan con un patrón (texto, palabra, expresión regular) dentro de uno o más archivos.

🔧 Sintaxis básica:

grep [opciones] "patrón" [archivo(s)]

✅ Ejemplos comunes
1. 🔍 Buscar una palabra en un archivo

grep "error" archivo.txt

Busca todas las líneas que contengan "error" en archivo.txt.

2. 📁 Buscar recursivamente en todos los archivos de un directorio

grep -r "password" .

Busca la palabra "password" en todos los archivos dentro del directorio actual y subdirectorios.

3. 🔁 Buscar sin distinguir mayúsculas/minúsculas

grep -i "usuario" archivo.txt

Encuentra "Usuario", "usuario", "USUARIO", etc.

4. 📄 Mostrar el número de línea donde aparece

grep -n "token" archivo.txt

Añade el número de línea antes del resultado.

5. 📂 Buscar en todos los archivos .js

grep "console.log" *.js

6. ❌ Mostrar líneas que NO contienen el patrón

grep -v "DEBUG" archivo.txt

7. 🔢 Contar cuántas veces aparece un patrón

grep -c "404" log.txt

8. 🧾 Buscar múltiples patrones

grep -E "error|fail|fatal" archivo.txt

-E permite usar expresiones regulares extendidas (| = “o”).

9. 📜 Buscar palabra exacta

grep -w "root" archivo.txt

Evita resultados como "rooted" o "superroot".

10. 🎯 Buscar y resaltar coincidencias
Muchos sistemas ya lo hacen por defecto, pero puedes forzarlo con:


grep --color "clave" archivo.txt

🛠️ Combinar con otros comandos
🔗 Usar con cat o ps:

cat archivo.txt | grep "error"

ps aux | grep "node"

💡 Tip: Buscar en todos los archivos de un proyecto

grep -rnw '.' -e 'funcionX'

-r = recursivo

-n = número de línea

-w = coincidencia exacta de palabra

-e = patrón de búsqueda
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
🧠 ¿Qué es awk?
Es un lenguaje de procesamiento de texto que lee línea por línea, divide cada línea en campos (columnas) y permite aplicar acciones a esos campos.

🧾 Sintaxis básica:

awk 'condición {acción}' archivo
Por defecto, los campos se separan por espacios o tabulaciones.

$1 = primer campo
$2 = segundo campo
$0 = línea completa

✅ Ejemplos prácticos
1. 🪪 Imprimir una columna específica

awk '{print $1}' archivo.txt

Muestra la primera columna de cada línea.

2. 📊 Imprimir varias columnas

awk '{print $1, $3}' archivo.txt

3. 🧪 Filtrar líneas por valor

awk '$3 > 50 {print $1, $3}' archivo.txt

Muestra las filas donde la columna 3 es mayor que 50.

4. 🧹 Eliminar encabezado y procesar datos

awk 'NR > 1 {print $1, $2}' archivo.csv

NR es el número de línea.

Esto omite la primera línea (títulos).

5. 🧮 Suma de valores

awk '{suma += $2} END {print "Total:", suma}' archivo.txt

Suma todos los valores de la columna 2.

6. 📂 Cambiar separador de campo (por coma, CSV por ejemplo)

awk -F',' '{print $1, $3}' archivo.csv

-F',' indica que las columnas están separadas por comas.

7. 🔧 Separar por otro delimitador (como |)

awk -F'|' '{print $2}' archivo.log

8. 📏 Contar filas que cumplan una condición

awk '$2 == "activo" {count++} END {print count}' usuarios.txt

9. 🎨 Formato personalizado

awk '{printf "Usuario: %s, Edad: %d\n", $1, $2}' archivo.txt

🔄 Combinar con otros comandos
Buscar procesos de Node.js:

ps aux | grep node | awk '{print $2, $11}'

Leer logs filtrando por fecha:

cat access.log | awk '$4 ~ /20\/Jun\/2025/' 

🧪 ¿Quieres probar con un ejemplo real?
Supongamos que tienes este archivo usuarios.txt:

Juan 25 activo
Ana 30 inactivo
Luis 22 activo
Puedes hacer:

awk '$3 == "activo" {print $1, "está activo"}' usuarios.txt

Salida:
Juan está activo
Luis está activo
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------

