<template>
  <div>
    <b-row>
      <b-col
        v-for="product in prods"
        :key="product.id"
        cols="6"
        lg="3"
        class=""
      >
        <ProductVertical :product="product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProductVertical from '../ProductVertical.vue'

export default {
  components: {
    ProductVertical,
  },
  props: {
    prods: {
      type: Object,
      default: Object,
    },
  },
}
</script>
