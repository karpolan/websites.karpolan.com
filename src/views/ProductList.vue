<template>
  <div class="product-list container text-left py-3">
    <main>
      <article>
        <b-alert :show="error" variant="danger" role="alert">Data loading failed. Sorry for that :(</b-alert>

        <LoadingSpinner :show="!loaded" />

        <b-card-group v-if="loaded && !error" columns>
          <ProductCard
            v-for="item in items"
            :key="item.id"
            :link="'/' + item.id + '/index.html'"
            :thumb="item.schema.thumbnailUrl"
            :name="item.schema.name"
            :text="item.schema.description"
          />
        </b-card-group>
      </article>
    </main>
  </div>
</template>

<script>
import { Data } from '@/data';
import LoadingSpinner from '@/components/LoadingSpinner';
import ProductCard from '@/components/ProductCard';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    LoadingSpinner,
  },

  metaInfo: {
    title: 'Websites by KARPOLAN',
    link: [{ rel: 'canonical', href: 'https://websites.karpolan.com' }],
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
};
</script>
