<template>
  <div class="product-card">
    <b-card>
      <b-card-body>
        <b-card-title>
          <router-link :to="link">{{ name }}</router-link>
        </b-card-title>
        <b-card-text>
          <router-link :to="link">
            <b-img class="product-thumb" :src="thumb" :alt="name" />
          </router-link>
          {{ text }}
          <router-link class="product-button" :to="link">
            <b-button variant="outline-primary">Details</b-button>
          </router-link>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import '@/assets/product.css'; // Styling for product list, cards, and details

export default {
  name: 'ProductCard',
  props: {
    link: String,
    thumb: String,
    name: String,
    text: String,
  },
  data: () => ({}),
  mounted() {
    // console.log('mounted(), props: ', this.$props);
  },
};
</script>
