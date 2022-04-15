<template>
  <div v-if="likes.length > 0">
    <b-row>
      <b-col
        v-for="product in likes"
        :key="product.id"
        cols="6"
        lg="3"
        class=""
      >
        <ProductVertical :product="product" />
      </b-col>
    </b-row>
  </div>
  <div v-else>
    <b-row class="mt-4">
      <b-col cols="12">
        <h1>У вас нет сохраннёных товаров</h1>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductVertical from '../ProductVertical.vue'

export default {
  components: {
    ProductVertical,
  },
  // props: {
  //   like: {
  //     type: Object,
  //     default: Object,
  //   },
  // },
  computed: {
    ...mapState({
      likes: (state) => state.modules.favorites.products,
    }),
  },
}
</script>
