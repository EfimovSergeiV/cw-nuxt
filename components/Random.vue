<template>
  <section class="yellow-border-outset mt-3">
    <b-progress
      v-if="loadnew"
      class="ml-1 mr-1"
      height="2px"
      variant="warning"
      :value="valnew"
    ></b-progress>
    <div v-else class="ml-1 mr-1 mt-1">
      <b-row>
        <b-col v-for="(neue, ns) in randoms" :key="ns" cols="6" md="4" lg="3">
          <div class="card mb-4 neue-img box-shadow slide-contain">
            <router-link :to="{ name: 'product-id', params: { id: neue.id } }">
              <img
                class="card-img-top"
                width="235px"
                height="177px"
                fluid
                :src="neue.preview_image"
                alt="Card
              image cap"
            /></router-link>
            <div
              v-for="(newpr, pne) in neue.prod_price.slice(0, 1)"
              :key="pne"
              class="top-right"
            >
              <h6 class="hr">{{ newpr.price }}</h6>
              <small>руб.</small>
            </div>
            <div class="bottom-left d-none d-sm-block">
              <b-badge pill variant="warning"
                >{{ neue.name.slice(0, 30) }}...
              </b-badge>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
// import { Hooper, Slide } from 'hooper'

export default {
  components: {
    // Hooper,
    // Slide,
  },
  data() {
    return {
      randoms: [],
      valnew: 0,
      loadnew: true,
    }
  },
  async fetch() {
    this.randoms = await fetch('https://api.glsvar.ru/c/random/').then((res) =>
      res.json()
    )
  },
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

<style scoped>
.neue-img {
  background-color: #ffffff;
}
</style>
