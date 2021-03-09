<template>
  <div class="contact container text-left py-3">
    <main>
      <div class="row contact-info">
        <div class="col-12">
          <h4>Contact me</h4>
          <p>Feel free to ask any questions about web development, information technologies or online business.</p>
        </div>
      </div>
    </main>

    <section>
      <div class="row contact-form">
        <div class="col-md-8 offset-md-2 my-3">
          <ContactForm />
        </div>
      </div>
    </section>

    <article>
      <div class="row contact-social">
        <div class="col-12">
          <h4>Social networks</h4>
          <p>
            We can also discuss web mastering and web-site development topics on social networks. I am registered under
            the name
            <b>KARPOLAN</b> almost everywhere.
          </p>
          <SocialIcons />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'contact',
  components: {
    ContactForm,
    SocialIcons,
  },
};
</script>
