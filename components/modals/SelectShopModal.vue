<template>
  <div id="selectshopmodal">
    <b-modal
      id="selectshopmodal"
      body-bg-variant="light"
      header-text-variant="dark"
      header-bg-variant="light"
      hide-footer
      hide-backdrop
      ok-only
      ok-variant="outline-light"
      ok-title="Закрыть окно"
      title="Выбрать магазин"
    >
      <b-row class="text-dark mb-4">
        <b-col cols="12">
          <small>{{ shop.adress }}</small>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <b-form-select
            v-model="selected"
            :options="shops"
            size="sm"
            value-field="shop"
            text-field="title"
          ></b-form-select>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <small>
            * Стоимость товара в зависимости от региона может различаться
          </small>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="6">
          <b-btn variant="link" size="sm" @click="hideModal()">
            <p class="text-dark">Закрыть окно</p>
          </b-btn>
        </b-col>
        <b-col cols="6">
          <b-btn variant="success" size="sm" block @click="manualSelectShop">
            Выбрать магазин
          </b-btn>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities
    },
    cart() {
      return this.$store.state.modules.cart.products
    },
    ...mapState({
      shop: (state) => state.shop,
      shops: (state) => state.shops,
    }),
  },
  methods: {
    ...mapMutations({
      selectShop: 'selectShop',
    }),
    hideModal() {
      this.$bvModal.hide('selectshopmodal')
    },
    manualSelectShop() {
      this.selectShop(this.selected)
      this.$bvModal.hide('selectshopmodal')
      this.$bvToast.toast(this.selected.adress, {
        title: 'Смена адреса магазина',
        variant: 'success',
      })
    },
  },
}
</script>
