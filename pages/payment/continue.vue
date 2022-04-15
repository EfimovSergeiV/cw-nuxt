<template>
  <div class="text-light">
    <b-row class="mt-4 mb-4">
      <b-col cols="6">
        <b-row>
          <b-col cols="12">
            <small>Введите номер заказа:</small>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="8">
            <b-form-input
              v-model="orderNumber"
              disabled
              size="sm"
              placeholder="SPB12345678"
            ></b-form-input>
          </b-col>
          <b-col cols="4">
            <b-btn
              block
              disabled
              variant="light"
              size="sm"
              @click="sendOrderCode()"
            >
              Отправить
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row v-if="orderId" class="mt-4 mb-4">
      <b-col cols="12">
        <a
          class="text-light"
          :href="
            'https://3dsec.sberbank.ru/payment/merchants/sbersafe_sberid/payment_ru.html?mdOrder=' +
            orderId
          "
        >
          Перейти на страницу оплаты
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderNumber: null,
      orderId: null,
    }
  },
  methods: {
    sendOrderCode() {
      this.$axios
        .$post(`sber/continue/`, {
          orderNumber: this.orderNumber,
        })
        .then((response) => (this.orderId = response.orderId))
    },
  },
}
</script>
