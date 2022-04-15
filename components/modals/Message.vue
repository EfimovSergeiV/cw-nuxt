<template>
  <b-modal
    id="message"
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
            <h3 class="text-dark">
              Внимание! В виду высокой неопределенности с курсом валют,
              уточняйте наличие и цену товара у администрации сайта. Заказ
              считается оформленным, только при подтверждении цены и наличия у
              администратора.
            </h3>
          </b-col>
        </b-row>
      </div>
      <!-- <div>
        <b-row align-v="center" class="subscriebe-modal-center">
          <b-col cols="12">
            <b-row class="mb-4">
              <b-col class="text-center" cols="12">
                <h3 class="text-dark">Будьте в курсе наших акций и скидок!</h3>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col lg="8">
                <b-form-input
                  v-model="email"
                  autofocus
                  placeholder="Введите ваш адрес электронной почты"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col class="text-center" cols="12">
                <b-btn
                  size="lg"
                  variant="dark-link"
                  @click="sendMailSubscriebe()"
                >
                  Подписаться
                </b-btn>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div> -->
    </div>
  </b-modal>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      email: '',
      sended: false,
    }
  },
  computed: {
    ...mapState({
      client: (state) => state.client,
    }),
  },
  methods: {
    ...mapMutations(['clientEmail', 'dissableRegToast']),
    // delay(time) {
    //   return new Promise((resolve) => setTimeout(resolve, time))
    // },
    closeMessage() {
      // this.dissableRegToast()
      this.$bvModal.hide('message')
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
