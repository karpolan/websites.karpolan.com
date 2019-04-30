<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-name" label="Name" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          placeholder="Your name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="E-mail"
        label-for="input-email"
        _description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="name@example.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-message" label="Message" label-for="input-message">
        <b-form-textarea
          id="input-message"
          v-model="form.message"
          rows="3"
          required
          placeholder="Please enter your message here..."
        ></b-form-textarea>
      </b-form-group>

  		<div v-if="sent" class="alert alert-success" role="alert">
 				Your message has been sent successfully.
			</div>
  
      <b-button type="reset" variant="outline-danger">Reset</b-button>
	    <b-button class="float-right" type="submit" variant="outline-primary">Submit</b-button>

	  </b-form>
	</div>
</template>

<script>
import Vue from 'vue';
import FormTextarea from 'bootstrap-vue/es/components/form-textarea';
Vue.use(FormTextarea)

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
		}
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
		 * Adds requered integration scripts into <head> and/or <body>.
		 */
		addIntgrationScripts() {
			const script = document.createElement("script");
			script.type = 'text/javascript';
			script.async = true;
			script.src = "https://cdn.emailjs.com/sdk/2.3.2/email.min.js";
			document.head.appendChild(script);
		},

		/**
		 * Sends emails using 3rd party service
		 */
		sendContactEmail() {
			if (this.email === '' || this.message === '') {
				console.warn('sendContactEmail() canceled. Nothing to send.');
				return false;
			}
			window.emailjs.init("user_f84LhJ9n84Exjm3QTSbeF");
			window.emailjs
				.send('default_service', 'template_websites', {
					name: this.form.name,
					email: this.form.email,
					message: this.form.message
				})
				.then(res => {
					console.log('sendContactEmail() succesful');
					this.sent = true;
					this.resetForm();
					return true;
				})
				.catch(err => console.error('sendContactEmail() failed. Error: ', err));
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
			})
		},	

	}
}
</script>