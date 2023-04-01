<template>
  <section class="contacts">
    <p>
      <font-awesome-icon :icon="['far', 'calendar']" size="2x" class="mr-3 align-middle" />
      <time class="align-middle" datetime="1977-04-23 02:15">April 23, 1977</time>
    </p>
    <p>
      <font-awesome-icon :icon="['fas', 'phone']" size="2x" class="mr-3 align-middle" />
      <a class="align-middle" rel="noopener noreferrer" href="tel:+421919321977">+421 919 321 977</a>
    </p>
    <p>
      <font-awesome-icon :icon="['far', 'envelope']" size="2x" class="mr-3 align-middle" />
      <a
        class="align-middle"
        target="_blank"
        rel="noopener noreferrer"
        :href="'mailto:i@karpolan.com?subject=' + emailSubject"
        >i@karpolan.com</a
      >
    </p>
    <div>
      <font-awesome-icon :icon="['fas', 'home']" size="2x" class="mr-3 align-middle" />
      <address class="d-inline">Nivy, Bratislava, SLOVAKIA</address>
      <p></p>
    </div>
  </section>
</template>

<script>
// Font Awesome
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCalendar, faPhone, faHome, faEnvelope);

export default {
  name: 'ContactsBlock',
  props: {
    emailSubject: String,
  },
};
</script>
