<template>
  <div>
    <form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="mb-3">
        <label for="input-name" class="form-label">Name</label>
        <input v-model="form.name" placeholder="Your name" id="input-name" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="input-email" class="form-label">E-mail *</label>
        <input
          v-model="form.email"
          placeholder="name@example.com"
          required
          type="email"
          id="input-email"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="input-message" class="form-label">Message *</label>
        <textarea
          v-model="form.message"
          placeholder="Please enter your message here..."
          required
          id="input-message"
          class="form-control"
          rows="3"
        ></textarea>
      </div>

      <div v-if="sent" class="alert alert-success" role="alert">Your message has been sent successfully.</div>

      <button type="reset" class="btn btn-outline-danger">Reset</button>
      <button type="submit" class="btn btn-outline-primary float-end">Submit</button>
    </form>
  </div>
</template>

<script>
// TODO: replace
// import { BFormTextarea } from 'bootstrap-vue';
// Vue.component('b-form-textarea', BFormTextarea);

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        email: '',
        name: '',
        message: '',
      },
      show: true,
      sent: false,
    };
  },

  mounted() {
    this.addIntgrationScripts();
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.sendContactEmail();
    },

    onReset(evt) {
      evt.preventDefault();
      this.resetForm();
      this.sent = false;
    },

    /**
     * Adds requeued EmailJs integration scripts into <head> and/or <body>.
     */
    addIntgrationScripts() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js';
      document.head.appendChild(script);
    },

    /**
     * Sends emails using 3rd party service
     */
    sendContactEmail() {
      if (this.email === '' || this.message === '') {
        console.warn('sendContactEmail() canceled. Nothing to send.'); // eslint-disable-line no-console
        return false;
      }
      window.emailjs.init('user_f84LhJ9n84Exjm3QTSbeF');
      window.emailjs
        .send('default_service', 'template_websites', {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        })
        .then(() => {
          console.log('sendContactEmail() successful'); // eslint-disable-line no-console
          this.sent = true;
          this.resetForm();
          return true;
        })
        .catch(
          (err) => console.error('sendContactEmail() failed. Error: ', err) // eslint-disable-line no-console
        );
    },

    /**
     * Reset form and field validation
     */
    resetForm() {
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.message = '';

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
