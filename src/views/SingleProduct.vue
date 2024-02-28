<template>
  <div class="product container text-left py-3">
    <main>
      <article>
        <div v-if="error" class="alert alert-danger" role="alert">
          Data loading for "{{ id }}" object failed. Sorry for that :(
        </div>

        <LoadingSpinner :show="!loaded" />

        <ProductDetails
          v-if="loaded && !error"
          :id="id"
          :link="data.url"
          :name="data.name"
          :dates="dates"
          :description="data.description"
          :text="data.text"
          :thumb="thumb"
          :images="data.image"
          :offers="data.offers"
        />
      </article>
    </main>

    <component :is="'script'" type="application/ld+json">
      {{ jsonData }}
    </component>
  </div>
</template>

<script>
import { Data } from '@/data';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ProductDetails from '@/components/ProductDetails.vue';

export default {
  name: 'SingleProduct',
  components: {
    ProductDetails,
    LoadingSpinner,
  },

  data: () => ({
    id: '',
    data: {},
    error: false,
    loaded: false,
  }),

  mounted() {
    // console.log('mounted(), id: ', this.$route.params.id);
    this.getData(this.$route.params.id);
  },

  beforeRouteUpdate(to, from, next) {
    // console.log('beforeRouteUpdate(), id: ', to.params.id);
    this.getData(to.params.id);
    next();
  },

  computed: {
    thumb() {
      let result = '';
      if (this.data.thumbnailUrl) {
        result = this.data.thumbnailUrl;
      } else {
        // There is no "thumbnailUrl" property, use data from "image"
        if (this.data.image) result = this.data.image;
        if (Array.isArray(result)) result = result[0]; // Use first image if array
      }
      return result;
    },

    dates() {
      if (!this.data.dateCreated) return null;

      let result = this.data.dateCreated;
      if (this.data.expires && this.data.expires.length > 0) {
        result += ' &ndash; ' + this.data.expires;
      } else {
        result += ' &ndash; current time';
      }
      return result;
    },

    jsonData() {
      return JSON.stringify(this.data);
    },
  },

  methods: {
    getData(id) {
      // Load single product data form `/data/${id}/` folder into "data" state
      Data.getData(id, this.getDataCallBack.bind(this), 'data');
    },

    getDataCallBack(dataObject) {
      if (dataObject.loaded) {
        this.id = dataObject.id;
        this.data = dataObject.data;
        this.loaded = true;
        this.error = false;
      }
      if (dataObject.error) {
        this.id = dataObject.id;
        this.data = {};
        this.loaded = true;
        this.error = true;
        // Redirect to Error page
        this.$router.push('/404');
      }
      // console.log('getDataCallBack() data: ', this.data);
    },
  },

  head() {
    // @unhead/vue plugin configuration
    const title = `${this?.data?.name} - Websites by KARPOLAN`;
    const link = [{ rel: 'canonical', href: `https://websites.karpolan.com/${this?.id}/index.html` }];
    return {
      title,
      link,
    };
  },
};
</script>
