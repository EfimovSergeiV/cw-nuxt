<template>
  <div>
    <b-modal
      id="cart-modal"
      ref="cart-modal"
      centered
      title="Товар добавлен в корзину"
      size="xl"
      header-bg-variant="dark"
      body-bg-variant="dark"
      hide-footer
      hide-header
    >
      <div>
        <transition name="fade" mode="out-in">
          <div v-if="cart.length > 0">
            <b-row class="mb-4">
              <b-col cols="6">
                <h5 class="text-light">Товар добавлен в корзину</h5>
              </b-col>
              <b-col cols="6" class="text-right">
                <b-btn
                  class="m-1"
                  variant="outline-light"
                  @click="closeCartModal"
                >
                  Продолжить покупки
                </b-btn>
                <b-btn class="m-1" to="/cart" variant="warning">
                  Перейти в корзину
                </b-btn>
              </b-col>
            </b-row>
            <OrderProduct />
            <b-row class="mt-4">
              <b-col cols="6">
                <b-form-checkbox
                  size="lg"
                  class="text-light"
                  @input="cartModal"
                >
                  Больше не показывать это окно
                </b-form-checkbox>
              </b-col>
            </b-row>
            <b-row v-if="showOrderForm">
              <b-col cols="12">
                <OrderForm />
              </b-col>
            </b-row>
          </div>
          <div v-else>
            <b-row>
              <b-col cols="12">
                <h4 class="text-light text-center">В корзине нет товаров</h4>
              </b-col>
            </b-row>
          </div>
        </transition>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import OrderProduct from '../../components/OrderProduct.vue'

export default {
  components: {
    OrderProduct,
  },
  computed: {
    ...mapState({
      statusCartModal: (state) => state.statusCartModal,
      cart: (state) => state.modules.cart.products,
    }),
  },
  methods: {
    closeCartModal() {
      this.$refs['cart-modal'].hide()
    },
    ...mapMutations(['cartModal']),
  },
}
</script>
