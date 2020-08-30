<template>
  <div class="product-details">
    <b-row>
      <b-col class="name">
        <h1>{{ name }}</h1>
        <h6 v-if="dates" v-html="dates" class="font-italic d-none d-sm-block"></h6>
      </b-col>
    </b-row>

    <b-row v-if="description">
      <b-col class="description">{{ description }}</b-col>
    </b-row>

    <b-row>
      <b-col class="images">
        <a slot="img" :href="link" :target="target" rel="noopener noreferrer">
          <b-carousel :indicators="false" :interval="3000">
            <b-carousel-slide v-for="(item, index) in images" :key="'image' + (index + 1)">
              <b-img slot="img" class="product-image" :src="item" :alt="name + ' - Image #' + (index + 1)" />
            </b-carousel-slide>
          </b-carousel>
        </a>
      </b-col>
    </b-row>

    <b-row v-if="text">
      <b-col class="text">{{ text }}</b-col>
    </b-row>

    <b-row v-if="offers">
      <b-col class="buttons">
        <b-button-toolbar>
          <a
            v-for="(item, index) in offers"
            :key="'button' + index"
            class="product-button"
            :href="item.url"
            :target="target"
            rel="noopener noreferrer"
          >
            <b-button class="product-button" :variant="getButtonVariant(index)">{{ item.name }}</b-button>
          </a>
        </b-button-toolbar>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import '@/assets/product.css'; // Styling for product list, cards, and details

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

  data: () => ({}),

  mounted() {
    // eslint-disable-next-line
    // console.log('mounted(), props: ', this.$props);
  },

  computed: {
    target() {
      if (this.link && this.link.includes('//')) return '_blank';
      return '_self';
    },
  },

  methods: {
    /**
     * Returns cyclic variant of Bootstrap button by given Index
     */
    getButtonVariant(index) {
      const BUTTON_VARIANTS = [
        'outline-primary',
        // "outline-secondary",
        'outline-success',
        'outline-warning',
        'outline-danger',
        'outline-info',
      ];
      return BUTTON_VARIANTS[index % BUTTON_VARIANTS.length];
    },
  },
};
</script>
