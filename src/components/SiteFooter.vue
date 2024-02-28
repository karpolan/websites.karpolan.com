<template>
  <footer class="footer">
    <div class="container small pt-3 bg-light">
      <div class="row">
        <div class="col-md-3 d-none d-md-block">
          <ul class="list-unstyled">
            <li>
              <app-link to="https://software.karpolan.com" target="" :title="'Software created by ' + name"
                >Software</app-link
              >
            </li>
            <li>
              <app-link to="/" :title="'Websites created by ' + name">Websites</app-link>
            </li>
            <li>
              <app-link to="https://karpolan.com" target="" title="Personal website">Personal</app-link>
            </li>
          </ul>
        </div>

        <div class="col-md-3 d-none d-md-block">
          <ul class="list-unstyled">
            <li>
              <app-link to="https://book-product.karpolan.com" :title="'Books by ' + name">Books</app-link>
            </li>
            <li>
              <app-link to="https://karpolan.blogspot.com" :title="'Articles by ' + name">Articles</app-link>
            </li>
            <li>
              <app-link to="https://blog.karpolan.com" :title="'Blog by ' + name">Blog</app-link>
            </li>
          </ul>
        </div>

        <div class="social col-md-6 text-center text-md-right">
          <ul class="list-unstyled list-inline social-icons d-none d-md-block">
            <SocialIcon :link="linkedin" icon="linkedin" :title="name + ' on LinkedIn'" />
            <SocialIcon :link="facebook" icon="facebook" :title="name + ' on Facebook'" />
            <SocialIcon :link="twitter" icon="twitter" :title="name + ' on Twitter'" />
            <SocialIcon :link="github" icon="github" :title="name + ' on GitHub'" />
          </ul>

          <div class="copyright pb-3 d-none d-sm-block">
            Copyright &copy; 1996-{{ new Date().getFullYear() + ' ' }}
            <app-link to="https://karpolan.com/" target="">KARPOLAN</app-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialIcon from './SocialIcon.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faFacebook, faTwitter, faGithub);

// Application Data
import { name, linkedin, facebook, twitter } from '@/data/consts';
import AppLink from './AppLink.vue';

export default {
  name: 'SiteFooter',

  components: {
    AppLink,
    SocialIcon,
  },

  data: () => ({
    name,
    linkedin,
    facebook,
    twitter,
    github: 'https://github.com/karpolan/websites.karpolan.com',
  }),
};
</script>
