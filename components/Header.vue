<template>
  <b-container>
    <b-row>
      <b-col class="header-text" cols="12" lg="5">
        <b-row>
          <b-col class="text-center shadow-header" cols="12">
            <b-img
              src="../assets/images/svar.png"
              class="point-cursor"
              width="1300"
              height="240"
              fluid
              alt="Главный сварщик"
              @click="$router.push({ path: '/' })"
            >
            </b-img>
          </b-col>
          <b-col>
            <b-row class="mt-4">
              <b-col cols="6">
                <b-row>
                  <b-col cols="12">
                    <h4 class="text-warning shadow-header">{{ shop.city }}</h4>
                  </b-col>
                  <b-col cols="12" class="text-left">
                    <b-btn v-b-modal.selectshopmodal size="sm" variant="link">
                      выбрать магазин
                    </b-btn>
                    <br />
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6">
                <b-row>
                  <b-col class="text-right text-warning" cols="12"
                    ><div>
                      <a href="mailto:shop@glsvar.ru">
                        <h6 class="shadow-header text-warning">
                          shop@glsvar.ru
                        </h6>
                      </a>
                    </div>
                  </b-col>
                  <b-col class="text-right text-warning" cols="12">
                    <div v-for="phone in shop.phones" :key="phone.id">
                      <a :href="'tel:' + phone.link"
                        ><h5 class="shadow-header text-warning">
                          {{ phone.number }}
                        </h5>
                      </a>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="d-none d-lg-block" cols="12" lg="7">
        <b-row class="text-right">
          <b-col class="text-right mt-4 social-link-header" cols="12">
            <!-- <b-btn variant="link" class="mdi mdi-36px mdi-twitter mr-1"></b-btn> -->

            <!-- <ul class="hr">
              <li>
                <b-btn
                  href="https://www.facebook.com/glsvar.ru"
                  variant="link"
                  pill
                  target="blank"
                  class="mdi mdi-36px mdi-facebook text-warning p-0"
                ></b-btn>
              </li>
              <li>
                <b-btn
                  class="mdi mdi-vk"
                  target="blank"
                  href="https://vk.com/glsvar"
                  variant="warning"
                  pill
                >
                  <b>Вконтакте</b>
                </b-btn>
              </li>
            </ul> -->
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="text-right pb-2">
      <b-col cols="12">
        <ul class="hr">
          <li>
            <b-btn size="sm" to="/" variant="warning"><b>Главная</b></b-btn>
          </li>
          <li>
            <b-btn size="sm" to="/cts" variant="warning"
              ><b>Каталог</b></b-btn
            >
          </li>
          <li>
            <b-btn size="sm" to="/liked" variant="warning"
              ><b>Избранное</b> <b-badge variant="dark"></b-badge
            ></b-btn>
          </li>
          <li>
            <b-btn
              :size="CartButtomSize()"
              to="/cart"
              :variant="CartButtomVariant()"
            >
              <b class="mdi mdi-cart text-dark p-0">Корзина</b>
              <b-badge
                v-if="cart.length > 0"
                :variant="CartButtomVariant()"
              >
                {{ cart.length }}
              </b-badge>
            </b-btn>
          </li>
          <!-- <li>
            <b-btn size="sm" to="/f" variant="warning"
              ><b>ГС Клуб</b></b-btn
            >
          </li> -->
          <li>
            <b-btn size="sm" to="/about" variant="warning"
              ><b>Магазины</b></b-btn
            >
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-modal
      id="set-city"
      body-bg-variant="dark"
      header-text-variant="light"
      header-bg-variant="dark"
      footer-bg-variant="dark"
      ok-only
      ok-variant="outline-light"
      ok-title="Закрыть окно"
      title="Выбрать город"
    >
      <b-row>
        <b-col cols="12">
          <div>
            <b-form-select v-model="sel_city" :options="cities"></b-form-select>
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <SelectShopModal />
  </b-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SelectShopModal from '../components/modals/SelectShopModal.vue'

export default {
  components: {
    SelectShopModal,
  },
  data() {
    return {
      sel_city: {
        city: 'Москва',
        phone: '+7 (495) 970-30-43',
      },
      geolocate: '',
      selshop: { region_code: 'MOW', shop: 9 },
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
      listShops: (state) => state.listShops,
    }),
  },
  methods: {
    ...mapMutations({
      selectShop: 'selectShop',
    }),
    manualSelectShop() {
      this.selectShop(this.selshop)
    },
    CartButtomSize() {
      if (this.cart.length > 0) {
        return 'sm'
      } else {
        return 'sm'
      }
    },
    CartButtomVariant() {
      if (this.cart.length > 0) {
        return 'danger'
      } else {
        return 'warning'
      }
    },
  },
}
</script>

<style scoped>
.shadow-header {
  text-shadow: 2px 4px 6px #000000, 0 0 1em #000000;
}
</style>
