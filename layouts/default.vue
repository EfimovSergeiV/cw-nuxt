<template>
  <div id="startpage" class="page-bg">
    <!-- Application preloader -->
    <div v-if="loading" class="splash-screen">
      <div class="spinner-wrapper">
        <b-row>
          <b-col class="text-center" cols="12">
            <h4 class="text-warning">Загрузка магазина</h4>
          </b-col>
          <b-col class="text-center" cols="12">
            <div class="spinner"></div>
          </b-col>
        </b-row>
      </div>
    </div>

    <Navbar v-if="!loading" />
    <div class="header-img">
      <Header />
    </div>

    <div v-if="$nuxt.isOffline">
      <b-alert show variant="danger">Нет соединения с интернетом</b-alert>
    </div>

    <div :id="neuesjahr" class="mb-4">
      <b-container class="mh-100">
        <transition name="fade" mode="out-in">
          <Nuxt />
        </transition>
      </b-container>

      <!-- <b-img src="../assets/images/snow.png" style="width: 100%" alt="snow">
      </b-img> -->
    </div>

    <div class="footer-bg pt-4">
      <Footer />
    </div>

    <div class="nav-button-btn">
      <b-button
        v-b-modal.contactus
        class="mdi mdi-android-messages"
        variant="warning"
        pill
      >
        Напишите нам<ContactUs />
      </b-button>
      <b-btn
        variant="warning"
        class="mdi mdi-arrow-up-thick"
        pill
        @click="scrollTop()"
      ></b-btn>
    </div>
    <Message />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import Navbar from '../components/Navbar'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import Message from '../components/modals/Message.vue'
import ContactUs from '../components/widgets/ContactUs.vue'

export default {
  components: {
    // Navbar,
    // Header,
    Message,
    Footer,
    ContactUs,
  },
  async asyncData({ $axios }) {
    const test = await $axios.$get('/c/test/')
    return { test }
  },
  data() {
    return {
      loading: true,
      // neuesjahr: 'snow-container',
      neuesjahr: '',
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://api.glsvar.ru/files/og-image.png',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      messagetoast: (state) => state.messagetoast,
    }),
  },
  mounted() {
    this.getBrands()
    this.makeMessage()
    this.loading = false
  },
  methods: {
    ...mapActions({
      getBrands: 'getBrands',
    }),
    scrollTop() {
      document
        .getElementById('startpage')
        .scrollIntoView({ behavior: 'smooth' })
    },
    makeMessage() {
      if (this.messagetoast) {
        this.$bvModal.show('message')
      }
    },
  },
}
</script>

<style>
.mh-100 {
  min-height: 30vw;
}
@keyframes snow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 500px 1000px, 400px 400px, 300px 300px;
  }
}

#snow-container {
  /* background-image: url(snowflake.png), url(snowflake3.png), url(snowflake2.png); */
  background-image: url(../assets/images/snowflake.png),
    url(../assets/images/snowflake1.png), url(../assets/images/snowflake3.png);
  height: 100%;
  animation: snow 30s linear infinite;
}
.snow {
  background-image: url(../assets/images/snow.png);
}
/* .test-btn {
  position: fixed;
  right: 5px;
  top: 80%;
  width: 347px;
  height: 160px;
  display: block;
  z-index: 99999999;
} */
.nav-button-btn {
  position: fixed;
  right: 25px;
  /* top: 80%; */
  bottom: 25px;
  /* width: 347px;
  height: 160px; */
  display: block;
  z-index: 99999999;
}
</style>
