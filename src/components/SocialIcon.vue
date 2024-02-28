<template>
  <li class="list-inline-item">
    <a target="_blank" rel="noopener noreferrer" :href="link" :title="title">
      <font-awesome-icon :icon="['fab', icon]" size="2x" />
    </a>
  </li>
</template>

<script>
import '@/assets/social-colors.css'; // Colors for social icons

export default {
  name: 'SocialIcon',
  props: {
    link: String,
    title: String,
    icon: String,
  },
};
</script>
