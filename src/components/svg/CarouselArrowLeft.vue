<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 43">
    <defs>
      <filter id="Path_216" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Left_arrow" data-name="Left arrow" transform="translate(-682 -420)">
      <g class="cls-3" transform="matrix(1, 0, 0, 1, 682, 420)">
        <path id="Path_216-2" data-name="Path 216" class="cls-1" d="M5,0H20a5,5,0,0,1,5,5V20a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(9 6)"/>
      </g>
      <g id="Symbol_84" data-name="Symbol 84" transform="translate(1408.1 -249) rotate(90)">
        <path id="Path_36" data-name="Path 36" class="cls-2" d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z" transform="translate(681 700)"/>
      </g>
    </g>
  </svg>

</template>

<script>
export default {
  name: 'CarouselArrowLeft'
}
</script>

<style scoped lang="sass">
.cls-1
  fill: #fff


.cls-2
  fill: #2699fb


.cls-3
  filter: url(#Path_216)

</style>