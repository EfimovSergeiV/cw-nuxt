<template>
  <b-modal
    id="subscriebe"
    centered
    hide-header
    hide-footer
    hide-backdrop
    size="lg"
  >
    <div class="subscriebe-modal">
      <b-row>
        <b-col class="text-right" cols="12">
          <b-btn
            class="mdi mdi-24px mdi-close"
            variant="dark-link"
            @click="closeSubscriebe()"
          ></b-btn>
        </b-col>
      </b-row>
      <transition name="fade">
        <div v-if="sended">
          <b-row align-v="center" class="subscriebe-modal-center">
            <b-col cols="12" class="text-center">
              <h3 class="text-dark">Спасибо! Будем держать Вас в курсе)</h3>
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <b-row align-v="center" class="subscriebe-modal-center">
            <b-col cols="12">
              <b-row class="mb-4">
                <b-col class="text-center" cols="12">
                  <h3 class="text-dark">
                    Будьте в курсе наших акций и скидок!
                  </h3>
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
          <b-row>
            <b-col class="text-right" cols="12">
              <b-btn @click="dissableShow()" variant="dark-link">Не показывать больше</b-btn>
            </b-col>
          </b-row>
        </div>
      </transition>
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
      showSubscriebe: 'true',
    }
  },
  computed: {
    ...mapState({
      client: (state) => state.client,
    }),
    emailState() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.client.email) {
        return this.client.email.search(re) !== -1
      } else {
        return false
      }
    },
  },
  methods: {
    ...mapMutations(['clientEmail', 'dissableRegToast']),
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    dissableShow() {
      localStorage.showSubscriebe = false
      this.closeSubscriebe()
    },
    sendMailSubscriebe() {
      this.$axios
        .$post('u/subcriebe/', {
          email: this.email,
        })
        .then((resp) => {
          if (resp.success) {
            this.dissableRegToast()
            this.sended = true
          } else {
            this.dissableRegToast()
            this.$bvModal.hide('subscriebe')
          }
        })
        .catch(() => {
          this.$bvToast.toast('Неверно введён адрес электронной почты', {
            title: 'Ошибка',
            variant: 'danger',
          })
        })
    },
    closeSubscriebe() {
      this.dissableRegToast()
      this.$bvModal.hide('subscriebe')
    },
  },
}
</script>

<style lang="scss">
.subscriebe-modal {
  background-repeat: no-repeat;
  background-image: url(assets/images/682309.png);
}
.subscriebe-modal-center {
  min-height: 40vh;
}
</style>
