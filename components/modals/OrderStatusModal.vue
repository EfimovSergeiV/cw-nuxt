<template>
  <b-modal
    id="order-status"
    ref="order-status"
    class="modal-body-edit"
    centered
    title="Узнать статус заказа"
    size="xl"
    hide-footer
    hide-header
    hide-backdrop
  >
    <div>
      <b-row class="orderstatus-modal">
        <b-col cols="8">
          <h5>Узнать статус заказа</h5>
        </b-col>
        <b-col cols="4" class="text-right">
          <b-btn
            class="mdi mdi-24px mdi-close"
            variant="dark-link"
            @click="closeSubscriebe()"
          ></b-btn>
        </b-col>
      </b-row>

      <b-row
        align-v="center"
        class="orderstatus-modal-center orderstatus-modal"
      >
        <b-col md="5">
          <b-row class="mt-4 mb-4">
            <b-col cols="12">
              <b-form-input
                v-model="code"
                autofocus
                placeholder="Введите код заказа"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="text-right" cols="12">
              <b-btn variant="link-dark" size="sm" @click="getOrderStatus()">
                Сделать запрос
              </b-btn>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="text-center" md="7">
          <b-row>
            <b-col cols="12">
              <h5 class="text-dark">Информация о заказе:</h5>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col cols="12">
              <p>{{ status }}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import OrderProduct from '../../components/OrderProduct.vue'

export default {
  // components: {
  //   OrderProduct,
  // },
  data() {
    return {
      code: null,
      status: null,
    }
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
    getOrderStatus() {
      this.$axios
        .$post('o/order-status/', {
          code: this.code,
        })
        .then((resp) => {
          this.status = resp.status
        })
        .catch(() => {
          this.status = 'Заказ не найден'
          this.$bvToast.toast('Заказ не найден', {
            title: 'Ошибка',
            variant: 'danger',
          })
        })
    },
    closeSubscriebe() {
      this.$bvModal.hide('order-status')
    },
    ...mapMutations(['cartModal']),
  },
}
</script>

<style lang="scss">
// .orderstatus-modal {
//   background-color: #0000004d;
//   background-repeat: no-repeat;
//   width: 100%;
//   background-image: url(assets/images/fire.svg);
// }
.orderstatus-modal-center {
  min-height: 40vh;
}
</style>
