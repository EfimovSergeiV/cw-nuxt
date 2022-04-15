<template>
  <div class="text-light">
    <b-row>
      <b-col lg="6">
        <h6>Калькулятор доставки:</h6>
      </b-col>
      <b-col class="text-right" lg="6">
        <!-- <small>Отправка из:</small> -->
        <small>Адрес магазина: {{ shop.adress }}</small>
        <br />
        <SelectShopModal />
        <b-btn v-b-modal.selectshopmodal size="sm" variant="link">
          ( Изменить )
        </b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-btn size="sm" variant="light">CDEK</b-btn>
        <b-btn size="sm" disabled variant="outline-light">Почта России</b-btn>
      </b-col>
    </b-row>
    <b-row>
      <!-- <b-col lg="8">
        <small>Отправка из:</small>
        <small class="point-cursor">( Изменить )</small>
        <br />
        <b>{{ shop.adress }}</b>
      </b-col> -->
      <b-col lg="9"></b-col>
      <b-col lg="3">
        <b-row>
          <b-col class="text-right" cols="12">
            <h3>
              {{ summWithDelivery(tarif, carttotal).toLocaleString() }} руб
            </h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <small>Товар(ов): </small>
          </b-col>
          <b-col class="text-right" cols="6">
            <small>{{ carttotal.toLocaleString() }} руб.</small>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <small>Доставка от: </small>
          </b-col>
          <b-col class="text-right" cols="6">
            <small>{{ tarif }} руб.</small>
          </b-col>
        </b-row>
        <b-row v-if="tarifs">
          <b-col class="text-right" cols="12">
            <small>
              {{ tarifs[0].period_min }} - {{ tarifs[0].period_max }} дней
            </small>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h6>
          Пункт назначения:
          <small v-if="deliverycity" class="ml-4">
            {{ deliverycity.country }}
            {{ deliverycity.region }}
            {{ deliverycity.city }}
          </small>
        </h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-1 mb-1" lg="3">
        <small>Регион:</small>
        <b-row>
          <b-col cols="12">
            <div v-if="listregion">
              <VueTypeaheadBootstrap
                v-model="region"
                size="sm"
                placeholder="Вводите название региона"
                :serializer="(s) => s.region"
                :data="regions"
                background-variant="#000000"
                @hit="getListCities($event)"
              >
              </VueTypeaheadBootstrap>
            </div>
            <div v-else>
              <b-form-select
                v-model="region"
                :options="regions"
                size="sm"
                value-field="region"
                text-field="region"
              >
                <b-form-select-option :value="null" disabled>
                  Выберите регион из списка
                </b-form-select-option>
              </b-form-select>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="mt-1 mb-1" lg="3">
        <small>Город:</small>
        <b-row>
          <b-col cols="10">
            <div v-if="listcity">
              <VueTypeaheadBootstrap
                v-model="city"
                placeholder="Вводите название города"
                :serializer="(s) => s.city"
                :data="cities"
                size="sm"
                background-variant="#000000"
                @hit="saveDeliveryParams($event)"
              ></VueTypeaheadBootstrap>
            </div>
            <div v-else>
              <b-form-select
                v-model="city"
                :options="cities"
                size="sm"
                value-field="city"
                text-field="city"
              >
                <b-form-select-option :value="null" disabled>
                  Выберите город из списка
                </b-form-select-option>
              </b-form-select>
            </div>
          </b-col>
          <b-col cols="2">
            <b-btn
              variant="outline-light"
              disabled
              size="sm"
              class="mdi mdi-format-list-bulleted"
              @click="reversCity()"
            ></b-btn>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="3">
        <b-row class="mt-1 mb-1">
          <b-col cols="12">`</b-col>
          <b-col cols="12">
            <b-btn v-if="spinner" variant="link" size="sm" disabled>
              <b-spinner small></b-spinner>
              Выполняю запрос...
            </b-btn>
            <b-btn
              v-else
              size="sm"
              :disabled="checkCityData()"
              variant="outline-light"
              @click="calcDelivery()"
            >
              Расчитать стоимость
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="mt-1 mb-1" lg="3">
        <small>Доступные тарифы: {{ tarif }}</small>
        <b-form-select
          v-model="tarif"
          :options="tarifs"
          size="sm"
          value-field="delivery_sum"
          text-field="tariff_name"
        >
          <b-form-select-option :value="0" disabled>
            Выберите тариф
          </b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
    <!-- <b-row class="mt-1">
      <b-col class="text-right" cols="12">
        <b-btn
          variant="outline-light"
          @click="summWithDelivery(carttotal, tarif)"
        >
          Calclate
        </b-btn>
      </b-col>
    </b-row> -->
    <!-- <b-row>
      <b-col cols="12">
        Я тут
        {{ deliverystatus }}
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
import SelectShopModal from '../modals/SelectShopModal.vue'

export default {
  components: {
    VueTypeaheadBootstrap,
    SelectShopModal,
  },
  props: {
    products: {
      type: Array,
      default: Array,
    },
    regions: {
      type: Array,
      default: Array,
    },
    carttotal: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      summ: 0,
      spinner: false,
      calcbtnstatus: false,
      listregion: true,
      listcity: true,
      err: null,
      tarif: 0,
      tarifs: null,
      region: null,
      city: null,
      cities: [],
      price: 800000,
    }
  },
  computed: {
    ...mapState({
      shop: (state) => state.shop,
      deliverycity: (state) => state.deliverycity,
      deliverystatus: (state) => state.modules.cart.deliverystatus,
    }),
  },
  watch: {
    tarif() {
      this.changeDeliverySumm(this.tarif)
    },
    // city() {
    //   this.sendParamsEvent()
    // },
  },
  methods: {
    ...mapMutations(['saveDeliveryParams']),
    ...mapActions({
      changeDeliverySumm: 'modules/cart/changeDeliverySumm',
    }),
    // reversRegion() {
    //   if (this.listregion) {
    //     this.listregion = false
    //   } else {
    //     this.listregion = true
    //   }
    // },
    // reversCity() {
    //   if (this.listcity) {
    //     this.listcity = false
    //   } else {
    //     this.listcity = true
    //   }
    // },
    checkCityData() {
      if (this.deliverycity) {
        return false
      } else {
        return true
      }
    },
    calcDelivery() {
      this.spinner = true
      this.$axios
        .$post('o/cdek/tarifflist/', {
          products: this.products,
          startpoint: this.shop,
          endpoint: {
            region_code: this.region, /// По идее не нужен
            city_code: this.deliverycity.code,
          },
        })
        // .then((resp) => (this.tarifs = resp.tariff_codes))
        .then((resp) => {
          this.spinner = false
          if (resp.error) {
            this.$bvToast.toast(resp.error, {
              title: 'Ошибка',
              variant: 'danger',
            })
          } else {
            this.spinner = false
            this.tarifs = resp.tariff_codes
          }
        })
        .catch((err) =>
          this.$bvToast.toast('Сервис временно не доступен', {
            title: err,
            variant: 'danger',
          })
        )
    },
    getListCities(event) {
      if (this.region !== null) {
        // this.saveDeliveryParams(event.region_code)
        this.$axios
          .$get(`o/cdek/cities/${event.region_code}`)
          .then((response) => (this.cities = response))
          .catch((err) => alert(err))
      } else {
        this.$bvToast.toast('Введите/Выберите сначала регион', {
          title: 'Ошибка',
          variant: 'warning',
        })
      }
    },
    sendParams() {
      this.$axios
        .$post('o/cdek/tarifflist/', {
          products: this.products,
          startpoint: this.shop,
          endpoint: {
            region_code: this.region,
            city_code: 20,
          },
        })
        .then((resp) => {
          if (resp.error) {
            this.$bvToast.toast(resp.error, {
              title: 'Ошибка',
              variant: 'danger',
            })
          } else {
            this.tarifs = resp.tariff_codes
          }
        })
        .catch((err) =>
          this.$bvToast.toast('Сервис временно не доступен', {
            title: err,
            variant: 'danger',
          })
        )
    },
    sendParamsEvent(event) {
      this.$axios
        .$post('o/cdek/tarifflist/', {
          products: this.products,
          startpoint: this.shop,
          endpoint: {
            region_code: this.region,
            city_code: event.code,
          },
        })
        // .then((resp) => (this.tarifs = resp.tariff_codes))
        .then((resp) => {
          if (resp.error) {
            this.$bvToast.toast(resp.error, {
              title: 'Ошибка',
              variant: 'danger',
            })
          } else {
            this.tarifs = resp.tariff_codes
          }
        })
        .catch((err) =>
          this.$bvToast.toast('Сервис временно не доступен', {
            title: err,
            variant: 'danger',
          })
        )
    },
    summWithDelivery(carttotal, tarif) {
      return carttotal + tarif
    },
  },
}
</script>
