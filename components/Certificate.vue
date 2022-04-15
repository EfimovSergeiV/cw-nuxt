<template>
  <div>
    <b-modal
      id="modal-certificate"
      size="xl"
      title="Сертификаты и документы"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="primary"
      footer-bg-variant="dark"
      footer-text-variant="primary"
      ok-only
      ok-title="Закрыть окно"
      centered
    >
      <div>
        <b-row class="text-white mt-4 mb-4">
          <b-col
            v-for="certificate in certificates"
            :key="certificate"
            cols="6"
            md="2"
          >
            <ul>
              <li>
                <!-- {{ certificate v-b-modal.modal-multi-3}} -->
                <b-img
                  v-b-tooltip.righttop
                  :title="certificate.description"
                  width="130"
                  :src="certificate.file_name"
                  fluid
                  :alt="certificate.name"
                  @click="OpenCertificat(certificate.file_name)"
                ></b-img>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- <b-modal
      id="modal-multi-1"
      size="lg"
      title="First Modal"
      ok-only
      no-stacking
    >
      <p class="my-2">First Modal</p>
      <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
    </b-modal> -->

    <b-modal
      id="modal-multi-3"
      centered
      title="Third Modal"
      hide-footer
      hide-header
    >
      <div>
        <b-img :src="certificat" fluid alt="Fluid-grow image"></b-img>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    certificat: '',
  }),
  computed: {
    certificates() {
      return this.$store.state.certificates
    },
  },
  created() {
    this.getCertificates()
  },
  methods: {
    ...mapActions({
      getCertificates: 'getCertificates',
    }),
    OpenCertificat(certificate) {
      this.$root.$emit('bv::show::modal', 'modal-multi-3')
      this.certificat = certificate
    },
  },
}
</script>
