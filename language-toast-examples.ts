// EJEMPLO DE FUNCIONAMIENTO CORRECTO DEL TOAST DE IDIOMA

// CASO 1: Usuario en Inglaterra con navegador en inglés, pero tiene español seleccionado
// Current Lang: es (español)
// Detected Lang: en (inglés)
// Resultado: El toast debe estar COMPLETAMENTE en INGLÉS

// Mensaje: "Would you prefer to view in English?"
// Botón principal: "Yes, switch to English"
// Botón cerrar: "No, thanks"

// CASO 2: Usuario en España con navegador en español, pero tiene inglés seleccionado  
// Current Lang: en (inglés)
// Detected Lang: es (español)
// Resultado: El toast debe estar COMPLETAMENTE en ESPAÑOL

// Mensaje: "¿Prefieres ver la web en Español?"
// Botón principal: "Sí, cambiar a Español"
// Botón cerrar: "No, gracias"

// CASO 3: Usuario en Rusia con navegador en ruso, pero tiene inglés seleccionado
// Current Lang: en (inglés) 
// Detected Lang: ru (ruso)
// Resultado: El toast debe estar COMPLETAMENTE en RUSO

// Mensaje: "Хотите посмотреть на русском?"
// Botón principal: "Да, переключить на русский"
// Botón cerrar: "Нет, спасибо"

// REGLA PRINCIPAL:
// El toast SIEMPRE está en el idioma que se SUGIERE cambiar
// Esto permite que el usuario entienda perfectamente la oferta
// sin importar en qué idioma esté actualmente la página