<template>
  <b-container fluid>
    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <h5 class="text-warning text-right">Информация</h5>
          <div class="footer-border">
            <ul>
              <!-- <li><a href="https://api.mail.ru">MailAgentAPI</a></li>
            <li><a href="https://agent.mail.ru/botapi/">AgentBotAPI</a></li> -->

              <!-- <li>{{ clientip }}</li> -->
              <li class="p-1">
                <a v-b-modal.order-status class="text-light"
                  >Узнать статус заказа</a
                >
              </li>
              <li class="p-1">
                <a v-b-modal.modal-tall class="text-light">Политика данных</a>
              </li>
              <li class="p-1">
                <nuxt-link class="text-light" to="/about"
                  >Адреса магазинов</nuxt-link
                >
              </li>
              <li class="p-1">
                <a v-b-modal.pay-method class="text-light"> Способы оплаты </a>
              </li>
              <li class="p-1">
                <a v-b-modal.delivery-method class="text-light"> Доставка </a>
              </li>
            </ul>
          </div>
          <!-- <small class="mt">(c) 2021 Главный сварщик</small> -->
        </b-col>
        <!-- <b-col cols="12" md="4" class="mt-4">
          <p class="text-right text-warning">Оплата</p>
          <div class="footer-border">
            <ul class="text-warning">
              <li>Наличные</li>
              <li>MasterCard</li>
              <li>Visa</li>
            </ul>
          </div>
        </b-col> -->
        <b-col cols="12" md="4" class="mt-4">
          <h5 class="text-right text-warning">Документы</h5>
          <div class="footer-border">
            <ul>
              <li class="p-1">
                <a v-b-modal.modal-certificate class="text-light"
                  >Сертификаты
                </a>
              </li>
            </ul>
          </div>
        </b-col>
        <!-- <b-col class="mt-1">
          <p>Фон приложения</p>
          <ul>
            <li>Фон 1</li>
            <li>Фон 2</li>
            <li>Фон 3</li>
          </ul>
        </b-col> -->
        <!-- <b-col class="mt-1"><p>Hallo world</p></b-col> -->
      </b-row>

      <b-row align-h="center">
        <b-col class="text-center social-link" cols="12">
          <ul class="hr">
            <!-- <li>
              <b-btn
                href="https://www.facebook.com/glsvar.ru"
                variant="link"
                pill
                target="blank"
                class="mdi mdi-24px mdi-facebook text-warning"
              ></b-btn>
            </li> -->
            <!-- <li>
              <b-btn
                href="https://www.instagram.com/gl_svar/"
                variant="link"
                pill
                target="blank"
                class="mdi mdi-24px mdi-instagram text-warning"
              ></b-btn>
            </li> -->
            <li>
              <b-btn
                href="https://vk.com/glsvar/"
                variant="link"
                pill
                target="blank"
                class="mdi mdi-16px mdi-vk text-warning"
              >
                НАША ГРУППА В ВК
              </b-btn>
            </li>
            <!-- <li>
              <b-btn
                href="https://www.youtube.com/channel/UCP_amU5vsYbO2gq4JyjgGGQ"
                variant="link"
                pill
                target="blank"
                class="mdi mdi-24px mdi-youtube text-warning"
              ></b-btn>
            </li> -->
            <!-- <li>
              <b-btn
                class="mdi mdi-vk"
                href="https://vk.com/glsvar"
                variant="outline-warning"
                target="blank"
                pill
              >
                Вконтакте
              </b-btn>
            </li> -->
          </ul>
        </b-col>
      </b-row>
      <b-row align-h="center" class="pb-2">
        <b-col class="social-link" cols="12" md="4">
          <small class="text-light">
            (c) 2021 Главный сварщик {{ $config.clientVersion }}
          </small>
        </b-col>
        <b-col class="text-right">
          <div>
            <b-toast
              id="app-update"
              toaster="b-toaster-top-right"
              title="Доступна новая версия сайта"
              no-auto-hide
              variant="success"
              solid
            >
              <b-row align-v="center">
                <b-col cols="3">
                  <b-img
                    src="../static/icon-lg.png"
                    width="30px"
                    height="30px"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="12">
                      <a href="/"> Нажмите что бы обновить </a>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-toast>
          </div>

          <div class="mt-2" cols="12" md="8">
            <small class="text-right text-light ofert-text">
              Стоимость товаров, их наличие и подробные характеристики уточняйте
              в магазинах или у администрации сайта.
            </small>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Rules />
    <PayMethod />
    <Delivery />
    <Certificate />
    <OrderStatusModal />
  </b-container>
  <!-- https://bbbootstrap.com/snippets/bootstrap-5-footer-bootstrap-5-75679937 -->
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
import Rules from '../components/Rules'
import PayMethod from '../components/PayMethod'
import Delivery from '../components/Delivery'
import Certificate from '../components/Certificate'
import OrderStatusModal from '../components/modals/OrderStatusModal.vue'

export default {
  components: {
    Rules,
    PayMethod,
    Certificate,
    Delivery,
    OrderStatusModal,
  },
  // data() {
  //   return {
  //     email: '',
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     client: (state) => state.client,
  //   }),
  //   emailState() {
  //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     if (this.client.email) {
  //       return this.client.email.search(re) !== -1
  //     } else {
  //       return false
  //     }
  //   },
  // },
  mounted() {
    this.checkUpdate()
    // this.registerToast()
  },
  methods: {
    // ...mapMutations(['clientEmail']),
    pageUpdate() {
      this.$router.go('/')
    },
    // async sendMail() {
    //   try {
    //     await this.$axios.post('signup/', {
    //       email: this.client.email,
    //     })

    //     this.code = true
    //   } catch (err) {
    //     this.$bvToast.toast(
    //       'Пользователь уже существует или неверно введены данные',
    //       {
    //         title: 'Ошибка регистрации',
    //         variant: 'danger',
    //       }
    //     )
    //   }
    // },
    async checkUpdate() {
      const version = await this.$axios.$get('/version/')
      if (version.version !== this.$config.clientVersion) {
        this.$bvToast.show('app-update')
      }
    },
    // registerToast() {
    //   if (!this.$auth.loggedIn) {
    //     this.$bvToast.show('reg-toast')
    //   }
    // },
  },
}
</script>

<style scoped>
.footer-border {
  border: 1px solid #fbff00;
  padding: 5px;
  border-radius: 5px;
}

.ban-img {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray; /* IE 6-9 */
  /*Добавим вот такой вот код*/
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  /*конец кода с transition*/
}

.ban-img:hover {
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  -o-filter: none;
  filter: none;
  filter: none; /* IE 6-9 */
}
.ofert-text {
  font-size: 9px;
  line-height: 0.1px !important;
}
.app__update-btn {
  background-color: #000000ad;
  padding: 3px;
  border-radius: 30px;
}
</style>
