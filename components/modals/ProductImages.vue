<template>
  <b-modal
    id="product-img"
    body-bg-variant="white"
    centered
    size="lg"
    hide-footer
    hide-header
  >
    <b-carousel
      id="carousel-1"
      ref="prodImg"
      v-model="slide"
      img-width="640"
      img-height="480"
      interval="10000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(image, img) in images"
        :key="img"
        class="p-4"
        img-height="640"
        img-width="480"
        :img-src="image.image"
      ></b-carousel-slide>
    </b-carousel>
  </b-modal>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      default: Object,
    },
  },
}
</script>
