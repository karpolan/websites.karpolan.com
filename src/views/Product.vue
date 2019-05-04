<template>
	<div class="prooduct container text-left py-3">
		<main>
			<article>
				<b-alert :show="error" variant="danger" role="alert"
					>Data loading for "{{ id }}" object failed. Sorry for that :(</b-alert
				>

				<Spinner :show="!loaded" />

				<ProductDetails
					v-if="loaded && !error"
					:id="id"
					:link="data.url"
					:name="data.name"
					:description="data.description"
					:text="data.text"
					:thumb="thumb"
					:images="data.image"
					:offers="data.offers"
				/>
			</article>
		</main>

		<script type="application/ld+json">
			{{jsonData}}
		</script>
	</div>
</template>

<script>
import { Data } from '@/data';
import Spinner from '@/components/Spinner';
import ProductDetails from '@/components/ProductDetails';

export default {
	name: 'ProductList',
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
			}
			// console.log('getDataCallBack() data: ', this.data);
		},
	},

	components: {
		ProductDetails,
		Spinner,
	},
};
</script>
