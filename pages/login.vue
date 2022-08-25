<template>
  <b-container>
    <b-row
      align-h="center"
      align-v="center"
      class="text-dark"
      style="height: 80vh"
    >
      <b-col lg="6" class="text-center bg-white p-4" style="border-radius: 3px">
        <b-row>
          <b-col cols="12">
            <h4>Авторизация</h4>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-4">
          <b-col cols="9">
            <b-form-input
              v-model="username"
              autofocus
              placeholder="Введите ваш логин"
            >
            </b-form-input>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-2 mb-2">
          <b-col cols="9">
            <b-form-input
              v-model="password"
              :type="passformtype"
              placeholder="Введите ваш пароль"
            >
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col cols="12" class="text-center">
            <b-btn
              v-b-modal.reset-pass
              class="pr-4 hr"
              variant="link-dark"
              size="sm"
            >
              восстановить пароль
            </b-btn>
            <b-form-checkbox
              id="passform"
              v-model="passformtype"
              name="passform"
              value="text"
              class="hr"
              unchecked-value="password"
            >
              показывать пароль
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="12" class="text-center">
            <b-btn size="lg" to="/register" variant="link-dark">
              Регистрация
            </b-btn>
            <b-btn variant="dark" @keyup.delete="login()" @click="login">
              Авторизоваться
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-modal
      id="reset-pass"
      ok-title="Отправить пароль на почту"
      cancel-title="Закрыть"
      title="Восстановление пароля"
      button-size="sm"
      @ok="resetPassword()"
    >
      <b-form-input
        v-model="email"
        placeholder="Введите email привязанный к аккаунту"
      ></b-form-input>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  middleware: 'guest',

  data() {
    return {
      username: '',
      password: '',
      passformtype: 'password',
      error: null,
      email: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        this.$router.push({ name: 'profile' })
      } catch (err) {
        this.$bvToast.toast('Неверно введён логин или пароль', {
          title: 'Ошибка авторизации',
          variant: 'danger',
        })
      }
    },
    resetPassword() {
      this.$axios
        .$post('u/reset/', {
          email: this.email,
        })
        .then((resp) => {
          this.$bvToast.toast('Новый пароль отправлен на указанную почту', {
            title: 'Пароль сброшен',
            variant: 'success',
          })
        })
        .catch(() => {
          this.$bvToast.toast('Пользователя не существует', {
            title: 'Ошибка',
            variant: 'danger',
          })
        })
    },
  },
}
</script>

<style scoped>
.login__card-style {
  margin-top: 100px;
  margin-bottom: 100px;
  /* background-color: #d8d8d8; */
  padding-top: 40px;
  padding-bottom: 40px;
  border: #dadadada solid 1px;
  box-shadow: 0 0 10px #d6af00da;
  border-radius: 3px;
}
.component-404 {
  background-color: #080808de;
  padding: 1px;
  border-radius: 3px;
}
</style>
