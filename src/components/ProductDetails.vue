<template>
	<div class="product-details">
		<b-row>
			<b-col class="name"
				><h1>{{ name }}</h1></b-col
			>
		</b-row>

		<b-row>
			<b-col class="text">
				<b-img class="product-icon" :src="icon" :alt="name" />
				{{ text }}
			</b-col>
		</b-row>

		<b-row>
			<b-col class="images">
				<b-carousel :indicators="false" :interval="3000">
					<b-carousel-slide v-for="(item, index) in images" :key="'image' + index">
						<b-img class="product-image" slot="img" :src="item" :alt="name + ' image #' + index" />
					</b-carousel-slide>
				</b-carousel>
			</b-col>
		</b-row>

		<b-row>
			<b-col class="buttons">
				<b-button-toolbar>
					<a
						v-for="(item, index) in offers"
						:key="'button' + index"
						class="product-button"
						:href="item.url"
						target="_blank"
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

	data: () => ({}),

	props: {
		id: String,
		name: String,
		icon: String,
		text: String,
		images: Array,
		offers: Array,
	},

	mounted() {
		// console.log('mounted(), props: ', this.$props);
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
