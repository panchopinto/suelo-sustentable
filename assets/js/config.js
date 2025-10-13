// Configuración del repositorio "Suelo Sustentable"
window.APP_CONFIG = {
  projectName: "Suelo Sustentable",
  modelPath: "assets/models/suelo_sustentable.glb",
  // Coloca aquí tu endpoint de Google Apps Script tipo Web App para guardar respuestas en Google Sheets.
  // Ejemplo: "https://script.google.com/macros/s/AKfycbx.../exec"
  sheetsEndpoint: "",
  // Correos por defecto para envío por mailto si no hay endpoint
  defaultRecipients: ["belen.acpe@gmail.com", "franciscoandresp@gmail.com"],
  // Cambia a true si quieres deshabilitar envíos por mailto
  disableMailtoFallback: false
};
