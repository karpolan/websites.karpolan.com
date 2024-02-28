<template>
  <div class="product-details">
    <div class="row">
      <div class="col">
        <h1>{{ name }}</h1>
        <h6 v-if="dates" v-html="dates" class="fst-italic d-none d-sm-block"></h6>
      </div>
    </div>

    <div class="row" v-if="description">
      <div class="col description">{{ description }}</div>
    </div>

    <div class="row">
      <div class="col">
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(item, index) in images"
              :key="'image' + (index + 1)"
              :class="index < 1 ? 'carousel-item active' : 'carousel-item'"
            >
              <app-link :to="link">
                <img :src="item" :alt="name + ' - Image #' + (index + 1)" class="product-image" />
              </app-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="text">
      <div class="col text">{{ text }}</div>
    </div>

    <div class="row" v-if="offers">
      <div class="col buttons">
        <div class="btn-toolbar" role="toolbar" aria-label="User actions">
          <app-link
            v-for="(item, index) in offers"
            :key="'button' + index"
            :to="item.url"
            :class="'product-button btn ' + getButtonVariant(index)"
            type="button"
            >{{ item.name }}</app-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/product.css'; // Styling for product list, cards, and details
import AppLink from '@/components/AppLink.vue';

export default {
  name: 'ProductDetails',
  props: {
    id: String,
    link: { type: String, default: null },
    name: String,
    dates: { type: String, default: null },
    description: { type: String, default: null },
    text: { type: String, default: null },
    images: Array,
    offers: { type: Array, default: null },
  },

  components: {
    AppLink,
  },

  methods: {
    /**
     * Returns cyclic variant of Bootstrap button by given Index
     */
    getButtonVariant(index) {
      const BUTTON_VARIANTS = [
        'btn-outline-primary',
        // "btn-outline-secondary",
        'btn-outline-success',
        'btn-outline-warning',
        'btn-outline-danger',
        'btn-outline-info',
      ];
      return BUTTON_VARIANTS[index % BUTTON_VARIANTS.length];
    },
  },
};
</script>
