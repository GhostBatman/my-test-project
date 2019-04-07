<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
  <div class="image-carousel" ref="activeSliderContainer"
       v-touch:swipe.right="onLeftArrowClick"
       v-touch:swipe.left="onRightArrowClick">
    <div class="image-carousel__arrow image-carousel__arrow_left"
         :class="{'disable': leftArrowDisable}"

         @click="onLeftArrowClick">
      <carousel-arrow-left />
    </div>
    <div class="image-carousel__arrow image-carousel__arrow_right"
         :class="{'disable': rightArrowDisable}"

         @click="onRightArrowClick">
      <carousel-arrow-right />
    </div>
    <div class="image-carousel__inner" ref="slides">
      <div class="image-carousel__item" ref="slide"
           v-for="(image, index) in images"
           @click="onImageClick(image)"
           :key="index">
        <img :src="image" alt="img">
      </div>
    </div>
  </div>
</template>

<script>
import CarouselArrowRight from './svg/CarouselArrowRight'
import CarouselArrowLeft from './svg/CarouselArrowLeft'

export default {
  name: 'ImageCarousel',
  components: { CarouselArrowLeft, CarouselArrowRight },
  props: {
    images: { type: Array, default: () => [] }
  },
  data: () => ({
    activeImageId: 0,
  }),
  methods: {
    onImageClick (image) {
      this.$emit('onImageClick', image)
    },
    onRightArrowClick () {
      if (this.activeImageId < this.images.length - 1) {
        this.activeImageId++
      }
    },
    onLeftArrowClick () {
      if (this.activeImageId > 0) {
        this.activeImageId--
      }
    }
  },
  computed: {
    leftArrowDisable () {
      return this.activeImageId === 0
    },
    rightArrowDisable () {
      return this.activeImageId === this.images.length - 1
    }
  },
  watch: {
    activeImageId (val) {
      let activeSlider = this.$refs.slide[val]
      let slides = this.$refs.slides
      const left = activeSlider.offsetLeft
      slides.style.left = `-${ left }px`
    }
  },
  mounted () {
    let activeSlider = this.$refs.slide[0]
    let slides = this.$refs.slides
    const left = activeSlider.offsetLeft
    slides.style.left = `-${ left }px`
  }
}
</script>

<style scoped lang="sass">
.image-carousel
  position: relative
  height: 75px
  width: 100px
  align-self: center
  margin-top: 26px

  &__arrow
    position: absolute
    top: 50%
    transform: translateY(-50%)
    width: 43px
    height: 43px
    z-index: 1
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    transition: height .1s ease, width .1s ease

    &.disable
      filter: grayscale(100)
      cursor: not-allowed

      &:hover
        width: 43px
        height: 43px

    &:hover
      width: 48px
      height: 48px

    svg
      width: 100%
      height: 100%

    &_left
      left: -50px

    &_right
      right: -50px


  img
    max-width: 100%
    max-height: 100%

  &__item
    width: 100px
    height: 75px
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    transform: scale(1)
    transition: transform .2s ease

    &:hover
      transform: scale(1.1)

  &__inner
    position: absolute
    top: 0
    left: 0
    transition: left .2s ease
    display: flex
    align-items: center

</style>