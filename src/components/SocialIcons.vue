<template>
  <ul class="social list-unstyled list-inline text-center" :class="className">
    <SocialIcon :link="linkedin" icon="linkedin" :title="name + ' on LinkedIn'" />
    <SocialIcon :link="facebook" icon="facebook" :title="name + ' on Facebook'" />
    <SocialIcon :link="twitter" icon="twitter" :title="name + ' on Twitter'" />
    <SocialIcon :link="youtube" icon="youtube" :title="name + ' on YouTube'" />
    <SocialIcon :link="instagram" icon="instagram" :title="name + ' on Instagram'" />
    <SocialIcon :link="tumblr" icon="tumblr" :title="name + ' on Tumblr'" />
    <SocialIcon :link="flickr" icon="flickr" :title="name + ' on Flickr'" />
    <SocialIcon :link="pinterest" icon="pinterest" :title="name + ' on Pinterest'" />
    <SocialIcon :link="behance" icon="behance" :title="name + ' on Behance'" />
    <SocialIcon :link="slideshare" icon="slideshare" :title="name + ' on SlideShare'" />
    <SocialIcon :link="github" icon="github" :title="name + ' on GitHub'" />
  </ul>
</template>

<script>
import SocialIcon from './SocialIcon.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faSlideshare,
  faGithub,
  faBehance,
  faPinterest,
  faTumblr,
  faFlickr,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faLinkedin,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faSlideshare,
  faGithub,
  faBehance,
  faPinterest,
  faTumblr,
  faFlickr
);

// Application Data
import {
  name,
  linkedin,
  facebook,
  twitter,
  youtube,
  instagram,
  slideshare,
  github,
  behance,
  pinterest,
  tumblr,
  flickr,
} from '@/data/consts';

export default {
  name: 'SocialIcons',
  props: {
    className: String,
  },
  data: () => ({
    name,
    linkedin,
    facebook,
    twitter,
    youtube,
    instagram,
    slideshare,
    github,
    behance,
    pinterest,
    tumblr,
    flickr,
  }),
  components: {
    SocialIcon,
  },
};
</script>
