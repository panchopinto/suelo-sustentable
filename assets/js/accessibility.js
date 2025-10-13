// Barra de accesibilidad simple
(function(){
  const id = "access-controls";
  if (document.getElementById(id)) return;
  const bar = document.createElement("div");
  bar.id = id;
  bar.innerHTML = `
    <div class="container">
      <span class="label">🛠️ Controles:</span>
      <button class="ctrl" data-action="home" title="Inicio">🏠</button>
      <button class="ctrl" data-action="tts" title="Narrador (selección o principal)">🗣️</button>
      <button class="ctrl" data-action="contrast" title="Alto contraste">🌓</button>
      <button class="ctrl" data-action="font-plus" title="Aumentar fuente">A+</button>
      <button class="ctrl" data-action="font-minus" title="Disminuir fuente">A−</button>
      <button class="ctrl" data-action="focus" title="Resaltar foco / Lupa">🔍</button>
    </div>`;
  document.body.appendChild(bar);

  let contrast = false;
  let scale = 1;
  let focusOn = false;
  function speak(text){
    try{
      const s = new SpeechSynthesisUtterance(text);
      s.lang = "es-CL";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(s);
    }catch(e){ console.warn(e); }
  }
  bar.addEventListener("click", (e)=>{
    const b = e.target.closest("button.ctrl");
    if(!b) return;
    const a = b.dataset.action;
    if(a==="home") location.href = "index.html";
    if(a==="tts"){
      const sel = window.getSelection().toString().trim();
      if(sel) speak(sel); else {
        const main = document.querySelector("main");
        speak(main ? main.innerText.trim() : document.body.innerText.trim());
      }
    }
    if(a==="contrast"){
      contrast = !contrast;
      document.documentElement.classList.toggle("high-contrast", contrast);
    }
    if(a==="font-plus"){ scale = Math.min(1.6, scale+0.1); document.documentElement.style.setProperty("--base-scale", scale); }
    if(a==="font-minus"){ scale = Math.max(0.8, scale-0.1); document.documentElement.style.setProperty("--base-scale", scale); }
    if(a==="focus"){
      focusOn = !focusOn;
      document.documentElement.classList.toggle("focus-ring", focusOn);
    }
  });
})();
