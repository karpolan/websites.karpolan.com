<template>
  <div class="product-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="link">{{ name }}</router-link>
        </h4>
        <p class="card-text">
          <router-link :to="link">
            <img :src="thumb" :alt="name" class="product-thumb" />
          </router-link>
          {{ text }}
          <router-link :to="link" class="product-button btn btn-outline-primary" type="button">Details</router-link>
        </p>
      </div>
    </div>
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
};
</script>
