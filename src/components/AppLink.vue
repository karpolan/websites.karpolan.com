<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" :target="targetToRender" rel="noopener noreferrer">
    <slot />
  </a>
  <router-link v-else v-bind="$props" :target="targetToRender">
    <slot />
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

/**
 * Renders <router-link/> for internal links and <a/> tag for external links.
 * External links are detected by the presence of 'http' in the 'to' prop.
 * External links are opened in a new tab.
 * @component AppLink
 */
export default {
  name: 'AppLink',
  // inheritAttrs: false, // Don't use this option, because it will break styles for <router-link/>

  props: {
    ...RouterLink.props,
    target: String,
  },

  computed: {
    isExternalLink() {
      return this?.to?.startsWith('http');
    },
    targetToRender() {
      return this.target ?? this.isExternalLink ? '_blank' : undefined;
    },
  },
};
</script>
