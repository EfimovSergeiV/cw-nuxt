<template>
  <div class="text-dark bg-white p-2" style="border-radius: 3px">
    <b-row>
      <b-col cols="6">
        <h5>Мой профиль</h5>
      </b-col>
      <b-col class="text-right" cols="6">
        <b-btn
          size="sm"
          class="mdi mdi-account-edit"
          variant="link-dark"
          @click="editableFields()"
        >
          Редактировать
        </b-btn>
        <b-btn
          class="mdi mdi-exit-run"
          size="sm"
          variant="link-dark"
          @click="logout()"
        >
          Выход
        </b-btn>
      </b-col>
    </b-row>

    <b-row class="mt-4 mb-4">
      <b-col class="mt-2 mb-2" md="6">
        <h6>Логин: {{ user.username }}</h6>
        <b-form-input
          v-if="edit"
          v-model="newPerson"
          size="sm"
          class="hr"
          placeholder="Логин (используется для входа)"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2 mb-2" md="6">
        <h6>Email: {{ user.email }}</h6>
        <b-form-input
          v-if="edit"
          v-model="newEmail"
          size="sm"
          class="hr"
          placeholder="Email"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2 mb-2" md="6">
        <h6>Имя: {{ user.first_name }}</h6>
        <b-form-input
          v-if="edit"
          v-model="newFirstName"
          size="sm"
          class="hr"
          placeholder="Имя"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2 mb-2" md="6">
        <h6>Фамилия: {{ user.last_name }}</h6>
        <b-form-input
          v-if="edit"
          v-model="newLastName"
          size="sm"
          class="hr"
          placeholder="Фамилия"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2 mb-2" md="6">
        <h6>Телефон: {{ user.phone }}</h6>
        <b-form-input
          v-if="edit"
          v-model="newPhone"
          size="sm"
          class="hr"
          placeholder="Телефон"
        ></b-form-input>
      </b-col>
      <b-col class="mt-2 mb-2" md="6">
        <h6>Адрес: {{ shop.adress }}</h6>
        <small v-if="edit">*Выберите магазин в шапке сайта и сохраните</small>
        <!-- <b-form-input
          
          v-model="newAdress"
          size="sm"
          class="hr"
          placeholder="Адрес"
        ></b-form-input> -->
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col cols="12">
        <h6>Баллы за покупки: 600</h6>
      </b-col>
    </b-row> -->

    <b-row class="mt-1">
      <b-col cols="12" class="text-right">
        <b-btn v-if="edit" size="sm" @click="sendNewProfile()">Сохранить</b-btn>
        <b-btn v-b-modal.changepass variant="link-dark" size="sm">
          Сменить пароль
        </b-btn>
      </b-col>
    </b-row>

    <b-modal
      id="changepass"
      ok-title="Сменить пароль"
      :ok-disabled="!statePassword"
      cancel-title="Закрыть"
      title="Сменить пароль"
      button-size="sm"
      @ok="sendNewProfile()"
    >
      <b-row>
        <b-col class="mt-1 mb-1" cols="12">
          <b-form-input
            v-model="newPass"
            :type="passformtype"
            :state="statePassword"
            placeholder="Введите новый пароль"
          ></b-form-input>
        </b-col>
        <b-col class="mt-1 mb-1" cols="12">
          <b-form-input
            v-model="rePass"
            :type="passformtype"
            :state="statePassword"
            placeholder="Повторите новый пароль"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="text-right">
          <b-form-checkbox
            id="passform"
            v-model="passformtype"
            name="passform"
            value="text"
            unchecked-value="password"
          >
            показывать пароли
          </b-form-checkbox>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    user: {
      type: Object,
      default: Object,
    },
  },
  data: () => ({
    edit: false,
    newPerson: null,
    newFirstName: null,
    newLastName: null,
    newEmail: null,
    newPhone: null,
    passformtype: 'password',
    newPass: '',
    rePass: '',
  }),
  computed: {
    ...mapState({
      client: (state) => state.client,
      shop: (state) => state.shop,
    }),
    statePassword() {
      if (this.newPass === this.rePass && this.rePass.length !== 0) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    editableFields() {
      if (this.edit) {
        this.edit = false
      } else {
        this.edit = true
      }
    },
    // BugFIX: Иногда проходит с ошибкой, доделать
    // toastChangePass() {
    //   this.$bvToast.toast('Для применения изменений со', {
    //     title: 'Пароль изменён',
    //     variant: 'success',
    //   })
    // },
    sendNewProfile() {
      // PR: Иногда проходит с ошибкой, доделать
      this.$axios
        .$post('u/profile/', {
          username: this.newPerson,
          first_name: this.newFirstName,
          last_name: this.newLastName,
          email: this.newEmail,
          password: this.newPass,
          phone: this.newPhone,
          adress: this.shop.adress,
        })
        .then((resp) => {
          this.$bvToast.toast(resp.msg, {
            title: 'Редактирование информации',
            variant: resp.variant,
          })
        })
        .catch((err) => {
          this.$bvToast.toast(err, {
            title: 'Ошибка',
            variant: 'danger',
          })
        })
    },
  },
}
</script>
