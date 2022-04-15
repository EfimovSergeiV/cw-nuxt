<template>
  <div id="success-order" class="mt-4 mb-4 text-light">
    <div v-if="order">
      <b-row class="mt-4 mb-4">
        <b-col class="text-center" cols="12">
          <h3>Благодорим за покупку</h3>
          <h5>Свяжемся с вами в ближайшее время</h5>
          <h4>Номер заказа: {{ order }}</h4>
        </b-col>
      </b-row>

      <Svarog />
    </div>
    <div v-else>
      <Svarog />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Svarog from '../components/Svarog.vue'

export default {
  components: {
    Svarog,
  },
  data() {
    return {
      title: 'Спасибо за покупку!',
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
