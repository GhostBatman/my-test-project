<template>
  <div class="new-product"
       :class="{'active': newModalActive}">
    <div class="icon-container" @click="newModalActive = true">
      <new-icon />
    </div>
    <div class="new-modal"
         v-if="newModalActive">
      <div class="overlay">
      </div>
      <div class="modal-body">
        <p>новый товар</p>
        <button @click="newModalActive = false">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import NewIcon from './svg/NewIcon'

export default {
  name: 'NewProduct',
  components: { NewIcon },
  data: () => ({
    newModalActive: false
  }),
}
</script>

<style scoped lang="sass">
.new-product
  width: 48px
  height: 48px
  position: relative

  &.active
    z-index: 3

  .icon-container
    cursor: pointer

  .new-modal
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    display: flex
    align-items: center
    justify-content: center

    .modal-body
      background-color: white
      padding: 20px
      border-radius: 5px
      display: flex
      flex-direction: column
      align-items: center
      z-index: 1

      button
        background-color: #219afb
        color: white
        border: none
        border-radius: 2px
        padding: 10px 20px
        cursor: pointer

      p
        font-size: 18px
        text-align: center
        margin-bottom: 10px
        margin-top: 0

    .overlay
      background-color: black
      opacity: .4
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0


</style>