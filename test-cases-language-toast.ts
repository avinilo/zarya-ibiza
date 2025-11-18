// TABLA DE PRUEBA - CASOS DE TOAST DE IDIOMA
// =============================================

// CASO 1: Usuario en Inglaterra (navegador en inglés) pero tiene español seleccionado
// Detected: en (English)
// Current: es (Spanish)
// Resultado esperado:
// - Mensaje: "Would you prefer to view in English?"
// - Botón sí: "Yes, switch to English"
// - Botón no: "No, thanks"

// CASO 2: Usuario en España (navegador en español) pero tiene inglés seleccionado
// Detected: es (Spanish)
// Current: en (English)
// Resultado esperado:
// - Mensaje: "¿Prefieres ver la web en Español?"
// - Botón sí: "Sí, cambiar a Español"
// - Botón no: "No, gracias"

// CASO 3: Usuario en Rusia (navegador en ruso) pero tiene inglés seleccionado
// Detected: ru (Russian)
// Current: en (English)
// Resultado esperado:
// - Mensaje: "Хотите посмотреть на русском?"
// - Botón sí: "Да, переключить на русский"
// - Botón no: "Нет, спасибо"

// CASO 4: Usuario en Alemania (navegador en alemán) pero tiene español seleccionado
// Detected: en (English) - fallback para idiomas no soportados
// Current: es (Spanish)
// Resultado esperado:
// - Mensaje: "Would you prefer to view in English?"
// - Botón sí: "Yes, switch to English"
// - Botón no: "No, thanks"

// ✅ REGLA APLICADA: EL TOAST COMPLETO ESTÁ EN EL IDIOMA AL QUE SE SUGIERE CAMBIAR
// Esto permite que el usuario entienda perfectamente la oferta sin importar
// en qué idioma esté actualmente la página