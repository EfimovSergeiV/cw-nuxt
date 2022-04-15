<template>
  <b-container>
    <b-row
      align-h="center"
      align-v="center"
      class="text-dark"
      style="height: 80vh"
    >
      <b-col lg="8" class="bg-light p-4" style="border-radius: 3px">
        <b-row class="mb-4">
          <b-col class="text-center" cols="12">
            <h4>Регистрация</h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-2 mb-2" lg="6">
            <b-form-input
              v-model="username"
              placeholder="Введите логин"
            ></b-form-input>
          </b-col>
          <b-col class="mt-2 text-right" lg="6">
            <b-form-input
              v-model="password"
              :type="passformtype"
              placeholder="Введите пароль"
            ></b-form-input>
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
        <b-row>
          <b-col class="mt-2 mb-2" lg="6">
            <b-form-input v-model="first_name" placeholder="Имя"></b-form-input>
          </b-col>
          <b-col class="mt-2 mb-2" lg="6">
            <b-form-input
              v-model="last_name"
              placeholder="Фамилия"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-3 mb-2" lg="8">
            <b-form-input
              v-model="email"
              placeholder="Ваш email"
            ></b-form-input>
          </b-col>
          <b-col class="mt-3 mb-2" lg="4">
            <b-btn variant="outline-dark" block @click="register">
              Зарегистрироваться
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      passformtype: 'password',
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('signup/', {
          username: this.username,
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password,
        })
        this.$bvToast.toast('Вы успешно зарегистрировались', {
          title: 'добро пожаловать',
          variant: 'success',
        })
        this.$router.push('/')
      } catch (err) {
        this.$bvToast.toast(
          'Пользователь уже существует или неверно введены данные',
          {
            title: 'Ошибка регистрации',
            variant: 'danger',
          }
        )
      }
    },
  },
}
</script>
