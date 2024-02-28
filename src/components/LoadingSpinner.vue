<template>
  <div class="d-flex justify-content-center">
    <div v-if="show" class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    show: Boolean,
  },
};
</script>
