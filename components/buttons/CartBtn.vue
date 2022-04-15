<template>
  <transition name="fade" mode="out-in">
    <b-btn
      v-if="filterCart(product.id)"
      key="in-cart"
      :variant="variant.del"
      class="mdi mdi-16px mdi-icon mdi-cart"
      @click="delProductToCart(product)"
    >
      <h6 v-if="title" class="hr ml-1">В корзине</h6>
    </b-btn>
    <b-btn
      v-else
      key="out-cart"
      :variant="variant.add"
      class="mdi mdi-16px mdi-icon mdi-cart-outline"
      @click="addProductToCart(product)"
    >
      <h6 v-if="title" class="hr ml-1">В корзину</h6>
    </b-btn>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      default: Object,
    },
    status: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: Object,
      default: Object.create({ add: 'link', del: 'link' }),
    },
  },
  computed: {
    ...mapGetters({
      cartID: 'modules/cart/cartID',
    }),
  },
  methods: {
    filterCart(id) {
      return this.cartID.filter((n) => n === id).length !== 0
    },
    ...mapActions({
      addProductToCart: 'modules/cart/addProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
    }),
  },
}
</script>
