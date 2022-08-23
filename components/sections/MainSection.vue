<template>
  <div id="main">
    <b-row>
      <b-col cols="12" xl="4">
        <div class="main__menu-section">
          <b-row>
            <b-col class="d-none d-xl-block" cols="12">
              <div
                v-for="sec in cts"
                :key="sec.id"
                class="main__menu-btn mt-1 mb-1"
              >
                <b-dropdown
                  v-if="sec.inserted.length > 0"
                  variant="link"
                  block
                  dropright
                  right
                  no-caret
                >
                  <template #button-content>
                    <b>{{ sec.name }}</b>
                  </template>
                  <b-dropdown-text>
                    <b-row>
                      <b-col
                        v-for="(cct, i) in sec.inserted"
                        :key="i"
                        class="mt-2 mb-2"
                        cols="12"
                      >
                        <b-btn
                          variant="link"
                          class="text-warning"
                          size="sm"
                          :to="{
                            name: 'products',
                            query: { ct: cct.id },
                          }"
                          ><h5>{{ cct.name }}</h5></b-btn
                        >
                        <br />
                        <b-btn
                          v-for="(link, l) in cct.inserted"
                          :key="l"
                          variant="link"
                          size="sm"
                          class="text-light"
                          :to="{
                            name: 'products',
                            query: { ct: link.id },
                          }"
                        >
                          <b>{{ link.name }}</b> <spacer />
                        </b-btn>
                      </b-col>
                    </b-row>
                  </b-dropdown-text>
                </b-dropdown>
                <b-btn
                  v-else
                  :to="{
                    name: 'products',
                    query: { ct: sec.id },
                  }"
                  variant="link"
                  block
                >
                  <b>{{ sec.name }}</b>
                </b-btn>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols="12" xl="8">
        <div class="main__right-banner">
          <hooper
            :center-mode="true"
            :wheel-control="false"
            :auto-play="false"
            :play-speed="7000"
            class="main__hooper-slide"
          >
            <slide v-for="(banner, br) in mbanners" :key="br">
              <b-img
                :src="banner.image"
                onerror="this.src='./noimage-960-540.jpg'"
                width="960"
                height="540"
                rounded
                fluid
                style="cursor: pointer"
                @click="followLink(banner)"
              ></b-img>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>
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
    cts: {
      type: Array,
      default: Array,
    },
    mbanners: {
      type: Array,
      default: Array,
    },
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    followLink(banner) {
      if (banner.link) {
        this.$router.push(banner.link)
      } else if (banner.outlink) {
        window.open(banner.outlink, 'blank')
      } else {
        this.$router.push({ path: 'cts' })
      }
    },
  },
}
</script>
