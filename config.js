// ================================================================
//  CONFIGURACIÓN ANUAL — EDITAR ESTE ARCHIVO PARA CADA NUEVO AÑO
// ================================================================
//
//  INSTRUCCIONES PARA ACTUALIZAR EL SISTEMA CADA AÑO:
//
//  1. Cambiar el número de AÑO (línea "year:")
//
//  2. Actualizar ALUMNOS por curso:
//     - Agregar alumno: escribir el nombre entre comillas con coma al final
//     - Quitar alumno:  borrar la línea completa
//     - El orden determina el número de lista
//
//  3. Actualizar FECHAS de clases:
//     - Formato: "D-mes"  (ej: "3-mar", "15-sept", "1-dic")
//     - Meses:   ene, feb, mar, abr, may, jun, jul, ago, sept, oct, nov, dic
//     - Para cursos de una vez por semana: ~42 fechas (mar → dic)
//     - Para cursos de dos veces por semana: ~83 fechas
//
//  4. Subir el archivo config.js a GitHub (igual que index.html)
//
//  NOTA: Al cambiar el año, los datos del año anterior se conservan
//  automáticamente en el navegador (quedan guardados por separado).
//
// ================================================================

const SCHOOL_CONFIG = {

  // ── AÑO LECTIVO ──────────────────────────────────────────────
  year: 2026,

  // ── CURSOS ───────────────────────────────────────────────────
  // Podés agregar o quitar cursos según corresponda.
  // El nombre entre comillas es lo que aparece en la app.

  courses: {

    // ------------------------------------------------------------
    "1° año": {
    // ------------------------------------------------------------
      // Lista de alumnos — uno por línea, entre comillas, con coma al final
      students: [
        "ARANGIO FRIXIONE Lucía María",
        "ASTA ALASTRE Jonathan Alessandro",
        "BASSO ZUNINO María Julieta",
        "BEDETTI Emilia",
        "BEVACQUA Jazmín Francesca",
        "BRATIG Esmeralda",
        "CENTURIÓN KOFLER Camila Fernanda",
        "DUARTE SAENZ Luciana Pilar",
        "FEDERICO Giovanni",
        "FLEMING Ingrid",
        "FORMOSO MACIAS Victoria",
        "GUZMAN DAVALOS Esmeralda Vanina",
        "LOMBARDI Francesca Oriana",
        "MAUAS Luciano Sebastián",
        "ONZARI Guadalupe Azul",
        "POLITE LUCCA Josefina",
        "REQUENA GONZALEZ Emilia",
        "RODRÍGUEZ PLANCHART Angel de Jesús",
      ],
      // Fechas de clase del año — reemplazar por las del nuevo ciclo lectivo
      dates: [
        "3-mar","10-mar","17-mar","24-mar","31-mar",
        "7-abr","14-abr","21-abr","28-abr",
        "5-may","12-may","19-may","26-may",
        "2-jun","9-jun","16-jun","23-jun","30-jun",
        "7-jul","14-jul","21-jul","28-jul",
        "4-ago","11-ago","18-ago","25-ago",
        "1-sept","8-sept","15-sept","22-sept","29-sept",
        "6-oct","13-oct","20-oct","27-oct",
        "3-nov","10-nov","17-nov","24-nov",
        "1-dic","8-dic","15-dic",
      ],
    },

    // ------------------------------------------------------------
    "2° año": {
    // ------------------------------------------------------------
      students: [
        "ÁLVAREZ BRITO, Crysmar Antonella",
        "BALARI, Juan Cruz",
        "BALARI, Mía Rocío",
        "BAS FRAGALÁ, Guadalupe",
        "CABAÑES, Sofía",
        "COLUCCIA BERNÁRDES, Sofía Lara",
        "CHELALA, Luis Humberto",
        "DIMOULAS, Máxima",
        "DRAZER SORDI, Alma",
        "ENGLER, Amanda Gabriela",
        "ESPINOSA, Lara Pilar",
        "FERNÁNDEZ GAUNA, Melina",
        "FONSECA PRADA, Juana",
        "GARCÍA SANCHEZ, Matías Gerónimo",
        "GEORGIETT, Liz Victoria",
        "GÓNGORA, Marcos Pier Gael",
        "GONZALEZ, Agustín",
        "GUTIERREZ ROCA, Rosario",
        "HERRERA LUNA, Andrea Camila",
        "HERRERA HERRERA, Sheryl Stefanía",
        "LADISLAO, Nicolás Guillermo",
        "MANFREDINI DEGUI, Joaquina",
        "MANSILLA, Pedro",
        "MARTÍNEZ ARÉVALO, Bautista",
        "NOVOA GIGENA, Santiago",
        "PIETRAGALLA, Isabella",
        "PRIMAVERA, Ramiro",
        "QUIROGA DI LORENZI, Carolina",
        "RUGGERI, Karen",
        "ZOTELO, Santiago Renzo",
      ],
      dates: [
        "4-mar","11-mar","18-mar","25-mar",
        "1-abr","8-abr","15-abr","22-abr","29-abr",
        "6-may","13-may","20-may","27-may",
        "3-jun","10-jun","17-jun","24-jun",
        "1-jul","8-jul","15-jul","22-jul","29-jul",
        "5-ago","12-ago","19-ago","26-ago",
        "2-sept","9-sept","16-sept","23-sept","30-sept",
        "7-oct","14-oct","21-oct","28-oct",
        "4-nov","11-nov","18-nov","25-nov",
        "2-dic","9-dic",
      ],
    },

    // ------------------------------------------------------------
    "3° año": {
    // ------------------------------------------------------------
      students: [
        "ACOSTA, Juan Cruz",
        "BACIGALUPE, Rosario",
        "BENITEZ AGUINALDE, Victoria Valentina",
        "BUSTO JACOD, Rocío Micaela",
        "DE LA TORRE CANDA, Juan Ignacio",
        "FAYAD, Delfina",
        "JANCIC, Sofía",
        "LEÓN BRICEÑO, Katherine Alessandra",
        "LEON SAONA, Sebastián",
        "MAURO, Morena Lourdes",
        "MINOTTI ALVAREZ, Martina Jazmín",
        "NIEVES PERINI, Valentín",
        "PANZERINI, Ramiro",
        "PUPPO SUERO, Genaro",
        "RAVERA, Santiago",
        "SILVERIO REYES, Enzo Martín",
        "TEIXIDO, Evan",
        "UNCILLA, Santino",
        "VISENTINI, Federico Andrés",
        "YANG, Antonio",
      ],
      dates: [
        "5-mar","12-mar","19-mar","26-mar",
        "2-abr","9-abr","16-abr","23-abr","30-abr",
        "7-may","14-may","21-may","28-may",
        "4-jun","11-jun","18-jun","25-jun",
        "2-jul","9-jul","16-jul","23-jul","30-jul",
        "6-ago","13-ago","20-ago","27-ago",
        "3-sept","10-sept","17-sept","24-sept",
        "1-oct","8-oct","15-oct","22-oct","29-oct",
        "5-nov","12-nov","19-nov","26-nov",
        "3-dic","10-dic","17-dic",
      ],
    },

    // ------------------------------------------------------------
    "4° año": {
    // ------------------------------------------------------------
      // Este curso tiene clases 2 veces por semana
      students: [
        "AREAN MARRA Gael",
        "BARBONA Victoria",
        "CAMARASA Simona",
        "COLUCCIA BERNARDEZ Mateo",
        "DELISANTI POMA Chiara",
        "GARCÍA HADAD Antonela",
        "GRIMAUX Marcos",
        "GRIMAUX Rómulo",
        "GUERRERO VIVAS Sofia",
        "LA GIGLIA BOGGIANO Juan Cruz",
        "LOMBARDI ROMANO Ulysses",
        "MASCARI Tiziano",
        "PEDERNERA Lara",
        "ROSITO Catalina",
      ],
      dates: [
        "3-mar","5-mar","10-mar","12-mar","17-mar","19-mar","24-mar","26-mar","31-mar",
        "2-abr","7-abr","9-abr","14-abr","16-abr","21-abr","23-abr","28-abr","30-abr",
        "5-may","7-may","12-may","14-may","19-may","21-may","26-may","28-may",
        "2-jun","4-jun","9-jun","11-jun","16-jun","18-jun","23-jun","25-jun","30-jun",
        "2-jul","7-jul","9-jul","14-jul","16-jul","21-jul","23-jul","28-jul","30-jul",
        "4-ago","6-ago","11-ago","13-ago","18-ago","20-ago","25-ago","27-ago",
        "1-sept","3-sept","8-sept","10-sept","15-sept","17-sept","22-sept","24-sept","29-sept",
        "1-oct","6-oct","8-oct","13-oct","15-oct","20-oct","22-oct","27-oct","29-oct",
        "3-nov","5-nov","10-nov","12-nov","17-nov","19-nov","24-nov","26-nov",
        "1-dic","3-dic",
      ],
    },

    // ------------------------------------------------------------
    "5° año": {
    // ------------------------------------------------------------
      // Este curso tiene clases 2 veces por semana
      students: [
        "ABALLAY Matias Martin",
        "BASSO ZUNINO María Eugenia",
        "CAMPESI BIANCHI Matías",
        "CAMURATI Delfina",
        "CASTRO Emiliano",
        "DE LA TORRE CANDA Bautista",
        "DÍAZ GONZÁLEZ Tatiana Belén",
        "DUARTE PADRÓN Mathias",
        "ENGLER Dafne Eleonora",
        "GAMARRA GASSER Marianela",
        "GENISE Felipe",
        "GRITTA FIDALGO Olivia",
        "JANCIC ANTELO Emma",
        "LAMARQUE SÁENZ Débora Sofía",
        "MENDOZA CARRIZO Lautaro",
        "PEZZELLA Gennaro",
        "PIETRAGALLA Gina",
        "QUIROGA DELORENZI Victoria",
        "ROJAS Morena",
        "SAVANT Bautista Rene",
        "SEMISA Bautista",
        "SOSA Melody Antonella",
        "VERDI Lourdes",
      ],
      dates: [
        "4-mar","5-mar","11-mar","12-mar","18-mar","19-mar","25-mar","26-mar",
        "1-abr","2-abr","8-abr","9-abr","15-abr","16-abr","22-abr","23-abr","29-abr","30-abr",
        "6-may","7-may","13-may","14-may","20-may","21-may","27-may","28-may",
        "3-jun","4-jun","10-jun","11-jun","17-jun","18-jun","24-jun","25-jun",
        "1-jul","2-jul","8-jul","9-jul","15-jul","16-jul","22-jul","23-jul","29-jul","30-jul",
        "5-ago","6-ago","12-ago","13-ago","19-ago","20-ago","26-ago","27-ago",
        "2-sept","3-sept","9-sept","10-sept","16-sept","17-sept","23-sept","24-sept","30-sept",
        "1-oct","7-oct","8-oct","14-oct","15-oct","21-oct","22-oct","28-oct","29-oct",
        "4-nov","5-nov","11-nov","12-nov","18-nov","19-nov","25-nov","26-nov",
        "2-dic","3-dic","9-dic","10-dic",
      ],
    },

  }, // fin courses
}; // fin SCHOOL_CONFIG
