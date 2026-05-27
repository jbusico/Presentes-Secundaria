# 📋 Presentismo Secundaria 2026

App web para registrar y ver estadísticas de asistencia de los 5 cursos.

## 🚀 Cómo usar

### En local (sin internet)
Doble clic en `index.html` → se abre en el navegador, listo.

### En GitHub Pages
1. Crear un repositorio en GitHub (puede ser privado o público)
2. Subir el archivo `index.html`
3. Ir a **Settings → Pages → Source: main branch → Save**
4. La URL quedará como `https://tu-usuario.github.io/nombre-repo/`

---

## 📱 Funciones

### Pestaña "Hoy"
- Navegá entre fechas con las flechas `‹ ›`
- La fecha de hoy se abre automáticamente
- Marcá cada alumno tocando los botones **P · A · J · T**
- "Marcar todos" para registrar toda la clase de un golpe y después corregir ausentes

### Pestaña "Tabla"
- Vista completa de todas las fechas en grilla
- Tocá cualquier celda para cambiar el estado
- La fecha de hoy aparece resaltada
- Deslizá horizontalmente para ver todas las fechas

### Pestaña "Estadísticas"
- Resumen del curso (% de asistencia general)
- Por alumno: barra de colores + porcentaje
- Ordenar por: N° de lista / Nombre / % Asistencia

---

## 🎨 Estados

| Símbolo | Estado       | Color  |
|---------|--------------|--------|
| **P**   | Presente     | 🟢 Verde  |
| **A**   | Ausente      | 🔴 Rojo   |
| **J**   | Justificado  | 🟡 Amarillo |
| **T**   | Tardanza     | 🔵 Azul   |

---

## 💾 Guardado de datos

Los datos se guardan automáticamente en el **navegador** (localStorage).

- **Exportar** → descarga un archivo `.json` de backup
- **Importar** → carga un backup guardado previamente

> ⚠️ Si limpiás el historial/caché del navegador, los datos se borran.
> Hacé backup con el botón "Exportar" regularmente.

---

## 👩‍🏫 Cursos incluidos

| Curso   | Alumnos | Clases |
|---------|---------|--------|
| 1° año  | 18      | 42     |
| 2° año  | 30      | 41     |
| 3° año  | 6       | 43     |
| 4° año  | 14      | 81     |
| 5° año  | 23      | 83     |
