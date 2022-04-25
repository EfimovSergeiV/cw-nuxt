<template>
  <div>
    <MainSection :cts="cts" :mbanners="mbanners" />
    <ESABsection :products="esab" :banners="[]" />
    <!-- <VoteSection /> -->
    <Svarog />
    <Promo :recommend="recommend" :mpromobs="mpromobs" />
    <Neues :neues="neues" />
    <Brands />
  </div>
</template>

<script>
import MainSection from '../components/sections/MainSection.vue'
import ESABsection from '../components/sections/ESABsection.vue'
// import VoteSection from '../components/sections/VoteSection.vue'
import Svarog from '../components/Svarog'
import Promo from '../components/Promo'
import Neues from '../components/Neues'
import Brands from '../components/Brands'

export default {
  components: {
    MainSection,
    ESABsection,
    // VoteSection,
    Svarog,
    Promo,
    Neues,
    Brands,
  },
  async asyncData({ $axios }) {
    const mbanners = await $axios.$get('c/mainbanner/')
    const cts = await $axios.$get('c/ct/')
    const esab = await $axios.$get('c/prods/?brnd=3')
    const neues = await $axios.$get('c/neues/')
    const mpromobs = await $axios.$get('c/mpromob/')
    const recommend = await $axios.$get('c/recommend/')
    return { mbanners, cts, neues, mpromobs, recommend, esab }
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
