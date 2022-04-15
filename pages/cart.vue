<template>
  <div class="text-light mt-4">
    <div v-if="cart.length > 0" id="cart">
      <b-row class="mt-4">
        <b-col cols="12">
          <h3 class="text-warning">Товары в корзине</h3>
        </b-col>
      </b-row>
      <OrderProduct />
      <OrderForm :ip="ip" :regions="regions" />
    </div>
    <div v-else id="empty-cart">
      <h4>Ваша корзина пуста</h4>
      <Svarog />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrderProduct from '../components/OrderProduct.vue'
import OrderForm from '../components/OrderForm.vue'
import Svarog from '../components/Svarog.vue'

export default {
  components: {
    OrderProduct,
    OrderForm,
    Svarog,
  },
  async asyncData({ params, $axios }) {
    const ip = await $axios.$get(`myip`)
    const regions = await $axios.$get(`o/cdek/regions/`)

    return { ip, regions }
  },
  data() {
    return {
      dtd: null,
    }
  },
  computed: {
    ...mapState({
      client: (state) => state.client,
      cart: (state) => state.modules.cart.products,
    }),
  },
}
</script>
