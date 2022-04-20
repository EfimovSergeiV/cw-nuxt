<template>
  <div class="text-light">
    <b-row id="order" class="mt-4 mb-4">
      <b-col cols="12">
        <h3>{{ orderinfo.order_number }}</h3>
      </b-col>
    </b-row>
    <b-row id="products">
      <b-col class="mt-4 mb-2" cols="12">
        <h5>Позиции заказа:</h5>
      </b-col>

      <b-col
        v-for="(product, num) in orderinfo.client_product"
        :key="num"
        class="mt-2 mb-2"
        md="6"
        lg="4"
      >
        <div class="p-2" style="background-color: #fff; border-radius: 3px">
          <b-row>
            <b-col class="text-center" cols="12">
              <b-img :src="product.preview_image" width="140"></b-img>
            </b-col>
          </b-row>
          <b-row class="text-dark">
            <b-col class="text-center" cols="12">
              <p>
                {{ product.name }}
              </p>
            </b-col>
            <b-col class="text-right" cols="12">
              <p class="mr-2">{{ product.price.toLocaleString() }} RUB</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 mb-4">
      <b-col md="6">
        <a :href="order.formUrl" class="text-light">
          <h4>Открыть форму оплаты</h4>
          <h5 class="text-danger">{{ order.error }}</h5>
        </a>
      </b-col>
      <b-col class="text-right" md="6">
        <b-row>
          <b-col cols="12">
            Сумма по позициям:
            {{ orderinfo.position_total.toLocaleString() }} <small>RUB</small>
          </b-col>
          <b-col v-if="orderinfo.delivery_summ > 0" cols="12">
            Стоимость доставки: {{ orderinfo.delivery_summ.toLocaleString() }}
            <small> RUB</small>
          </b-col>
          <b-col cols="12">
            Итого к оплате: {{ orderinfo.total.toLocaleString() }}
            <small> RUB</small>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData({ query, $axios }) {
    const orderinfo = await $axios.$get(`o/orderinfo/${query.order}/`)
    const order = await $axios.$post(`o/payment/register/`, {
      orderNumber: query.order,
    })
    return { order, orderinfo }
  },
  data() {
    return {
      order: this.$route.params.order,
    }
  },
  mounted() {
    this.cleanCart()
  },
  methods: {
    ...mapActions({
      cleanCart: 'modules/cart/cleanCart',
    }),
  },
}
</script>
