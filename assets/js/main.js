(function(){
  // Enrutamiento de botones "Ver en 3D" y "Ver en AR"
  document.addEventListener("click", (e)=>{
    const go3d = e.target.closest("[data-go3d]");
    const goAR = e.target.closest("[data-goar]");
    if(go3d){ e.preventDefault(); location.href="viewer.html#3d"; }
    if(goAR){ e.preventDefault(); location.href="viewer.html#ar"; }
  });

  // Manejo de formularios (Quiz y Ticket de salida)
  async function handleForm(form){
    const data = Object.fromEntries(new FormData(form).entries());
    const meta = {
      repo: "Suelo Sustentable",
      page: location.pathname.split("/").pop(),
      timestamp: new Date().toISOString()
    };
    const payload = { ...data, ...meta };
    const cfg = window.APP_CONFIG || {};
    const endpoint = (cfg.sheetsEndpoint||"").trim();
    // Intenta enviar a Google Sheets si hay endpoint
    if(endpoint){
      try{
        const res = await fetch(endpoint, {method:"POST", body: JSON.stringify(payload)});
        if(res.ok){
          alert("✅ Respuestas enviadas correctamente.");
          form.reset();
          return;
        }else{
          console.warn("Sheets error", await res.text());
        }
      }catch(err){
        console.warn("Sheets network error", err);
      }
    }
    // Fallback: mailto
    if(cfg.disableMailtoFallback!==true){
      const to = (cfg.defaultRecipients||[]).join(",");
      const subject = encodeURIComponent("Respuestas - " + (form.dataset.title||"Formulario"));
      const body = encodeURIComponent(JSON.stringify(payload, null, 2));
      location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      alert("✉️ Abriendo tu cliente de correo para enviar las respuestas.");
      form.reset();
    }else{
      alert("⚠️ No hay endpoint configurado y el envío por mailto está deshabilitado.");
    }
  }

  document.addEventListener("submit", (e)=>{
    const form = e.target.closest("form[data-app-form]");
    if(form){ e.preventDefault(); handleForm(form); }
  });
})();
