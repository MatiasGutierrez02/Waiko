<template>
  <div class="contact-container q-pa-md">
    <h2 class="contact-title">Contacto WAIKO</h2>

    <div class="contact-info q-mb-lg">
      <p>
        <strong>Celular Corporativo:</strong>
        <a :href="whatsappLink" target="_blank" class="contact-link">
          (54 11) 15 5384 9262
        </a>
      </p>
      <p>
        <strong>Email:</strong>
        <a href="mailto:info@waiko.com.ar?cc=info@waiko.com.ar" class="contact-link">
          info@waiko.com.ar
        </a>
      </p>
    </div>

    <q-form @submit.prevent="enviarConsulta" class="contact-form q-pa-lg q-mb-xl">
      <q-input
        filled
        v-model="form.nombre"
        label="Nombre y Apellido"
        required
        class="q-mb-md"
        color="primary"
        dense
        rounded
      />
      <q-input
        filled
        v-model="form.mail"
        label="Email"
        type="email"
        required
        class="q-mb-md"
        color="primary"
        dense
        rounded
      />
      <q-input
        filled
        v-model="form.telefono"
        label="Teléfono"
        required
        class="q-mb-md"
        color="primary"
        dense
        rounded
      />
      <q-input
        filled
        v-model="form.consulta"
        label="Consulta"
        type="textarea"
        required
        class="q-mb-md"
        color="primary"
        dense
        rounded
        autogrow
      />

      <q-btn
        type="submit"
        label="Enviar Consulta"
        color="primary"
        unelevated
        class="full-width"
        :loading="loading"
      />
    </q-form>

    <q-dialog v-model="successDialog">
      <q-card style="min-width: 280px; max-width: 400px;">
        <q-card-section class="text-h6 text-primary">Consulta enviada</q-card-section>
        <q-card-section>
          Gracias por contactarnos. Te responderemos a la brevedad.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  nombre: "",
  mail: "",
  telefono: "",
  consulta: "",
});

const loading = ref(false);
const successDialog = ref(false);

const whatsappLink = "https://wa.me/541153849262";

const enviarConsulta = async () => {
  loading.value = true;

  try {
    await emailjs.send(
      "service_9gypgvi",
      "template_qzcan29",
      {
        nombre: form.value.nombre,
        mail: form.value.mail,
        telefono: form.value.telefono,
        consulta: form.value.consulta,
      },
      "ZYTdaHsiLkfn2j2CQ"
    );

    successDialog.value = true;

    form.value = {
      nombre: "",
      mail: "",
      telefono: "",
      consulta: "",
    };
  } catch (error) {
    alert("Ocurrió un error al enviar la consulta. Intente más tarde.");
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 200px auto 2rem; /* aumenté el margin-top de 80px a 120px */
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(38, 77, 44, 0.15);
  padding: 2.5rem 2rem;
  font-family: "Roboto", sans-serif;
  color: #144553;
}


.contact-title {
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #144553;
}

.contact-info p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.contact-link {
  color: #144553;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #aee79d;
  text-decoration: underline;
}

.q-input__control {
  border-radius: 8px !important;
  box-shadow: 0 0 6px rgba(38, 77, 44, 0.1);
}

.q-btn--unelevated {
  background-color: #144553 !important;
  color: white !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  transition: background-color 0.3s ease;
}

.q-btn--unelevated:hover {
  background-color: #3b6e40 !important;
}

.q-card-section.text-primary {
  color: #144553 !important;
}
</style>
