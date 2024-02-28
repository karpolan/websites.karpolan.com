<template>
  <div class="product-list container text-left py-3">
    <main>
      <article>
        <div v-if="error" class="alert alert-danger" role="alert">Data loading failed. Sorry for that :(</div>

        <LoadingSpinner :show="!loaded" />

        <div v-if="loaded && !error" class="d-flex flex-row flex-wrap justify-content-center">
          <ProductCard
            v-for="item in items"
            :key="item.id"
            :link="'/' + item.id + '/index.html'"
            :thumb="item.schema.thumbnailUrl"
            :name="item.schema.name"
            :text="item.schema.description"
          />
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import { Data } from '@/data';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    LoadingSpinner,
    ProductCard,
  },

  data: () => ({
    items: [],
    error: false,
    loaded: false,
  }),

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      Data.getAllData(this.getDataCallBack.bind(this), 'data');
    },

    getDataCallBack(dataObject) {
      if (dataObject.loaded) {
        this.items = dataObject.data;
        this.loaded = true;
        this.error = false;
      }
      if (dataObject.error) {
        this.items = [];
        this.loaded = true;
        this.error = true;
      }
      // console.log('getDataCallBack() data: ', this.data);
      // this.error = true;
    },
  },

  head() {
    // @unhead/vue plugin configuration
    return {
      title: 'Websites by KARPOLAN',
      link: [{ rel: 'canonical', href: 'https://websites.karpolan.com' }],
    };
  },
};
</script>
