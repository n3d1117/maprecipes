<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="richiedi-ricetta-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header p-2 pl-3">
            <h5 class="modal-title" id="exampleModalLabel">Richiedi una Ricetta</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form ref="form" class="contact-form" @submit.prevent="sendEmail">

              <b-form-row class="mb-3">
                <b-col><b-form-input placeholder="Nome" name="nome" required></b-form-input></b-col>
                <b-col><b-form-input placeholder="Email" name="email" type="email" required></b-form-input></b-col>
              </b-form-row>

              <b-form-row class="mb-3">
                <b-col><b-form-input placeholder="Nome del piatto" name="nome_piatto" required></b-form-input></b-col>
              </b-form-row>

              <b-form-row class="mb-3">
                <b-col><b-form-input placeholder="Regione" name="regione" required></b-form-input></b-col>
                <b-col><b-form-input placeholder="Città" name="citta" required></b-form-input></b-col>
              </b-form-row>

              <b-form-row>
                <b-col>
                  <b-form-textarea
                      name="descrizione"
                      id="textarea"
                      placeholder="Descrizione (opzionale)"
                      rows="3"
                      max-rows="6"
                  ></b-form-textarea>
                </b-col>
              </b-form-row>

              <div class="modal-footer pb-0 pl-0 pr-0">
                <span id="success-label" class="mr-auto" v-if="isSent">Richiesta inviata!</span>
                <span id="error-label" class="mr-auto" v-if="hasError">Errore nell'invio. Riprova più tardi.</span>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" :disabled="isSending">Annulla</button>
                <button type="submit" class="btn btn-primary btn-hoverable" :disabled="isSending">
                  <b-spinner small v-if="isSending"></b-spinner>
                  <span v-else>Invia</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  data() {
    return {
      isSending: false,
      hasError: false,
      isSent: false
    }
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
      setTimeout(() => {
        this.isSent = false
        this.hasError = false
      }, 3000)
    },
    sendEmail(e) {
      this.isSending = true
      emailjs.sendForm('service_ycjta4v', 'template_vh0p5hj', e.target, 'user_nO3zcnja0Qu6nleGeHvZf')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.isSending = false
            this.isSent = true
            this.resetForm()
          }, (error) => {
            console.log('FAILED...', error);
            this.isSending = false
            this.hasError = true
            this.resetForm()
          });
    }
  }
}
</script>

<style scoped>

.modal-title {
  font-size: 30px;
}

.modal-footer {
  border-top: none;
}

.modal-footer button {
  box-shadow: var(--soft-shadow);
  font-size: 1.3rem;
  border-radius: 8px;
}

.btn-hoverable {
  background-color: var(--button-color);
  border-color: var(--button-color);
}

.btn-hoverable:hover {
  background-color: var(--button-hover-color);
  border-color: var(--button-hover-color);
}

#error-label {
  color: rgb(182, 0, 0);
}

#success-label {
  color: rgb(85, 182, 0);
}

.form-control {
  font-size: 1.5rem;
}

</style>
