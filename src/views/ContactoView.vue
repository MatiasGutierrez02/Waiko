<template>
<div class="q-pa-md" style="max-width: 600px; margin: 80px auto 0;">
    <h2 class="text-primary text-center">Contacto WAIKO</h2>

    <div class="q-mb-md">
      <p>
        <strong>Celular Corporativo:</strong>
        <a :href="whatsappLink" target="_blank" class="text-primary">
          (54 11) 15 5384 9262
        </a>
        <br />
        <strong>Email:</strong>
        <a :href="`mailto:info@waiko.com.ar?cc=info@waiko.com.ar`" class="text-primary">
          info@waiko.com.ar
        </a>
      </p>
    </div>

    <q-form @submit.prevent="enviarConsulta">
      <q-input filled v-model="form.nombre" label="Nombre y Apellido" required class="q-mb-md" />
      <q-input filled v-model="form.mail" label="Email" type="email" required class="q-mb-md" />
      <q-input filled v-model="form.telefono" label="Teléfono" required class="q-mb-md" />
      <q-input
        filled
        v-model="form.consulta"
        label="Consulta"
        type="textarea"
        required
        class="q-mb-md"
      />

      <q-btn
        type="submit"
        label="Enviar Consulta"
        style="background-color: #75634f; color: white"
        :loading="loading"
        class="full-width"
      />
    </q-form>

    <q-dialog v-model="successDialog">
      <q-card>
        <q-card-section class="text-h6">Consulta enviada</q-card-section>
        <q-card-section>Gracias por contactarnos. Te responderemos a la brevedad.</q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="#75634f" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({
  nombre: '',
  mail: '',
  telefono: '',
  consulta: ''
})

const loading = ref(false)
const successDialog = ref(false)

const whatsappLink = 'https://wa.me/541153849262'

const enviarConsulta = async () => {
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

    successDialog.value = true

    form.value = {
      nombre: '',
      mail: '',
      telefono: '',
      consulta: ''
    }
  } catch (error) {
    alert('Ocurrió un error al enviar la consulta. Intente más tarde.')
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.text-primary {
  color: #75634f !important;
}
</style>
