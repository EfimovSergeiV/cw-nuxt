<template>
  <section class="neues">
    <b-row>
      <b-col cols="12">
        <h3>Недавно добавленные</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(neue, ns) in neues" :key="ns" cols="6" md="4" lg="3">
        <div class="neues__card">
          <div class="slide-contain mt-3 mb-3">
            <router-link :to="{ name: 'product-id', params: { id: neue.id } }">
              <b-img
                :src="neue.preview_image"
                onerror="this.src='../../noimage-235-177.jpg'"
                width="235px"
                height="177px"
                rounded
                fluid
                alt="Главный сварщик"
              ></b-img>
            </router-link>
            <div
              v-for="(newpr, pne) in neue.prod_price.slice(0, 1)"
              :key="pne"
              class="top-right"
            >
              <div v-if="newpr.price !== 0">
                <h6 class="hr">{{ newpr.price.toLocaleString() }}</h6>
                <small>руб.</small>
              </div>
              <div v-else>
                <small>по запросу</small>
              </div>
            </div>
            <div class="bottom-left d-none d-sm-block">
              <b-badge pill variant="warning"
                >{{ neue.name.slice(0, 30) }}...
              </b-badge>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
// import { Hooper, Slide } from 'hooper'

export default {
  components: {
    // Hooper,
    // Slide,
  },
  props: {
    neues: {
      type: Array,
      default: Array,
    },
  },
  data() {
    return {
      // neues: [],
      valnew: 0,
      loadnew: true,
    }
  },
  // async fetch() {
  //   this.neues = await fetch('https://api.glsvar.ru/c/neues/').then((res) =>
  //     res.json()
  //   )
  // },
  mounted() {
    this.$nextTick(() => {
      this.loadnew = true
      setTimeout(() => (this.loadnew = false), 700)
    })
    this.$nextTick(() => {
      this.valnew = 0
      setTimeout(() => (this.valnew = 100), 700)
    })
  },
}
</script>
