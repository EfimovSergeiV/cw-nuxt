<template>
  <div>
    <MainSection :cts="cts" :mbanners="mbanners" />
    <ESABsection :products="esab" :banners="[]" />
    <!-- <VoteSection /> -->
    <MWeld :product="mweld" />
    <Svarog />
    <Promo :mpromobs="mpromobs" />
    <RecWithProductVue :products="recommends" />    
    <Neues :neues="neues" />
    <Brands />
  </div>
</template>

<script>
import MainSection from '../components/sections/MainSection.vue'
import ESABsection from '../components/sections/ESABsection.vue'
import Svarog from '../components/Svarog'
import Promo from '../components/Promo'
import Neues from '../components/Neues'
import Brands from '../components/Brands'
import RecWithProductVue from '~/components/sections/RecWithProduct.vue'
import MWeld from '../components/sections/MWeld.vue'

export default {
  components: {
    MainSection,
    ESABsection,
    Svarog,
    Promo,
    Neues,
    Brands,
    RecWithProductVue,
    MWeld
},
  async asyncData({ $axios }) {
    const mbanners = await $axios.$get('c/mainbanner/')
    const cts = await $axios.$get('c/ct/')
    const esab = await $axios.$get('c/prods/?brnd=3')
    const neues = await $axios.$get('c/neues/')
    const mpromobs = await $axios.$get('c/mpromob/')
    const recommends = await $axios.$get(`c/recommend/`)
    const mweld = await $axios.$get(`c/prod/1835/`)

    return { mbanners, cts, neues, mpromobs, esab, recommends, mweld }
  },
  data() {
    return {
      stat: false,
      value: 35,
      loadmenu: true,
      loadpromo: true,
      loadnew: true,
      loadbrand: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.value = 70
      setTimeout(() => (this.loadmenu = 100), 30)
    })
    this.$nextTick(() => {
      this.loadmenu = true
      setTimeout(() => (this.loadmenu = false), 100)
    })
    this.$nextTick(() => {
      this.loadpromo = true
      setTimeout(() => (this.loadpromo = false), 200)
    })
    this.$nextTick(() => {
      this.loadnew = true
      setTimeout(() => (this.loadnew = false), 700)
    })
    this.$nextTick(() => {
      this.loadbrand = true
      setTimeout(() => (this.loadbrand = false), 700)
    })
  },
}
</script>
