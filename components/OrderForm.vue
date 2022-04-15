<template>
  <section id="order-form" class="text-light">
    <div id="card-calculator" class="mt-4 text-light">
      <b-row>
        <b-col cols="6">
          <h3 class="text-warning">Оформление заказа</h3>
        </b-col>
        <b-col cols="6">
          <h3 class="text-right">
            <b-btn size="sm" variant="outline-light" @click="cleanCart()">
              Очистить корзину
            </b-btn>
          </h3>
        </b-col>
      </b-row>
    </div>
    <div class="light-border-cart p-2" style="border-radius: 4px">
      <b-row v-if="!testIP()" class="mb-2">
        <b-col class="text-light" cols="12">
          <CDEK
            :regions="regions"
            :carttotal="cartTotalPrice()"
            :products="cart"
          />
        </b-col>
      </b-row>
      <b-row v-else class="mb-2">
        <b-col class="text-right" cols="12">
          <h6>
            Итог:
            <h4 class="hr ml-4">{{ cartTotalPrice() }} руб.</h4>
          </h6>
        </b-col>
      </b-row>

      <div class="line-hr"></div>

      <b-row class="mt-4 mb-4">
        <b-col cols="12">
          <div>
            <b-form-radio-group
              id="btn-radios-3"
              v-model="selface"
              button-variant="dark"
              :options="faceopts"
              name="face"
              buttons
            ></b-form-radio-group>
            <b-btn v-b-modal.selectshopmodal variant="link" size="sm">
              Изменить магазин
            </b-btn>
            <SelectShopModal id="selectshop" />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <h6>Адрес магазина: {{ shop.adress }}</h6>
        </b-col>
      </b-row>

      <b-row class="mt-3 mb-3">
        <b-col cols="12">
          <b-form-radio-group
            id="btn-deleviry"
            v-model="delivery"
            :disabled="testIP()"
            button-variant="dark"
            :options="deliverymethods"
            name="delivery"
          ></b-form-radio-group>
        </b-col>
        <b-col v-if="!testIP()" cols="12">
          <small>testuser from {{ ip }}</small>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col cols="12" md="6">
          <small>Как к вам обращаться:</small>
          <b-form-input
            id="person"
            :state="personState"
            :value="client.person"
            placeholder="Иван Иванов (необязательно)"
            @input="clientPerson"
          ></b-form-input>
        </b-col>
        <b-col cols="12" md="6">
          <small>Ваш номер телефона:</small>
          <b-form-input
            id="tel"
            type="tel"
            :state="phoneState"
            :value="client.phone"
            placeholder="8(012)345-67-89 или 123-45-67"
            @input="clientPhone"
          ></b-form-input>
          <b-form-invalid-feedback id="tel">
            Обязательное поле
          </b-form-invalid-feedback>
          <b-form-valid-feedback id="tel">
            Ваш телефон: {{ client.phone }}
          </b-form-valid-feedback>
        </b-col>
      </b-row>
      <div v-if="selface === 'entity'">
        <b-row class="mt-2">
          <b-col cols="12" class="mt-2 mb-2">
            <small>Юридический адрес:</small>
            <b-form-input
              id="input-none"
              v-model="legaladress"
              placeholder="Россия, Москва, 117312, ул. Вавилова, д. 123 "
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>Полное наименование:</small>
            <b-form-input
              id="input-none"
              v-model="company"
              placeholder="ООО Полное название компании"
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>ИНН:</small>
            <b-form-input
              id="input-none"
              v-model="inn"
              placeholder="1234567890"
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>КПП:</small>
            <b-form-input
              id="input-none"
              v-model="kpp"
              placeholder="12356789"
            ></b-form-input>
          </b-col>
          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>ОКПО:</small>
            <b-form-input
              id="input-none"
              v-model="okpo"
              placeholder="12345678 (необязательно)"
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>Наименование банка</small>
            <b-form-input
              id="input-none"
              v-model="bankname"
              placeholder="ПАО Сбербанк"
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>Расчетный счет:</small>
            <b-form-input
              id="input-none"
              v-model="currentacc"
              placeholder="12312123112341234567 (необязательно)"
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>Корреспондентский счет:</small>
            <b-form-input
              id="input-none"
              v-model="corresponding"
              placeholder="12312123112341234567 (необязательно)"
            ></b-form-input>
          </b-col>

          <b-col cols="12" md="6" class="mt-2 mb-2">
            <small>БИК:</small>
            <b-form-input
              id="input-none"
              v-model="bic"
              placeholder="123456789 (необязательно)"
            ></b-form-input>
          </b-col>
        </b-row>
      </div>
      <b-row class="mt-2">
        <b-col cols="12" md="6">
          <b-row>
            <b-col cols="12">
              <small>Выберите способ оплаты:</small>
              <b-form-select
                v-model="payMethod"
                :disabled="testIP()"
                class="point-cursor"
                :options="payMethods"
              ></b-form-select>
            </b-col>
          </b-row>
          <b-row v-if="payMethod === 'online'">
            <b-col cols="12">
              <small class="text-warning">
                Что бы оплатить заказ онлайн, укажате актуальный адрес
                электронной почты. После проверки вашего заказа, на него придёт
                письмо с ссылкой на платёжную форму.
              </small>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="6">
          <small>Электронная почта:</small>
          <b-form-input
            id="email"
            type="email"
            :value="client.email"
            :state="emailState"
            placeholder="nickname@domain.ru (необязательно)"
            @input="clientEmail"
          ></b-form-input>
          <b-form-invalid-feedback id="email">
            неверно указан адрес
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="12">
          <small>Комментарий к заказу:</small>
          <b-form-textarea
            id="input-none"
            :value="client.comment"
            rows="3"
            placeholder="Комментарий к заказу (необязательно)"
            @input="clientComment"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="12" md="6">
          <small
            >Совершая заказ, вы соглашаетесь с
            <a v-b-modal.modal-tall class="text-warning hr ml-1 mr-1">
              <b>политикой обработки персональных данных</b>
            </a>
          </small>
        </b-col>
        <b-col cols="12" md="6" class="mt-4">
          <div v-if="!re_token">
            <b-btn variant="light" block @click="ImNotRobot">
              Проверка на робота (сделать заказ)
            </b-btn>
          </div>
          <div v-else>
            <b-btn
              variant="light"
              :disabled="!phoneState"
              block
              @click="sendOrder"
            >
              Сделать заказ
            </b-btn>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col cols="12">
          <iframe
            :src="shop.mapurl"
            width="400"
            height="300"
            style="border: 0; border-radius: 3px; width: 100%"
            loading="lazy"
          ></iframe>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import SelectShopModal from '../components/modals/SelectShopModal.vue'
import CDEK from '../components/widgets/SDEK.vue'

export default {
  components: {
    CDEK,
    SelectShopModal,
  },
  props: {
    regions: {
      type: Array,
      default: Array,
    },
    ip: {
      type: String,
      default: '127.0.0.1',
    },
  },
  data() {
    return {
      re_token: null,
      totalPrice: 0,
      selface: 'individual', /// default
      delivery: false,
      deliverymethods: [
        { text: 'Самовывоз', value: false },
        { text: 'Доставка', value: true },
      ],
      faceopts: [
        { text: 'Физическое лицо', value: 'individual' },
        { text: 'Юридическое лицо', value: 'entity' },
      ],
      payMethod: 'cash',
      payMethods: [
        { value: 'cash', text: 'Оплатить в магазине' },
        {
          value: 'online',
          text: 'Оплатить онлайн',
          disabled: false,
        },
        { value: 'cashless', text: 'Безналичный расчёт ( Для юр. лиц )' },
      ],
      selected: 'radio1',
      options: [
        { text: 'Самовывоз', value: 'radio1' },
        { text: 'Radio 3', value: 'radio2' },
      ],
    }
  },
  computed: {
    ...mapState({
      client: (state) => state.client,
      shop: (state) => state.shop,
      listShops: (state) => state.listShops,
      selectedShop: (state) => state.selectedShop,
      cart: (state) => state.modules.cart.products,
      deliverycity: (state) => state.deliverycity,
      deliverysumm: (state) => state.modules.cart.deliverysumm,
    }),
    ...mapGetters(['adressSelectedShop', 'loggedInUser', 'shopMap']),
    phoneState() {
      const re = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/
      if (this.client.phone) {
        return this.client.phone.search(re) !== -1
      } else {
        return false
      }
    },
    emailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.client.email) {
        return this.client.email.search(re) !== -1
      } else {
        return true
      }
    },
  },
  methods: {
    ...mapMutations([
      'clientPerson',
      'clientPhone',
      'clientEmail',
      'clientComment',
    ]),
    ...mapActions({
      cleanCart: 'modules/cart/cleanCart',
      addProductToFav: 'modules/favorites/delProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
      changeDeliveryStatus: 'modules/cart/changeDeliveryStatus',
    }),
    async ImNotRobot() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.re_token = token
      } catch (error) {
        this.$bvToast.toast(
          'Свяжитесь со службой поддержки support@glsvar.ru',
          {
            title: 'Вы не прошли проверку',
            variant: 'danger',
          }
        )
      }
    },
    testIP() {
      if (this.ip === '91.204.138.138') {
        return false
      } else {
        return true
      }
    },
    getProductValues(productData) {
      let selValues = null
      productData.forEach((element) => {
        if (element.shop === this.shop.shop_id) {
          selValues = element
        }
      })
      return selValues
    },
    cartTotalPrice() {
      let result = 0
      this.cart.forEach(
        (ell) =>
          (result += this.getProductValues(ell.prod_price).price * ell.quantity)
      )
      this.totalPrice = result
      return result
    },
    sendOrder() {
      this.$axios
        .$post('o/order/', {
          region_code: this.shop.region_code,
          shop_id: this.shop.shop_id,
          person: this.client.person,
          phone: this.client.phone,
          email: this.client.email,
          adress: this.shop.adress,
          comment: this.client.comment,
          total: this.totalPrice,
          delivery: this.delivery,
          delivery_adress: 'this.deliverycity',
          delivery_summ: this.deliverysumm,
          company: this.client.company,
          legaladress: this.client.legaladress,
          inn: this.client.inn,
          kpp: this.client.kpp,
          okpo: this.client.okpo,
          bankname: this.client.bankname,
          currentacc: this.client.currentacc,
          corresponding: this.client.corresponding,
          bic: this.client.bic,
          client_product: this.cart,
        })
        .then((response) => {
          if (this.payMethod) {
            this.$router.push({
              name: 'payment',
              query: { order: response.order },
            })
          } else {
            this.$router.push({
              name: 'success',
              params: { order: response.order },
            })
          }
        })
        .catch(() => {
          this.$bvToast.toast('Проверьте правильность заполнения формы', {
            title: 'Заказ не принят',
            variant: 'danger',
          })
        })
    },
  },
}
</script>
