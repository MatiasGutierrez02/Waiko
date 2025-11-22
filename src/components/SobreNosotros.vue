<template>
  <section class="about-wrap">
    <h2 class="about-heading" ref="headingRef"><span>Sobre nosotros</span></h2>

    <div class="about-grid">
      <div class="about-copy" data-aos="fade-up" data-aos-delay="50">
        <p class="about-lead">
          Somos un equipo de especialistas en gestión ambiental con amplia trayectoria, dedicados a brindar soluciones integrales para el cumplimiento normativo y la sostenibilidad de proyectos industriales.
        </p>

        <ul class="about-features">
          <li class="feature" data-aos="fade-up" data-aos-delay="120">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                      d="M12 3l7 3v6c0 4.97-3.05 8.48-7 9-3.95-.52-7-4.03-7-9V6l7-3z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                      d="M9 12l2 2 4-4"/>
              </svg>
            </span>
            Experiencia que respalda cada gestión
          </li>

          <li class="feature" data-aos="fade-up" data-aos-delay="170">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="8" stroke-width="1.8"/>
                <circle cx="12" cy="12" r="3" stroke-width="1.8"/>
              </svg>
            </span>
            Conocimiento técnico al servicio de nuestros clientes
          </li>

          <li class="feature" data-aos="fade-up" data-aos-delay="220">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                      d="M4 19h16M7 16v-5m5 5V8m5 8V6"/>
              </svg>
            </span>
            Eficiencia y confiabilidad en cada proyecto
          </li>
        </ul>

        <div class="about-cta" data-aos="fade-up" data-aos-delay="270">
          <button class="btn btn-ghost" @click="scrollToServices">Ver servicios</button>
        </div>
      </div>

      <figure class="about-media" data-aos="fade-left" data-aos-delay="140">
        <picture>
          <source srcset="@/assets/SobreNosotros.webp" type="image/webp" />
          <img src="@/assets/SobreNosotros.jpg" alt="Equipo de gestión y proyectos ambientales" />
        </picture>

        <span class="media-gradient"></span>
        <span class="media-ring"></span>
        <span class="media-badge">+13 años</span>
      </figure>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const headingRef = ref(null)

function scrollToServices() {
  const el = document.getElementById('servicios')
  if (!el) return
  const header = document.querySelector('header.header')
  const headerH = header ? header.offsetHeight : 100
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 2
  window.scrollTo({ top: y, behavior: 'smooth' })
}

onMounted(() => {
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quart', offset: 80 })

  const el = headingRef.value
  if (!el) return
  el.style.setProperty('--line-scale', '0')
  el.style.opacity = '0'
  el.style.transform = 'translateX(40px)'

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    const start = performance.now()
    const dur = 800
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const ease = 1 - Math.pow(1 - t, 3)
      el.style.setProperty('--line-scale', ease.toString())
      el.style.opacity = ease.toString()
      el.style.transform = `translateX(${(1 - ease) * 40}px)`
      if (t < 1) requestAnimationFrame(tick)
      else io.disconnect()
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.4 })
  io.observe(el)
})
</script>

<style scoped>
:root { --brand:#144553; --brandLight:#aee79d; --ink:#2f3b31; }

.about-wrap{
  width:100%;
  padding: clamp(2.5rem, 4vw, 4rem) 1.25rem;
  background:
    radial-gradient(1400px 420px at 100% 0%, rgba(174,231,157,.18), transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f7fbf8 100%);
  display:flex; flex-direction:column; align-items:center;
}

/* Título con doble línea solo a la derecha y animación */
.about-heading{
  --line-grad: linear-gradient(90deg, transparent 0%, #aee79d 12%, #144553 50%, #aee79d 88%, transparent 100%);
  --line-height: 2px;
  --line-gap: 8px;
  --line-scale: 0;

  display:flex;
  align-items:center;
  gap:12px;

  width:100%; max-width:1100px;
  margin:0 0 3rem;
  text-align:left;
  font-weight:900;
  font-size: clamp(1.8rem, 2.4vw + 1rem, 2.4rem);
  color:#144553;

  opacity:0;
  transform: translateX(40px);
  will-change: transform, opacity;
}

.about-heading::after{
  content:"";
  flex:1 1 auto;
  height: calc(var(--line-height) * 2 + var(--line-gap));
  opacity:.55;
  background:
    var(--line-grad) left top / 100% var(--line-height) no-repeat,
    var(--line-grad) left calc(var(--line-height) + var(--line-gap)) / 100% var(--line-height) no-repeat;
  transform: scaleX(var(--line-scale));
  transform-origin: right center;
  will-change: transform;
}

.about-heading > span{
  position:relative;
  z-index:1;
  display:inline-block;
  padding-right:0;
  background:transparent;
}

/* Grid y contenido */
.about-grid{
  width:100%; max-width:1100px;
  display:grid; gap: clamp(1.5rem, 3vw, 2.25rem);
  grid-template-columns: 1.05fr 1fr;
  grid-template-areas: "copy media";
  align-items:stretch;
  max-height:450px;
}
.about-copy{ grid-area: copy; }
.about-media{ grid-area: media; }

.about-media{
  position:relative; margin:0;
  border-radius:20px; overflow:hidden;
  box-shadow: 0 18px 40px rgba(0,0,0,.14);
  isolation:isolate;
  height:50%;
  align-self:stretch;
}
.about-media img{
  width:100%; height:100%;
  object-fit:cover; object-position:center; display:block;
  transform: scale(1.02);
}
.about-media:hover img{ transform: scale(1.03); transition: transform .5s ease; }

.about-lead{
  color:#425046; line-height:1.75;
  font-size: clamp(1rem, .35vw + .95rem, 1.05rem);
  margin:0 0 1rem;
  text-align: justify;
}
.about-features{
  display:grid; gap:.65rem; list-style:none; padding:0; margin:0 0 1.1rem;
}
.feature{
  display:flex; align-items:center; gap:.6rem;
  color: var(--ink);
  background:#f4f7f5;
  border:1px solid rgba(0,0,0,.04);
  padding:.6rem .75rem; border-radius:12px;
  box-shadow: 0 8px 16px rgba(0,0,0,.06);
}
.feature .icon{ width:28px; height:28px; color: var(--brand); display:grid; place-items:center; }
.feature .icon svg{ width:20px; height:20px; }

.about-cta{ display:flex; gap:.75rem; flex-wrap:wrap; }
.btn{
  display:inline-block; border-radius:10px; font-weight:700; text-decoration:none;
  padding:.65rem 1.1rem; transition:transform .08s ease, box-shadow .2s ease, background .2s;
}
.btn-primary{ background: var(--brand); color:#fff; }
.btn-primary:hover{ background:#3b6e40; box-shadow:0 10px 24px rgba(0,0,0,.12); transform: translateY(-1px); }
.btn-ghost{ background:#eaf3ed; color: var(--brand); }
.btn-ghost:hover{ background:#dfece3; }

.media-gradient{
  position:absolute; inset:0;
  background: radial-gradient(60% 40% at 80% 20%, rgba(174,231,157,.28), transparent 60%);
  mix-blend-mode: soft-light; pointer-events:none;
}
.media-ring{
  position:absolute; inset:-10px; border-radius:24px; pointer-events:none;
  box-shadow: inset 0 0 0 2px rgba(174,231,157,.35);
}
.media-badge{
  position:absolute; top:14px; left:14px;
  background:#ffffff; color: var(--brand);
  border:2px solid #e7f3ea;
  display:inline-flex; align-items:center; gap:.4rem;
  padding:.4rem .6rem; border-radius:999px;
  font-weight:800; font-size:.9rem;
  box-shadow:0 10px 24px rgba(0,0,0,.12);
}

/* Mobile */
@media (max-width: 960px){
  .about-grid{
    grid-template-columns: 1fr;
    grid-template-areas: "media" "copy";
    align-items:start;
    max-height:none;
  }
  .about-media{ height:auto; align-self:stretch; }
  .about-media img{
    width:100%; height:auto; max-height: clamp(260px, 55vw, 420px); aspect-ratio: 4 / 3; object-fit:cover;
  }
}
.about-wrap{ overflow-x: clip; }
@supports not (overflow-x: clip){
  .about-wrap{ overflow-x: hidden; }
}

</style>
