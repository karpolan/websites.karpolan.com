<template>
	<div class="product-card">
		<b-card>
			<b-card-body>
				<b-card-title
					><router-link :to="link">{{ name }}</router-link></b-card-title
				>
				<b-card-sub-title v-if="subTitle" class="mb-2">{{ subTitle }}}</b-card-sub-title>
				<b-card-text>
					<router-link :to="link">
						<b-img class="product-icon" :src="icon" :alt="name" />
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
	data: () => ({
		subTitle: null,
		header: null,
		footer: null,
	}),
	props: {
		name: String,
		icon: String,
		text: String,
		link: String,
	},
	mounted() {
		// console.log('mounted(), props: ', this.$props);
	},
};
</script>
