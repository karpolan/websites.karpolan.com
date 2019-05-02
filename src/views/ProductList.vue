<template>
	<div class="list container text-left py-3">
		<main>
			<article class="product-list">
				<b-alert :show="error" variant="danger" role="alert">Data loading failed. Sorry for that :(</b-alert>

				<Spinner :show="!loaded" />

				<b-card-group v-if="loaded" columns>
					<ProductCard
						v-for="item in items"
						:key="item.id"
						:link="'/' + item.id"
						:name="item.schema.name"
						:text="item.schema.description"
						:icon="item.schema.image[0]"
					/>
				</b-card-group>
			</article>
		</main>
	</div>
</template>

<script>
import { Data } from '@/data';
import Spinner from '@/components/Spinner';
import ProductCard from '@/components/ProductCard';

export default {
	name: 'ProductList',
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
			console.log(this.items);
		},
	},

	components: {
		ProductCard,
		Spinner,
	},
};
</script>
