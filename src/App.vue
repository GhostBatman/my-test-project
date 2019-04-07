<template>
  <div id="app">
    <filters />
    <products />
  </div>
</template>

<script>
import Products from './components/Products'
import Filters from './components/Filters'

export default {
  name: 'app',
  components: {
    Filters,
    Products
  }
}
</script>

<style lang="sass">
#app
  max-width: 1200px
  padding: 40px 20px
  font-family: 'Roboto'
  display: flex
  align-items: flex-start
  @media (max-width: 600px)
    max-width: 90%
    flex-direction: column
    > *
      margin-bottom: 20px


</style>
