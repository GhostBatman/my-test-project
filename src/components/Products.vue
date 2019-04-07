<template>
  <div class="products">
    <product-card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>

import ProductCard from './ProductCard'

export default {
  name: 'Products',
  components: { ProductCard },
  data: () => ({
    products: []
  }),

  computed: {
    currentProducts () {
      return this.$store.state.products
    },
  },
  watch: {
    currentProducts (products) {
      this.products = products
    }
  },
}
</script>

<style scoped lang="sass">
.products
  flex-grow: 1
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  margin-right: -30px

</style>