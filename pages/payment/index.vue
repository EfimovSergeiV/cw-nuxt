<template>
  <div class="text-light">
    <b-row>
      <b-col cols="12" class="mt-4">
        <h4>{{ orderinfo.order_number }}</h4>
      </b-col>
    </b-row>
    <b-row align-h="center" align-v="center" style="min-height: 60vh">
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <small>Позиции заказа:</small>
          </b-col>
          <b-col
            v-for="(product, num) in orderinfo.client_product"
            :key="product"
            cols="12"
          >
            {{ num + 1 }}. {{ product.name }}
          </b-col>
          <b-col class="mt-4" cols="12">
            Сумма по позициям:
            {{ orderinfo.position_total.toLocaleString() }} <small>RUB</small>
          </b-col>
          <b-col cols="12">
            Сумма к оплате: {{ orderinfo.total.toLocaleString() }}
            <small> RUB</small>
          </b-col>
          <b-col cols="12"></b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12">
            <h4>Оплата онлайн</h4>
          </b-col>
        </b-row>
        <a :href="order.formUrl" class="text-light"> Открыть форму оплаты </a>
      </b-col>
      <b-col cols="12">
        <h5 class="text-danger">{{ order.error }}</h5>
      </b-col>
      <!-- {{ orderinfo }} -->
    </b-row>
    <!-- <b-row>
      <b-col cols="12">
        {{ order }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <a :href="order.formUrl" class="text-light"> Открыть форму оплаты </a>
      </b-col>
    </b-row> -->
    <!-- <b-row>
      <b-col cols="12">
        <small>
          https://3dsec.sberbank.ru/payment/merchants/sbersafe_sberid/payment_ru.html?mdOrder=
        </small>
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
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
}
</script>
