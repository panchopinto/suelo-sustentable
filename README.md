# Suelo Sustentable

Repositorio educativo con visor **3D/AR**, **Quiz**, **Ticket de salida** y recursos para trabajar la salud del suelo en el liceo.

## Estructura
```
suelo-sustentable-main/
├─ index.html
├─ viewer.html
├─ quiz.html
├─ ticket.html
├─ recursos.html
└─ assets/
   ├─ css/styles.css
   ├─ js/{config.js, main.js, accessibility.js}
   ├─ models/suelo_sustentable.glb
   └─ images/
```

## Configuración de formularios
1. Abre `assets/js/config.js`
2. Coloca tu `sheetsEndpoint` (Google Apps Script → Web App) si deseas guardar en Google Sheets.
3. Si no configuras endpoint, se abrirá un **mailto** con los destinatarios definidos en `defaultRecipients`.

## Ver en 3D y AR
- Botones **👁️ Ver en 3D** y **📱 Ver en AR** enlazan a `viewer.html`.
- Requiere internet para cargar el componente [`<model-viewer>`] desde un CDN.

## Créditos
Hecho con ❤️ para el Liceo Bicentenario de Excelencia Polivalente San Nicolás — Proyecto Educativo.
