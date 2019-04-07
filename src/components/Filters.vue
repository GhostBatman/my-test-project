<template>
  <div class="filters">
    <div class="filters__title">Фильтры</div>
    <v-select :options="options" v-model="selected"></v-select>
  </div>
</template>

<script>
import data1 from '../1'
import data2 from '../2'
import data3 from '../3'

export default {
  name: 'Filters',
  data: () => ({
    options: ['1', '2', '3'],
    selected: ''
  }),
  watch: {
    selected (val) {
      if (val === '1') {
        this.$store.commit('loadProducts', data1)
      }
      if (val === '2') {
        this.$store.commit('loadProducts', data2)
      }
      if (val === '3') {
        this.$store.commit('loadProducts', data3)
      }
    },
  },
  mounted () {
    this.$store.commit('loadProducts', data1)
  },
}
</script>

<style scoped lang="sass">
.filters
  margin-right: 20px
  min-width: 200px
  width: 200px
  display: flex
  flex-direction: column
  align-items: flex-start

  > *
    width: 100%

  &__title
    margin-bottom: 10px
    font-size: 18px

</style>