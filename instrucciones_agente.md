# Prompt / Instrucciones de Automatización para Agente de Código

## Objetivo
Ejecutar la práctica de control de versiones descrita a continuación, realizando modificaciones a la aplicación web base, gestionando la estructura de ramas y commits en Git, y preparando todo para el despliegue en GitHub Pages y la entrega en PDF.

---

## Parámetros del Proyecto
- **Nombre del Repositorio:** `versionamiento-<nombre>-<apellido>` *(reemplazar con los datos del alumno)*
- **Nombre de la Rama Secundaria:** `feature/personalizacion-ui`
- **Límite de Commits:** Entre 2 y 5 commits.
- **Fecha Límite:** 2 de Octubre, 11:59 p.m.

---

## Paso a Paso de Ejecución

### Paso 1: Configuración Inicial de Git y Repositorio
1. Asegurarse de que el directorio actual contenga el proyecto descomprimido de la aplicación web base.
2. Inicializar el repositorio Git si aún no existe:
   ```bash
   git init
   git branch -M main
   ```
3. Crear un commit inicial con el proyecto base:
   ```bash
   git add .
   git commit -m "chore: inicializar proyecto base"
   ```

---

### Paso 2: Creación y Cambio a Rama Secundaria
1. Crear y cambiar a la rama secundaria para el trabajo de UI/UX:
   ```bash
   git checkout -b feature/personalizacion-ui
   ```

---

### Paso 3: Modificaciones de Código (UI / Estilos / Identidad)
Realizar las siguientes modificaciones en el código fuente de la aplicación web:

1. **Paleta de colores:** Actualizar variables CSS o estilos para aplicar una nueva combinación de colores (por ejemplo, cambiar tonos principales a una paleta moderna/oscura o personalizada).
2. **Tipografía:** Importar y aplicar una nueva fuente (ejemplo: Google Fonts como *Inter*, *Roboto*, o *Poppins*).
3. **Elemento adicional de UI:** Agregar un elemento visual nuevo a la interfaz (por ejemplo: un banner, tarjeta informativa, pie de página o un botón flotante).
4. **Identidad del estudiante:** Insertar el nombre completo del estudiante o nombre de usuario visible en el encabezado (Header) o pie de página (Footer).

---

### Paso 4: Registro de Commits Estratégicos (Mínimo 2, Máximo 5)
Registrar los cambios en Git utilizando mensajes claros siguiendo la convención *Conventional Commits*:

1. **Commit 1 (Estilos y Tipografía):**
   ```bash
   git add .
   git commit -m "style: actualizar paleta de colores y tipografia principal"
   ```

2. **Commit 2 (Elementos UI e Identidad):**
   ```bash
   git add .
   git commit -m "feat: agregar componente visual y nombre del estudiante en el footer"
   ```

---

### Paso 5: Publicación a GitHub y Fusionado mediante Pull Request
1. Crear el repositorio remoto en GitHub mediante CLI o API con el nombre `versionamiento-<nombre>-<apellido>`.
2. Vincular el remoto y subir ambas ramas:
   ```bash
   git remote add origin https://github.com/<usuario>/versionamiento-<nombre>-<apellido>.git
   git push -u origin main
   git push -u origin feature/personalizacion-ui
   ```
3. Crear un **Pull Request (PR)** desde `feature/personalizacion-ui` hacia `main` con la descripción del trabajo.
4. Integrar (Merge) el Pull Request hacia la rama `main`.

---

### Paso 6: Configuración de GitHub Pages
1. Activar GitHub Pages desde la rama `main` (raíz `/` o `/docs` según corresponda la estructura del proyecto).
2. Obtener la URL pública de la aplicación desplegada (ejemplo: `https://<usuario>.github.io/versionamiento-<nombre>-<apellido>/`).

---

### Paso 7: Generación de Reporte PDF
Generar la información necesaria para incluir en el reporte final:
1. **Portada:** Datos de la materia, alumno, profesor y fecha.
2. **Procedimiento:** Resumen técnico explicativo paso a paso (creación de repo, checkout de rama, commits realizdos, Pull Request y despliegue).
3. **Enlaces obligatorios:**
   - Enlace al repositorio GitHub.
   - Enlace a la app activa en GitHub Pages.
4. **Conclusión:** Breve reflexión sobre la importancia del uso de ramas, PRs y despliegue continuo en el control de versiones.