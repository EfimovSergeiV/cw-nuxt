<template>
  <b-modal
    id="askprice"
    centered
    hide-header
    hide-footer
    hide-backdrop
    size="lg"
  >
    <div class="message-modal">
      <b-row>
        <b-col class="text-right" cols="12">
          <b-btn
            class="mdi mdi-24px mdi-close"
            variant="dark-link"
            @click="closeMessage()"
          ></b-btn>
        </b-col>
      </b-row>

      <div>
        <b-row align-v="center" class="message-modal-center">
          <b-col cols="12" class="text-center">
            <b-row>
              <b-col cols="12">
                <h3 class="text-dark">Как с вами связаться?</h3>
              </b-col>
            </b-row>
            <b-row align-h="center" class="mt-4">
              <b-col lg="8">
                <b-row>
                  <b-col cols="8">
                    <b-form-input
                      v-model="contact"
                      placeholder="Ваш номер телефона или email"
                    ></b-form-input>
                  </b-col>
                  <b-col cols="4">
                    <b-btn
                      v-if="re_token"
                      block
                      variant="warning"
                      @click="sendRequestPrice()"
                    >
                      Отправить
                    </b-btn>
                    <b-btn v-else block variant="primary" @click="ImNotRobot()">
                      Я не робот
                    </b-btn>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {
      contact: null,
      sended: false,
      re_token: null,
    }
  },
  computed: {
    ...mapState({
      shop: (state) => state.shop,
    }),
  },
  methods: {
    ...mapMutations(['clientEmail', 'dissableRegToast']),
    // delay(time) {
    //   return new Promise((resolve) => setTimeout(resolve, time))
    // },
    async ImNotRobot() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.re_token = token
      } catch (error) {
        this.$bvToast.toast(
          'Свяжитесь со службой поддержки support@glsvar.ru',
          {
            title: 'Вы не прошли проверку на робота',
            variant: 'danger',
          }
        )
      }
    },
    sendRequestPrice() {
      this.$axios
        .$post('o/request-price/', {
          city: this.shop.city,
          contact: this.contact,
          product: `id:${this.product.id} vc:${this.product.vcode} name:${this.product.name}`,
        })
        .then((resp) => {
          this.$bvModal.hide('askprice')
          this.$bvToast.toast('Заявка на цену отправлена', {
            title: 'Заявка отправлена',
            variant: 'success',
          })
        })
        .catch(() => {
          this.$bvToast.toast('Проверьте правильность заполнения формы', {
            title: 'Заявка не отправлена',
            variant: 'danger',
          })
        })
    },
    closeMessage() {
      // this.dissableRegToast()
      this.$bvModal.hide('askprice')
    },
  },
}
</script>

<style lang="scss">
.message-modal {
  background-repeat: no-repeat;
  background-image: url(assets/images/682309.png);
}
.message-modal-center {
  min-height: 40vh;
}
</style>
