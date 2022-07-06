<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h3>Рекомендуем:</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(product, p) in products" :key="product.id" md="6" lg="3">
        <ProductVertical :product="product" />
      </b-col>
    </b-row>

  </div>
</template>

<script>
import ProductVertical from "~/components/ProductVertical.vue"

export default {
  props: {
    products: {
      type: Array,
      default: Array,
    },
  },
  components: {
    ProductVertical,
  },
}

</script>