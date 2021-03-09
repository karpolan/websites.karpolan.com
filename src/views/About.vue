<template>
  <div class="about container text-left py-3">
    <main class="about about-main row">
      <section class="photo col-md-6 text-center">
        <picture>
          <source class="media-xl" media="(min-width: 1200px)" srcset="/img/about/max.jpg" />
          <source class="media-lg" media="(min-width: 992px)" srcset="/img/about/720.jpg" />
          <source class="media-md" media="(min-width: 768px)" srcset="/img/about/640.jpg" />
          <source class="media-sm" media="(min-width: 576px)" srcset="/img/about/640.jpg" />
          <img class="img-fluid rounded" src="/img/about/480.jpg" alt="Anton Karpenko" />
        </picture>
      </section>

      <div class="col-md-6">
        <div class="offset-md-1">
          <section class="intro">
            <h6 class="d-none d-md-block">Hello everybody, I am</h6>
            <h3>Anton Karpenko</h3>
            <h4>Professional Webmaster</h4>
            <p>
              I participated in the creation of many websites, ecomerce portals, SaaS, landing pages, advertising
              materials and other web resources. I created the first online page in 1996 and still love to make
              websites.
            </p>
          </section>

          <Contacts emailSubject="From WEBSITES.KARPOLAN.COM About" />

          <section class="social">
            <p>
              Follow me on any social network you want. I am
              <b>KARPOLAN</b> everywhere.
            </p>
            <SocialIcons />
          </section>
        </div>
      </div>
    </main>

    <aside class="about about-aside row">
      <div class="col-12 mt-3">
        <h4>Tech specification</h4>
        <section class="tech">
          <p>This web-site is built using the following technologies and frameworks:</p>
          <ul>
            <li>
              <b
                ><a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  >JavaScript</a
                >
              </b>
              - is the only programming language used.
            </li>
            <li>
              <b><a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue</a></b>
              - front-end is built using Vue.js progressive framework.
            </li>
            <li>
              <b><a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com">Bootstrap</a></b>
              - visual styles are provided by
              <a target="_blank" rel="noopener noreferrer" href="https://bootstrap-vue.js.org">Bootstrap + Vue</a>
              library.
            </li>
            <li>
              <b><a target="_blank" rel="noopener noreferrer" href="https://fontawesome.com/">Font Awesome</a></b>
              - icons and mnemonics powered by
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/FortAwesome/vue-fontawesome"
                >Font Awesome Vue component</a
              >.
            </li>
            <li>
              <b><a target="_blank" rel="noopener noreferrer" href="https://www.json.org">JSON</a></b>
              - all data is stored in static .json files.
            </li>
            <li>
              <b><a target="_blank" rel="noopener noreferrer" href="https://git-scm.com">Git</a></b>
              - the version control and CI/CD is powerd by
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/karpolan/">GitHub</a>.
            </li>
          </ul>
        </section>
      </div>
    </aside>
  </div>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue';
import Contacts from '@/components/Contacts.vue';

export default {
  name: 'about',
  components: {
    SocialIcons,
    Contacts,
  },
};
</script>
