<template>
  <div class="mt-10">
    <hooper
      :infinite-scroll="true"
      :center-mode="true"
      :items-to-show="5"
      pagination="no"
      :auto-play="true"
      :play-speed="17000"
      class="hooper-footer"
    >
      <slide v-for="(brand, br) in true_brand" :key="br">
        <b-img
          center
          :alt="brand.brand"
          class="footer-brand footer-brand-img point-cursor"
          width="150"
          height="100"
          :src="brand.image"
          fluid
          @click="
            $router.push({
              name: `products`,
              query: { brnd: brand.id, page: 1 },
            })
          "
        ></b-img>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import { mapGetters } from 'vuex'

export default {
  components: {
    Hooper,
    Slide,
    // HooperPagination,
  },
  computed: {
    ...mapGetters({
      true_brand: 'carouselBrand',
    }),
  },
}
</script>
