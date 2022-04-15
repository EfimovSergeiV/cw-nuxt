<template>
  <div>
    <!-- <b-button v-b-modal.modal-verify>Open Modal</b-button> -->

    <b-modal
      id="modal-verify"
      ref="modal"
      centered
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      footer-bg-variant="dark"
      no-close-on-backdrop
      title="Введите проверочный код"
      ok-only
      ok-title="Отправить код"
      @ok="SendVerCode"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label-for="name-input"
          invalid-feedback="*Введите проверочный код отправленый вам по email"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="verification"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verification: null,
      nameState: null,
      submittedNames: [],
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    //   handleOk(bvModalEvt) {
    //     // Prevent modal from closing
    //     bvModalEvt.preventDefault()
    //     // Trigger submit handler
    //     this.handleSubmit()
    //   },
    SendVerCode() {
      this.$axios
        .$post('o/client/', {
          verification: Number(this.verification),
        })
        .then(() => {
          this.$router.push({ name: 'success' })
        })
        .catch(() => {
          this.$bvToast.toast(
            'Введите код из письма, отправленного на вашу почту',
            {
              title: 'Неверный код',
              variant: 'danger',
            }
          )
          this.$bvModal.show('modal-verify')
        })
    },
  },
}
</script>
