<template>
  <div class="text-light">
    <b-row class="mt-4">
      <b-col cols="12">
        <h4>
          Заказ {{ order.orderNumber }} оплачен
          {{ order.errorMessage.toLowerCase() }}
        </h4>
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col cols="12">
        {{ order }}
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
export default {
  async asyncData({ query, $axios }) {
    const order = await $axios.$post(`o/payment/status/`, {
      orderId: query.orderId,
    })
    return { order }
  },
  // data() {
  //   return {
  //     opts: this.$route.query,
  //     order: { orderId: '280f1415-4230-7d4a-b476-bc665e3480b7', lang: 'ru' },
  //   }
  // },
}
</script>
