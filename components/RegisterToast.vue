<template>
  <div id="toast-id">
    <b-toast
      id="reg-toast"
      toaster="b-toaster-top-right"
      variant="success"
      title="Будьте в курсе акций и скидок!"
      no-auto-hide
      solid
    >
      <b-row align-v="center">
        <b-col cols="12">
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            :value="client.email"
            :state="emailState"
            size="sm"
            placeholder="Введите Ваш e-mail адрес"
            @input="clientEmail"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-1">
        <b-col class="text-right" cols="12">
          <b-btn
            :disabled="!emailState"
            size="sm"
            variant="outline-success"
            @click="sendMail()"
          >
            Зарегистрироваться
          </b-btn>
        </b-col>
      </b-row>
    </b-toast>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      email: '',
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
    sendMail() {
      this.$axios
        .$post('subscriebe/', {
          email: this.client.email,
        })
        .then(() => {
          this.$bvToast.toast(
            'Мы выслали вам пароль от личного кабинета на почту',
            {
              title: 'Спасибо за подписку',
              variant: 'success',
            }
          )
          this.dissableRegToast()
          this.$bvToast.hide('reg-toast')
        })
        .catch(() => {
          this.$bvToast.toast('Пользователь уже существует', {
            title: 'Ошибка',
            variant: 'danger',
          })
          this.dissableRegToast()
          this.$bvToast.hide('reg-toast')
        })
    },
  },
}
</script>
