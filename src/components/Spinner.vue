<template>
	<b-spinner v-if="show" class="d-block mx-auto" variant="light" label="Loading..." role="status">
		<span class="sr-only">Loading...</span>
	</b-spinner>
</template>

<script>
export default {
	name: 'Spinner',
	props: {
		show: Boolean,
	},
};
</script>
