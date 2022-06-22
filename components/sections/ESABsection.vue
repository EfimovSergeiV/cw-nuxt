<template>
  <div class="mt-2">
    <b-row class="esab-logo">
      <b-col cols="12">
        <b-row align-v="center">
          <b-col cols="3">
            <a href="https://www.esab.ru/" target="blank">
              <b-img
                src="https://api.glsvar.ru/files/img/c/brand/esab_8CnTsO3.png"
                width="100"
              ></b-img>
            </a>
          </b-col>
          <b-col cols="9">
            <b class="text-warning">Являемся официальным дистрибьютером</b>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col class="mt-1" lg="6">
        <div class="right-rotate">
          <nuxt-link :to="{ name: 'products', query: { brnd: 3, page: 1 } }">
            <b-img src="esab-banner-one.jpg" fluid alt="esab"></b-img>
          </nuxt-link>
        </div>
      </b-col>

      <b-col class="mt-1" lg="6">
        <div class="left-rotate">
          <hooper
            :wheel-control="false"
            :infinite-scroll="true"
            :play-speed="8000"
            :transition="1200"
            :auto-play="true"
            style="height: 100%"
          >
            <slide>
              <nuxt-link :to="{ name: 'product-id', params: { id: 1705 } }">
                <b-img src="rogue-banner.jpg" fluid alt="rebel"></b-img>
              </nuxt-link>
            </slide>
            <slide>
              <a
                href="https://www.esab.ru/ru/ru/education/ws.cfm"
                target="blank"
              >
                <b-img src="ws-esab.jpg" fluid alt="rebel"></b-img>
              </a>
            </slide>
            <slide>
              <nuxt-link :to="{ name: 'product-id', params: { id: 320 } }">
                <b-img src="handy-esab.jpg" fluid alt="handy"></b-img>
              </nuxt-link>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>
      </b-col>
    </b-row>

    <b-row align-v="center" class="text-light mt-2">
      <b-col class="text-center d-none d-md-none d-lg-block" lg="3">
        <a href="https://www.esab.ru/" target="blank">
          <b-img src="esab-logo.jpg" fluid alt="rebel"></b-img>
        </a>
      </b-col>
      <b-col lg="9">
        <h5>
          Мы являемся официальным дистрибьютором-партнером
          концерна ESAB и официальным Авторизованным
          Сервисным Центром концерна ESAB
        </h5>
        <small>
          <b>
            Бренд ESAB - синоним передового опыта в таких областях как:
            оборудование для ручной сварки и резки, сварочные материалы,
            автоматизированная сварка, механические системы резки. В каждой из
            этих сфер ESAB использует постоянно совершенствуемые методы,
            материалы и ноу-хау, чтобы в полной мере удовлетворить потребности
            всех секторов промышленности. Компания ESAB разрабатывает
            высокопроизводительные решения, которые отвечают требованиям
            заказчиков
          </b>
        </small>
      </b-col>
    </b-row>

    <b-row class="mb-3 d-none d-md-none d-lg-block">
      <b-col cols="12">
        <hooper
          :items-to-show="4"
          :wheel-control="false"
          :auto-play="true"
          :play-speed="7000"
          :infinite-scroll="true"
          style="height: 100%"
        >
          <slide v-for="product in products.results" :key="product">
            <div class="p-1">
              <ProductVertical :product="product" />
            </div>
            <!-- <div class="p-1">
              <div style="background-color: #fff; border-radius: 3px">
                <b-row>
                  <b-col cols="12" class="text-center">
                    <b-img
                      src="https://api.glsvar.ru/files/img/c/preview/prodlk.jpg"
                      height="220"
                      rounded
                      fluid
                    ></b-img>
                  </b-col>
                </b-row>
                <b-row class="text-center">
                  <b-col cols="12">
                    <h1 class="text-dark">Hallo welt</h1>
                  </b-col>
                </b-row>
              </div>
            </div> -->
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col v-for="product in products.results" :key="product" cols="3">
        <ProductVertical :product="product" />
      </b-col>
    </b-row> -->

    <!-- <b-row>
      <b-col v-for="i in 3" :key="i" md="4">
        <div class="svarog__bottom-container">
          <iframe
            src="https://www.youtube.com/embed/dONFJmnZ_zM"
            loading="lazy"
            height="250"
            width="350"
            class="svarog__bottom-video"
            allowfullscreen="0"
            frameborder="0"
          ></iframe>
          <div class="svarog__bottom-video-text">
            <nuxt-link to="https://www.youtube.com/">
              перейти к товару
            </nuxt-link>
          </div>
        </div>
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from 'hooper'
import ProductVertical from '../ProductVertical.vue'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    ProductVertical,
  },
  props: {
    products: {
      type: Array,
      default: Array,
    },
    banners: {
      type: Array,
      default: Array,
    },
  },
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

<style lang="scss" scoped>
.left-rotate {
  background-color: black;
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -ms-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  &:hover {
    transform-origin: right;
    box-shadow: 0 0 10px rgba(247, 202, 0, 0.5);
    transform: skewX(-2deg) skewY(1deg) scaleX(1.04) translateX(10px);
  }
}

.right-rotate {
  background-color: black;
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -ms-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  &:hover {
    transform-origin: left;
    box-shadow: 0 0 10px rgba(247, 202, 0, 0.5);
    transform: skewX(2deg) skewY(-1deg) scaleX(1.04) translateX(-10px);
  }
}
.full-embeded {
  background-color: white;
  border-radius: 5px;
  height: 100%;
}
.esab-logo {
  position: absolute;
  z-index: 2;
}
</style>
