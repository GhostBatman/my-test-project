<template>
  <div class="product"
       ref="product"
       :class="{'active': detailsActive}"
       @mouseleave="onLeave"
  >
    <div class="product_new">
      <new-product />
    </div>

    <div class="inner" ref="inner">
      <div class="product__rating rating">
        <div class="rating__container">
          <evaluate-rating-stars />
        </div>
        <div class="rating__text">
          12 оценок
        </div>
      </div>
      <div class="product__image-container">
        <img v-if="product.iamges"
             :src="product.iamges[0]" alt="img" ref="mainImage">
      </div>
      <a :href="product.id" class="product__name">{{ product.name }}</a>
      <div class="product__price">
        {{ product.price }} &#x20bd;
      </div>
      <div class="product__details details">
        <div class="details__accordion accordion">
          <image-carousel v-if="product.iamges.length > 1"
                          :images="product.iamges"
                          @onImageClick="newMainImage" />
          <div class="accordion__text">
            {{ product.description }}
          </div>
        </div>
        <div class="details__trigger">
          <div @click="changeAccordionState">
            <product-detail-trigger />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetailTrigger from './svg/ProductDetailTrigger'
import EvaluateRatingStars from './svg/EvaluateRatingStars'
import ImageCarousel from './ImageCarousel'
import NewProduct from './NewProduct'

export default {
  name: 'ProductCard',
  components: { NewProduct, ImageCarousel, EvaluateRatingStars, ProductDetailTrigger },
  props: { product: {} },
  data: () => ({
    detailsActive: false,
    currentImage: '',
  }),
  methods: {
    newMainImage (e) {
      this.$refs.mainImage.setAttribute('src', e)
    },
    onLeave () {
      this.detailsActive = false
      setTimeout(() => {
        this.$refs.product.style.zIndex = 'auto'
        this.$refs.product.style.height = 'auto'
        this.$refs.inner.style.position = 'static'
      }, 400)
    },
    changeAccordionState () {
      this.detailsActive = !this.detailsActive
      if (this.detailsActive) {
        this.$refs.product.style.zIndex = '1'
        this.$refs.product.style.height = this.$refs.inner.clientHeight + 'px'
        this.$refs.inner.style.position = 'absolute'

      } else {
        setTimeout(() => {
          this.$refs.product.style.zIndex = 'auto'
          this.$refs.product.style.height = 'auto'
          this.$refs.inner.style.position = 'static'
        }, 400)
      }
    }
  },

}
</script>

<style scoped lang="sass">
.product
  width: 220px
  margin-right: 30px
  margin-bottom: 30px
  display: flex
  position: relative
  &_new
    position: absolute
    top: -20px
    right: -14px

  .inner
    min-height: calc(100% - 30px)
    background-color: white
    width: calc(100% - 30px)
    max-width: 100%
    padding: 15px 10px
    box-shadow: 0px 5px 9px 3px rgba(211, 211, 211, 1)
    display: flex
    flex-direction: column
    font-family: 'Roboto'
    font-weight: 400
    transition: height .3s ease


  .rating
    margin-bottom: 10px

    &__container
      margin-right: 10px

    &__text
      margin-top: 4px
      color: #dbdbdb
      font-size: 14px

  .accordion
    overflow: hidden
    display: flex
    flex-direction: column
    max-height: 0
    transition: all .3s ease
    position: relative

    &::before
      content: ''
      position: absolute
      left: 0
      top: 15px
      width: 100%
      height: 2px
      background-color: #dbdbdb


    &__text
      margin-top: 20px
      display: block
      font-size: 14px
      color: #dbdbdb

  .details
    &__trigger
      display: flex
      width: 100%
      align-items: center
      justify-content: center
      position: relative
      height: 32px
      transform: rotate(0deg)
      transition: all .2s ease

      svg,
      > div
        width: 32px
        height: 32px
        z-index: 1

      &::before
        content: ''
        position: absolute
        left: 0
        top: 50%
        transform: translateY(50%)
        width: 100%
        height: 2px
        background-color: #dbdbdb

  &.active
    .inner
      z-index: 1

    .accordion
      max-height: 1000px

    .details
      &__trigger
        svg,
        > div
          transform: rotate(90deg)


  &__rating
    display: flex
    align-items: center

  &__price
    display: block

  &__name
    margin-top: auto
    font-size: 18px
    color: #219afb
    text-decoration: none
    margin-bottom: 12px
    display: block

  &__image-container
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    flex-grow: 1
    margin-bottom: 10px

    img
      max-width: 100%
      transform: scale(1)
      transition: transform .2s ease

      &:hover
        transform: scale(1.1)

</style>