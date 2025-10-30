<template>
  <section id="contacto" class="contacto-section">
    <div class="section-heading" ref="headingRef">
      <h2 class="contacto-title" ref="titleRef"><span>Contacto</span></h2>
    </div>

    <div class="contacto-grid" ref="gridRef">
      <aside class="info-card contact-card" style="--delay: 0ms">
        <h3 class="info-title">Hablemos</h3>
        <p class="info-text">Escribinos y uno de nuestros consultores te responderá a la brevedad.</p>

        <ul class="info-list">
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1.6 1.6 0 0 1 1.7-.38c1.8.72 3.8 1.12 5.9 1.12a1.6 1.6 0 0 1 1.6 1.6V21a1.6 1.6 0 0 1-1.6 1.6A19.6 19.6 0 0 1 3 7.6 1.6 1.6 0 0 1 4.6 6h2.48A1.6 1.6 0 0 1 8.68 7.6c0 2.1.4 4.1 1.12 5.9a1.6 1.6 0 0 1-.38 1.7L7.6 17.4a15.9 15.9 0 0 0-1-6.6Z" fill="currentColor"/></svg>
            <a :href="whatsappLink" target="_blank">+54 11 5384-9262</a>
          </li>
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.24l7.4 5.55a1 1 0 0 0 1.2 0L20 8.24V18H4Z" fill="currentColor"/></svg>
            <a href="mailto:info@waiko.com.ar?cc=info@waiko.com.ar">info@waiko.com.ar</a>
          </li>
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="currentColor"/></svg>
            Argentina
          </li>
        </ul>

        <a :href="whatsappLink" target="_blank" class="wa-cta">Escribir por WhatsApp</a>
      </aside>

      <q-form @submit.prevent="enviarConsulta" class="form-card contact-card" style="--delay: 140ms">
        <div class="fields-grid">
          <q-input filled dense color="primary" v-model="form.nombre" label="Nombre y Apellido" class="field" :rules="[v => !!v || 'Requerido']"/>
          <q-input filled dense color="primary" v-model="form.mail" type="email" label="Email" class="field"
                   :rules="[v => !!v || 'Requerido', v => /.+@.+\..+/.test(v) || 'Email inválido']"/>
          <q-input filled dense color="primary" v-model="form.telefono" label="Teléfono" class="field span-2"/>
          <q-input filled dense color="primary" v-model="form.consulta" type="textarea" autogrow
                   label="Contanos tu consulta" class="field span-2 textarea-large" :rules="[v => !!v || 'Requerido']"/>
        </div>

        <div class="terms-wrap" :class="{ invalid: termsInvalid }">
          <q-checkbox v-model="termsAccepted" color="primary" dense size="md" @update:model-value="clearTermsInvalid">
            <template #default>
              <span>Leí y acepto nuestros
                <button type="button" class="link-terms" @click="showTerms = true">Términos y Condiciones</button>.
              </span>
            </template>
          </q-checkbox>
        </div>

        <div class="actions">
          <q-btn type="submit" label="Enviar consulta" color="primary" unelevated
                 class="send-btn" :class="{ shake: shakeNow }" :loading="loading" />
        </div>
      </q-form>
    </div>

    <q-dialog v-model="showTerms">
      <q-card class="terms-card">
        <div class="t-hero">
          <div class="t-hero-left">
            <div class="t-badge" aria-hidden="true">🔒</div>
            <div class="t-hero-text">
              <div class="t-hero-title">Política de Privacidad</div>
              <div class="t-hero-sub">Última actualización: {{ today }}</div>
            </div>
          </div>
          <q-btn flat round dense icon="close" class="t-close" v-close-popup />
        </div>

        <div class="t-body">
          <section class="t-section">
            <h4 class="t-h">¿Qué datos recopilamos?</h4>
            <ul class="t-list">
              <li>Nombre y apellido</li>
              <li>Correo electrónico</li>
              <li>Teléfono de contacto</li>
              <li>Empresa o institución</li>
              <li>Mensajes o consultas específicas</li>
            </ul>
          </section>

          <section class="t-section">
            <h4 class="t-h">¿Para qué usamos tus datos?</h4>
            <ul class="t-list">
              <li>Contactarte en relación con tu consulta o interés en nuestros servicios.</li>
              <li>Ofrecerte asesoramiento personalizado sobre gestión ambiental, normativa y residuos.</li>
              <li>Enviarte comunicaciones informativas o comerciales (solo con tu consentimiento).</li>
            </ul>
          </section>

          <section class="t-section">
            <h4 class="t-h">¿Cómo protegemos tus datos?</h4>
            <p>Aplicamos medidas técnicas y organizativas adecuadas para evitar accesos no autorizados, pérdidas o divulgaciones indebidas.</p>
          </section>

          <section class="t-section">
            <h4 class="t-h">¿Compartimos tu información?</h4>
            <p>No compartimos tus datos con terceros.</p>
          </section>

          <section class="t-section">
            <h4 class="t-h">Tus derechos</h4>
            <p>Podés solicitar el acceso, rectificación, actualización o supresión de tus datos escribiendo a
              <a href="mailto:info@waiko.com.ar">info@waiko.com.ar</a>. También podés pedir dejar de recibir comunicaciones en cualquier momento.</p>
          </section>

          <section class="t-section">
            <h4 class="t-h">Base legal</h4>
            <p>Cumplimos con la Ley N.º 25.326 de Protección de los Datos Personales de la República Argentina.</p>
          </section>
        </div>

        <div class="t-actions">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
          <q-btn label="Aceptar y cerrar" color="primary" unelevated class="t-cta" v-close-popup />
        </div>
      </q-card>
    </q-dialog>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({ nombre: '', mail: '', telefono: '', consulta: '' })
const loading = ref(false)
const showTerms = ref(false)
const termsAccepted = ref(false)
const termsInvalid = ref(false)
const shakeNow = ref(false)

const whatsappLink = 'https://wa.me/541153849262'
const today = computed(() =>
  new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })
)

function clearTermsInvalid () { if (termsAccepted.value) termsInvalid.value = false }
function nudgeButton () { shakeNow.value = true; setTimeout(() => { shakeNow.value = false }, 450) }

const enviarConsulta = async () => {
  if (!termsAccepted.value) { termsInvalid.value = true; nudgeButton(); return }
  loading.value = true
  try {
    await emailjs.send(
      'service_9gypgvi',
      'template_qzcan29',
      {
        nombre: form.value.nombre,
        mail: form.value.mail,
        telefono: form.value.telefono,
        consulta: form.value.consulta
      },
      'ZYTdaHsiLkfn2j2CQ'
    )
    form.value = { nombre: '', mail: '', telefono: '', consulta: '' }
    termsAccepted.value = false
  } catch (e) {
    alert('Ocurrió un error al enviar la consulta. Intente más tarde.')
    console.error(e)
  } finally {
    loading.value = false
  }
}

const headingRef = ref(null)
const titleRef = ref(null)
let titleIO
const gridRef = ref(null)
let gridIO
const ease = t => 1 - Math.pow(1 - t, 3)

onMounted(async () => {
  await nextTick()

  const title = titleRef.value
  const heading = headingRef.value
  if (title && heading) {
    title.style.opacity = '0'
    title.style.transform = 'translateX(-40px)'
    heading.style.setProperty('--line-scale', '0')

    titleIO = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const dur = 900
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur)
        const e = ease(t)
        title.style.opacity = String(e)
        title.style.transform = `translateX(${(1 - e) * -40}px)`
        heading.style.setProperty('--line-scale', String(e))
        t < 1 ? requestAnimationFrame(step) : titleIO.disconnect()
      }
      requestAnimationFrame(step)
    }, { threshold: 0.35 })
    titleIO.observe(title)
  }

  const grid = gridRef.value
  if (grid) {
    gridIO = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      grid.classList.add('in-view')
      gridIO.disconnect()
    }, { threshold: 0.25 })
    gridIO.observe(grid)
  }
})

onBeforeUnmount(() => {
  titleIO && titleIO.disconnect()
  gridIO && gridIO.disconnect()
})
</script>

<style scoped>
.contacto-section{
  width:100%;
  background:#f7fbf8;
  padding:4rem 1.25rem 5rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-x: clip;
}
@supports not (overflow-x: clip){ .contacto-section{ overflow-x: hidden; } }

.section-heading{
  --line-grad: linear-gradient(90deg, #264d2c 0%, #3a6d40 30%, #aee79d 70%, transparent 100%);
  --line-height:2px; --line-gap:8px; --line-scale: 0;
  width:100%; max-width:1100px; position:relative; margin-bottom:2.2rem;
}
.section-heading::before{
  content:""; position:absolute; left:0; right:0; top:50%; transform:translateY(-50%) scaleX(var(--line-scale));
  transform-origin: left center;
  height:calc(var(--line-height)*2 + var(--line-gap));
  background:
    var(--line-grad) left top/100% var(--line-height) no-repeat,
    var(--line-grad) left calc(var(--line-height) + var(--line-gap))/100% var(--line-height) no-repeat;
  opacity:.6;
}
.contacto-title{
  margin:0; font-weight:900; font-size:2.2rem; letter-spacing:.02em; color:#264d2c; text-align:left; position:relative;
  opacity:0; transform:translateX(-40px); will-change:transform, opacity;
}
.contacto-title > span{ display:inline-block; padding-right:.75rem; background:#f7fbf8; }

.contacto-grid{ width:100%; max-width:1100px; display:grid; grid-template-columns:.95fr 1.05fr; gap:1.6rem; align-items:stretch; }

.info-card{
  background:linear-gradient(180deg,#264d2c 0%,#1f3d25 100%);
  color:#eaf3ed; border-radius:16px; padding:1.6rem 1.4rem;
  box-shadow:0 12px 30px rgba(0,0,0,.18); border:1px solid rgba(255,255,255,.12);
}
.info-title{ margin:0 0 .25rem 0; font-size:1.35rem; font-weight:800; color:#aee79d; }
.info-text{ margin:0 0 1rem 0; opacity:.9; }
.info-list{ list-style:none; padding:0; margin:0 0 1.2rem 0; display:grid; gap:.6rem; }
.info-list li{ display:flex; align-items:center; gap:.55rem; }
.info-list svg{ width:18px; height:18px; color:#aee79d; flex:0 0 auto; }
.info-list a{ color:#eaf3ed; text-decoration:none; font-weight:700; }
.info-list a:hover{ text-decoration:underline; }
.wa-cta{ display:inline-block; margin-top:.25rem; background:#25D366; color:#0e3d22; font-weight:800; padding:.6rem 1rem; border-radius:10px; text-decoration:none; box-shadow:0 10px 22px rgba(0,0,0,.16); }
.wa-cta:hover{ filter:brightness(1.05); }
.mini-note{ font-size:.85rem; opacity:.75; margin-top:.6rem; }

.form-card{
  background:#ffffff; border-radius:16px; padding:1.6rem;
  box-shadow:0 12px 30px rgba(0,0,0,.12); border:1px solid rgba(0,0,0,.04);
}

.fields-grid{ display:grid; gap:1rem; grid-template-columns:1fr 1fr; }
.field.span-2{ grid-column: span 2; }

.q-field--filled .q-field__control{ border-radius:16px !important; overflow:hidden; box-shadow:0 0 0 rgba(0,0,0,0); }
.q-field--filled .q-field__control:before, .q-field--filled .q-field__control:after{ border-radius:16px !important; }
.q-field--filled .q-field__control:before{ background:#f2f5f3 !important; border:1px solid rgba(38,77,44,.12); }
.q-field--filled.q-field--focused .q-field__control{ box-shadow:0 0 0 3px rgba(174,231,157,.25); }
.q-field__native, .q-field__input{ padding-top:.9rem; padding-bottom:.9rem; }
.textarea-large .q-field__native{ min-height:170px; }

.terms-wrap{ margin:.25rem 0 1rem; padding:.35rem .5rem; border-radius:12px; transition:.2s ease; }
.terms-wrap.invalid{ outline:2px solid #e03a3a; outline-offset:3px; background:#fff8f8; }
.link-terms{ color:#29a3ff; background:none; border:none; padding:0 .15rem; cursor:pointer; font-weight:800; }
.link-terms:hover{ text-decoration:underline; }

.actions{ margin-top:.5rem; display:flex; justify-content:flex-end; }
.send-btn{
  background-color:#264d2c !important; color:#fff !important; font-weight:800 !important;
  border-radius:999px !important; padding:.75rem 1.4rem;
}
.send-btn:hover{ background-color:#3b6e40 !important; }
@keyframes shakeX{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
.send-btn.shake{ animation:shakeX .45s ease; }

.terms-card{
  width:min(780px,92vw);
  border-radius:20px;
  overflow:hidden;
  background:#fff;
  box-shadow:0 26px 70px rgba(0,0,0,.28);
  animation: pop .35s cubic-bezier(.2,.7,.3,1);
  position:relative;
}
@keyframes pop{ 0%{ opacity:0; transform:translateY(10px) scale(.98) } 100%{ opacity:1; transform:none } }
.terms-card::after{ content:""; position:absolute; inset:0; pointer-events:none; border-radius:inherit; box-shadow:inset 0 0 0 1px rgba(38,77,44,.08); }

.t-hero{
  position:relative;
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 20px;
  color:#fff;
  background:
    radial-gradient(80% 120% at 120% -10%, rgba(174,231,157,.36), transparent 40%),
    linear-gradient(90deg,#234a2a 0%, #2e5a33 45%, #3b6e40 100%);
}
.t-hero-left{ display:flex; align-items:center; gap:.9rem; }
.t-badge{
  width:42px; height:42px; border-radius:12px;
  display:grid; place-items:center; font-size:1.2rem;
  background:#ffffff; color:#264d2c; box-shadow:0 10px 24px rgba(0,0,0,.18);
  border:2px solid #aee79d;
}
.t-hero-title{ font-weight:900; line-height:1; font-size:1.25rem; letter-spacing:.2px; }
.t-hero-sub{ font-size:.92rem; opacity:.9; }
.t-close{ color:#eaf7ee; }

.t-body{
  padding:18px 22px 8px;
  max-height:60vh; overflow:auto;
  color:#2f3b31;
  counter-reset: sec;
}
.t-body::-webkit-scrollbar{ width:10px }
.t-body::-webkit-scrollbar-thumb{ background:#dfe6e1; border-radius:999px }
.t-body::-webkit-scrollbar-thumb:hover{ background:#cfd8d2 }

.t-section{ margin:1rem 0 1.1rem; }
.t-h{
  position:relative; margin:0 0 .45rem;
  font-weight:900; color:#264d2c; font-size:1.15rem;
}
.t-h::before{
  counter-increment: sec;
  content: counter(sec) ". ";
  color:#3b6e40;
  margin-right:.25rem;
}

.t-list{ padding-left:0; margin:0; list-style:none; }
.t-list li{
  position:relative; padding-left:1.3rem; margin:.25rem 0;
}
.t-list li::before{
  content:""; position:absolute; left:0; top:.55rem; width:.65rem; height:.65rem;
  border-radius:.2rem;
  background:linear-gradient(135deg,#aee79d 0%, #67c56b 100%);
  box-shadow:0 0 0 2px #eef6f0 inset;
}

.t-actions{
  display:flex; gap:.5rem; justify-content:flex-end; align-items:center;
  padding:12px 16px 16px;
  background:linear-gradient(180deg,#ffffff 0%, #f7fbf8 100%);
}
.t-cta{
  border-radius:12px;
  font-weight:800;
  padding:.6rem 1rem;
}

.contact-card{
  transform: translateX(-16rem);
  opacity: 0;
  transition: transform 900ms cubic-bezier(.22,.61,.36,1), opacity 900ms cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--delay, 0ms);
  will-change: transform, opacity;
}
.contacto-grid.in-view .contact-card{ transform: translateX(0); opacity: 1; }

@media (max-width: 900px){
  .contacto-grid{ grid-template-columns:1fr; }
  .field.span-2{ grid-column: span 1; }
  .actions{ justify-content:stretch; }
  .send-btn{ width:100%; }
  .contacto-title > span{ padding-right:.5rem; }
  .contact-card{ transform: translateX(-8rem); }
  .t-hero{ padding:16px; }
  .t-hero-title{ font-size:1.1rem; }
}
</style>
