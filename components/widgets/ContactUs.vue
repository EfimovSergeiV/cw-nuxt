<template>
  <div>
    <b-modal
      id="contactus"
      centered
      hide-backdrop
      hide-footer
      button-size="sm"
      size="md"
      title="Написать менеджеру"
    >
      <b-row>
        <b-col class="mt-2 mb-2" cols="12">
          <b-form-input
            v-model="person"
            size="sm"
            placeholder="Как к вам обращаться?"
          ></b-form-input>
        </b-col>
        <b-col class="mt-2 mb-2" cols="12">
          <b-form-input
            v-model="contact"
            size="sm"
            placeholder="Как с вами связаться?"
          ></b-form-input>
          <b-form-select
            v-model="theme"
            :options="options"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-2 mb-2">
        <b-col cols="12">
          <b-form-textarea
            id="textarea"
            v-model="text"
            size="sm"
            placeholder="Напишите что-нибудь"
            rows="8"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12"></b-col>
        <b-col class="text-right" cols="12">
          <transition name="absolute-left-emergence">
            <b-btn
              v-if="re_token"
              key="send"
              block
              size="sm"
              variant="success"
              @click="sendMessage()"
            >
              Отправить
            </b-btn>
            <b-btn
              v-else
              key="robot"
              block
              size="sm"
              variant="dark"
              @click="ImNotRobot()"
            >
              Подтвертите что вы не робот
            </b-btn>
          </transition>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      person: null,
      contact: null,
      text: null,
      theme: null,
      re_token: false,
      options: [
        { value: null, text: 'Выберите тему сообщения' },
        { value: 'order', text: 'Подать заявку или другое' },
        { value: 'support', text: 'Поддержка пользователей' },
        { value: 'info', text: 'Для жалоб и предложений' },
      ],
    }
  },
  computed: {
    ...mapState({
      shop: (state) => state.shop,
    }),
  },
  methods: {
    async ImNotRobot() {
      try {
        await this.$recaptcha.execute('login')
        this.re_token = true
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
    sendMessage() {
      if (this.contact) {
        this.$axios
          .$post('u/feedback/', {
            city: this.shop.city,
            person: this.person,
            contact: this.contact,
            theme: this.theme,
            text: this.text,
          })
          .then((response) => {
            this.$bvModal.hide('contactus')
            this.$bvToast.toast(
              'Мы свяжемся с вами в ближайшее время',
              {
                title: 'Сообщение отправлено',
                variant: 'success',
              }
            )
          })
          .catch(() => {
            this.$bvToast.toast('Проверьте правильность заполнения формы', {
              title: 'Ошибка',
              variant: 'danger',
            })
          })        
      } else {
        this.$bvToast.toast(
          'Укажите в форме ваши контакты, что бы могли с вами связаться.',
          {
            title: 'Сообщение не отправлено',
            variant: 'danger',
          }
        )
      }

    },
  },
}
</script>
