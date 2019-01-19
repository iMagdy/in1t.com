<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">({{ error.statusCode }}) Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Go to Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>
.error-page {
    background: #fff;
    padding: 20px;
    min-height: 60vh;
}
</style>
