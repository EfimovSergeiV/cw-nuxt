<template>
  <div id="promo">
    <b-row>
      <b-col cols="4" class="d-none d-xl-block">
        <div class="promo__left-container">
          <iframe
            src="https://www.youtube.com/embed/IZ2N9bGt0WA"
            loading="lazy"
            height="100%"
            width="100%"
            allowfullscreen="0"
            frameborder="0"
          ></iframe>
        </div>
      </b-col>
      <b-col cols="12" xl="8">
        <div class="promo__right-banner">
          <hooper
            :center-mode="true"
            :wheel-control="false"
            :auto-play="false"
            :play-speed="7000"
            class="promo__hooper-slider"
          >
            <slide v-for="(mpromob, mpb) in mpromobs" :key="mpb">
              <div
                :class="isPointer(mpromob.link)"
                @click="fallowRoute(mpromob.link)"
              >
                <b-img
                  :src="mpromob.image"
                  width="1110"
                  height="380"
                  rounded
                  fluid
                ></b-img>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col cols="12">
        <hooper
          class="promo__carousel-hooper"
          :auto-play="true"
          :play-speed="10000"
          :items-to-show="3"
          :items-to-slide="3"
          :infinite-scroll="true"
          :wheel-control="false"
        >
          <slide
            v-for="(recmnd, spb) in recmnds"
            :key="spb"
            class="promo__slide-card p-2"
          >
            <div class="promo__slide-card-background">
              <nuxt-link
                :to="{ name: 'product-id', params: { id: recmnd.id } }"
              >
                <b-img
                  :src="recmnd.preview_image"
                  :alt="recmnd.name"
                  width="235"
                  height="177"
                  fluid
                >
                </b-img>
                <div class="promo__slide-text">
                  <div
                    v-for="(price, pre) in recmnd.prod_price.slice(0, 1)"
                    :key="pre"
                  >
                    <h6>
                      <h5 class="hr">{{ price.price }}</h5>
                      руб.
                    </h6>
                  </div>
                  <b-badge class="d-none d-lg-block" variant="danger">
                    {{ recmnd.name }}
                  </b-badge>
                </div>
              </nuxt-link>
            </div>
          </slide>
        </hooper>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  props: {
    mpromobs: {
      type: Array,
      default: Array,
    },
    // recommend: {
    //   type: Array,
    //   default: Array,
    // },
  },
  // data() {
  //   return {
  //     mpromobs: null,
  //     recmnds: null,
  //   }
  // },
  // async fetch() {
  //   this.mpromobs = await fetch(
  //     'https://api.glsvar.ru/c/mpromob/'
  //   ).then((res) => res.json())
  //   this.recmnds = await fetch(
  //     'https://api.glsvar.ru/c/recommend/'
  //   ).then((res) => res.json())
  // },
  methods: {
    fallowRoute(abpath) {
      if (abpath !== null) {
        this.$router.push(abpath)
      }
    },
    isPointer(abpath) {
      if (abpath === null) {
        return 'not-poiner'
      } else {
        return 'point-cursor'
      }
    },
  },
}
</script>

<style scoped>
/* .promo-container {
  min-height: 100%;
} */
/* .promo-full {
  width: 100%;
  height: 100%;
} */
/* .second-promo {
  text-align: center;
  border-radius: 2px;
  background-color: #ffffff;
} */

.promo-slide {
  border: 1px solid yellow;
  border-radius: 5px;
}
.promo-head-slide {
  background-color: white;
  border-radius: 5px;
  height: 100%;
}
.promo-foot-slide {
  background-color: white;
  border-radius: 5px;
  height: 100%;
}

.hooper-next,
.hooper-prev {
  background-color: transparent;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
