/* =========================================================
   IMPRESSION · script.js
   1) CONFIG  -> edita aquí tus datos de contacto
   2) TRANSLATIONS -> textos en inglés (en) y español (es)
   3) Lógica: idioma, WhatsApp, menú, animaciones
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIGURACIÓN — EDITA SOLO ESTO
   --------------------------------------------------------- */
const CONFIG = {
  // Número de WhatsApp con código de país, SIN + ni espacios ni guiones.
  // Ejemplo EE.UU.: 1 + área + número  ->  "12015551234"
  whatsapp: "12017137750",           // <-- CAMBIA por tu número real
  email:    "info@impressionbp.com", // <-- CAMBIA por tu correo real
  instagram:"impression.bp",         // <-- CAMBIA por tu usuario de Instagram (sin @)
  web3forms: "f9e6b078-e56f-44d0-b7b2-f83f46151e63",

  defaultLang: "en",                 // idioma con el que carga la página ("en" o "es")
};

/* ---------------------------------------------------------
   2) TRADUCCIONES
   La clave (izquierda) coincide con el data-i18n del HTML.
   Para editar un texto, cambia el valor en "en" y en "es".
   --------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    // Nav
    nav_benefits:"Benefits", nav_about:"About", nav_testimonials:"Testimonials", nav_contact:"Contact",
    // Hero
    hero_eyebrow:"Printer rentals · Northern New Jersey",
    hero_h1a:"Printing for your business,",
    hero_h1b:"without the hassle.",
    hero_lead:"We rent the printer, supply the toner and handle the maintenance. You just print. One monthly fee, no surprises.",
    hero_cta:"Message us on WhatsApp",
    hero_cta2:"How it works",
    hero_trust:"Local service for businesses in Union City, West New York, North Bergen, Newark and Jersey City.",
    // Benefits
    ben_eyebrow:"All inclusive",
    ben_title:"One service. Everything your printer needs.",
    ben1_t:"Equipment always ready",
    ben1_p:"We install and set up a professional printer at your location. No purchase, no upfront cost — just turn it on and print.",
    ben2_t:"Supplies included",
    ben2_p:"Toner and consumables are on us. No surprise costs, no last-minute runs for cartridges.",
    ben3_t:"Maintenance without the wait",
    ben3_p:"Fast, local tech support. If something breaks, we handle it so your business never stops.",
    // About
    about_eyebrow:"About Impression",
    about_title:"A close partner, not a call center.",
    about_p1:"Impression is a local printer-rental service for small businesses in northern New Jersey. Our model is simple: one fee that covers the equipment, the supplies and the maintenance.",
    about_p2:"No getting passed from department to department. You get one direct point of contact who knows your equipment and responds fast — so printing is the last thing you have to worry about.",
    stat1_l:"Businesses that trust us",
    stat2_l:"Northern NJ cities served",
    stat3_l:"Fee that covers it all",
    stat4_l:"Surprise costs",
    // Testimonials
    tst_eyebrow:"What our clients say",
    tst_title:"Businesses that stopped worrying about printing.",
    tst1_q:"I used to waste time buying toner and calling technicians. With Impression it's all handled, and they always respond fast.",
    tst1_r:"Beauty salon · Union City",
    tst2_q:"We print documents all day and can't afford to stop. The included maintenance has saved us more than once.",
    tst2_r:"Accounting office · West New York",
    tst3_q:"One flat fee and I forget about it. It's the personal service you don't get from the big brands.",
    tst3_r:"Dental clinic · North Bergen",
    // Contact
    contact_eyebrow:"Let's talk",
    contact_title:"Ready to stop worrying about printing?",
    contact_p:"Tell us about your business and we'll send you a custom quote. No commitment.",
    contact_wa:"Message us on WhatsApp",
    contact_loc:"North Bergen, NJ · Northern New Jersey",
    form_name_l:"Name", form_name_ph:"Your name",
    form_biz_l:"Business", form_biz_ph:"Your business name",
    form_phone_l:"Phone",
    form_msg_l:"What do you need?",
    form_msg_ph:"e.g. I have a small office and need an all-inclusive printer rental.",
    form_send:"Send message",
    form_note:"We'll reply to your email as soon as possible.",
    form_ok:"Thanks! Your message was sent — we'll be in touch soon.",
    form_err:"Something went wrong. Please try again or message us on WhatsApp.",
    // Footer
    foot_brand_p:"All-inclusive printer rentals for small businesses in northern New Jersey. Equipment, supplies and maintenance in one fee.",
    foot_menu_h:"Menu", foot_contact_h:"Contact",
    foot_email:"Email", foot_loc:"North Bergen, NJ",
    foot_rights:"All rights reserved.", foot_state:"North Bergen, New Jersey",
    // Título de la pestaña del navegador
    doc_title:"Impression · All-inclusive printer rentals in northern New Jersey",
  },

  es: {
    // Nav
    nav_benefits:"Beneficios", nav_about:"Nosotros", nav_testimonials:"Testimonios", nav_contact:"Contacto",
    // Hero
    hero_eyebrow:"Renta de impresoras · Norte de Nueva Jersey",
    hero_h1a:"Impresión para tu negocio,",
    hero_h1b:"sin complicaciones.",
    hero_lead:"Rentamos la impresora, ponemos los suministros y hacemos el mantenimiento. Tú solo imprimes. Una cuota mensual, cero sorpresas.",
    hero_cta:"Escríbenos por WhatsApp",
    hero_cta2:"Cómo funciona",
    hero_trust:"Servicio local para negocios en Union City, West New York, North Bergen, Newark y Jersey City.",
    // Benefits
    ben_eyebrow:"Todo incluido",
    ben_title:"Un solo servicio. Todo lo que tu impresora necesita.",
    ben1_t:"Equipo siempre listo",
    ben1_p:"Instalamos y configuramos una impresora profesional en tu local. Sin compra, sin inversión inicial: solo enciendes e imprimes.",
    ben2_t:"Suministros incluidos",
    ben2_p:"El tóner y los consumibles corren por nuestra cuenta. Nada de costos sorpresa ni salir a comprar cartuchos a última hora.",
    ben3_t:"Mantenimiento sin esperas",
    ben3_p:"Soporte técnico local y rápido. Si algo falla, lo resolvemos nosotros para que tu negocio nunca se detenga.",
    // About
    about_eyebrow:"Sobre Impression",
    about_title:"Un aliado cercano, no un call center.",
    about_p1:"Impression es un servicio local de renta de impresoras para pequeños negocios del norte de Nueva Jersey. Trabajamos con un modelo simple: una cuota que cubre el equipo, los suministros y el mantenimiento.",
    about_p2:"Aquí no te pasan de departamento en departamento. Tienes un punto de contacto directo que conoce tu equipo y responde rápido, para que imprimir sea lo último de lo que te tengas que preocupar.",
    stat1_l:"Negocios que confían en nosotros",
    stat2_l:"Ciudades del norte de NJ atendidas",
    stat3_l:"Cuota que lo cubre todo",
    stat4_l:"Costos sorpresa",
    // Testimonials
    tst_eyebrow:"Lo que dicen nuestros clientes",
    tst_title:"Negocios que dejaron de preocuparse por imprimir.",
    tst1_q:"Antes perdía tiempo comprando tóner y llamando a técnicos. Con Impression todo está resuelto y siempre responden rápido.",
    tst1_r:"Salón de belleza · Union City",
    tst2_q:"Imprimimos documentos todo el día y no podemos parar. El mantenimiento incluido nos ha salvado más de una vez.",
    tst2_r:"Oficina contable · West New York",
    tst3_q:"Una sola cuota y me olvido del tema. Es el trato cercano que no encuentras con las grandes marcas.",
    tst3_r:"Clínica dental · North Bergen",
    // Contact
    contact_eyebrow:"Hablemos",
    contact_title:"¿Listo para dejar de preocuparte por imprimir?",
    contact_p:"Cuéntanos sobre tu negocio y te enviamos una propuesta a tu medida. Sin compromiso.",
    contact_wa:"Escríbenos por WhatsApp",
    contact_loc:"North Bergen, NJ · Norte de Nueva Jersey",
    form_name_l:"Nombre", form_name_ph:"Tu nombre",
    form_biz_l:"Negocio", form_biz_ph:"Nombre de tu negocio",
    form_phone_l:"Teléfono",
    form_msg_l:"¿Qué necesitas?",
    form_msg_ph:"Ej: Tengo una oficina pequeña y necesito una impresora en renta con todo incluido.",
    form_send:"Enviar mensaje",
    form_note:"Te responderemos a tu correo lo antes posible.",
    form_ok:"¡Gracias! Tu mensaje fue enviado — te contactaremos pronto.",
    form_err:"Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.",
    // Footer
    foot_brand_p:"Renta de impresoras todo incluido para pequeños negocios del norte de Nueva Jersey. Equipo, suministros y mantenimiento en una sola cuota.",
    foot_menu_h:"Navegación", foot_contact_h:"Contacto",
    foot_email:"Correo", foot_loc:"North Bergen, NJ",
    foot_rights:"Todos los derechos reservados.", foot_state:"North Bergen, Nueva Jersey",
    // Título de la pestaña del navegador
    doc_title:"Impression · Renta de impresoras todo incluido en el norte de Nueva Jersey",
  }
};

// Mensaje inicial de WhatsApp según idioma (el que se manda al tocar un botón directo)
const WA_GREETING = {
  en:"Hi Impression 👋 I'm interested in your all-inclusive printer rental for my business.",
  es:"Hola Impression 👋 Me interesa la renta de impresoras todo incluido para mi negocio.",
};

/* ---------------------------------------------------------
   3) LÓGICA
   --------------------------------------------------------- */
(function(){
  'use strict';

  let currentLang = CONFIG.defaultLang;

  // Recuperar el idioma elegido en una visita anterior (si el navegador lo permite)
  try {
    const saved = localStorage.getItem('impression_lang');
    if (saved === 'en' || saved === 'es') currentLang = saved;
  } catch(e) {}

  const waBase = 'https://wa.me/' + CONFIG.whatsapp;

  // Aplica un idioma a toda la página
  function applyLang(lang){
    const dict = TRANSLATIONS[lang];
    if(!dict) return;
    currentLang = lang;

    // Textos
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    // Placeholders de inputs / textarea
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
      const key = el.getAttribute('data-i18n-ph');
      if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    // Idioma del documento, título de pestaña y etiqueta del botón
    document.documentElement.lang = lang;
    if(dict.doc_title) document.title = dict.doc_title;
    const label = document.getElementById('langLabel');
    if(label) label.textContent = (lang === 'en') ? 'Español' : 'English';

    // Actualiza los enlaces de WhatsApp con el saludo en el idioma activo
    const waGeneric = waBase + '?text=' + encodeURIComponent(WA_GREETING[lang]);
    document.querySelectorAll('[data-wa]').forEach(function(el){
      el.setAttribute('href', waGeneric);
      el.setAttribute('target','_blank');
      el.setAttribute('rel','noopener');
    });

    try { localStorage.setItem('impression_lang', lang); } catch(e) {}
  }

  // Botón de idioma: alterna EN <-> ES
  const langBtn = document.getElementById('langBtn');
  if(langBtn){
    langBtn.addEventListener('click', function(){
      applyLang(currentLang === 'en' ? 'es' : 'en');
    });
  }

  // Correo e Instagram (no dependen del idioma)
  const emailUrl = 'mailto:' + CONFIG.email;
  ['emailLink','emailLinkFooter'].forEach(function(id){
    const el = document.getElementById(id); if(el) el.setAttribute('href', emailUrl);
  });
  const emailDisp = document.getElementById('emailDisplay');
  if(emailDisp) emailDisp.textContent = CONFIG.email;
  const ig = document.getElementById('igLink');
  if(ig) ig.setAttribute('href','https://instagram.com/' + CONFIG.instagram);

  // Formulario -> Esto lo edité yo, es el boton para que envié a web forms
    const sendBtn = document.getElementById('sendBtn');
  const formNote = document.querySelector('.form-note');
  if(sendBtn){
    sendBtn.addEventListener('click', async function(){
      const dict = TRANSLATIONS[currentLang];
      const nombre  = (document.getElementById('f-nombre').value  || '').trim();
      const negocio = (document.getElementById('f-negocio').value || '').trim();
      const tel     = (document.getElementById('f-tel').value     || '').trim();
      const msg     = (document.getElementById('f-msg').value     || '').trim();

      // Envía los datos a Web3Forms, que te los reenvía a tu correo
      sendBtn.disabled = true;
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: CONFIG.web3forms,
            subject: 'Nuevo mensaje desde impressionbp.com',
            from_name: 'Impression Website',
            Nombre: nombre,
            Negocio: negocio,
            Telefono: tel,
            Mensaje: msg
          })
        });
        const data = await res.json();
        if (data.success) {
          if(formNote) formNote.textContent = dict.form_ok;
          document.getElementById('f-nombre').value  = '';
          document.getElementById('f-negocio').value = '';
          document.getElementById('f-tel').value     = '';
          document.getElementById('f-msg').value     = '';
        } else {
          if(formNote) formNote.textContent = dict.form_err;
        }
      } catch (e) {
        if(formNote) formNote.textContent = dict.form_err;
      }
      sendBtn.disabled = false;
    });
  }

  // Año dinámico en el footer
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Sombra del nav al hacer scroll
  const nav = document.getElementById('nav');
  const onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 8); };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // Menú móvil
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('open'); });
  });

  // Animaciones al hacer scroll
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:.14, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // Arranca en el idioma correspondiente
  applyLang(currentLang);
})();
