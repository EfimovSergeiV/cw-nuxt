<template>
  <b-navbar class="nav-bg" fixed sticky small toggleable="lg" type="dark">
    <b-container>
      <b-navbar-nav>
        <ul class="hr">
          <li v-if="isAuthenticated">
            <b-avatar
              v-b-tooltip.bottom
              to="/profile"
              title="ЛИЧНЫЙ КАБИНЕТ"
              size="1.8em"
              icon="people-fill"
              variant="warning"
            ></b-avatar>
          </li>
          <li v-else>
            <b-avatar
              v-b-tooltip.bottom
              to="/login"
              title="Авторизация"
              size="1.8em"
              icon="people-fill"
              variant="warning"
            ></b-avatar>
          </li>
          <li>
            <b-avatar
              v-b-tooltip.bottom
              title="Избранное"
              size="1.8em"
              icon="bookmarks-fill"
              variant="warning"
              to="/liked"
            ></b-avatar>
          </li>
          <li>
            <b-avatar
              v-b-tooltip.hover
              size="1.8em"
              icon="basket2-fill"
              variant="warning"
              title="Корзина"
              to="/cart"
            ></b-avatar>
          </li>
          <li>
            <b-avatar
              v-if="comp.length > 0"
              v-b-tooltip.hover
              title="Сравнить"
              size="1.8em"
              icon="bar-chart-fill"
              variant="warning"
              :badge="comp.length"
              badge-variant="info"
              to="/compare"
            ></b-avatar>
            <b-avatar
              v-else
              v-b-tooltip.hover
              title="Сравнить"
              size="1.8em"
              icon="bar-chart-fill"
              variant="warning"
              to="/compare"
            ></b-avatar>
          </li>
        </ul>
      </b-navbar-nav>
      <!-- <b-collapse id="nav-collapse" is-nav> -->
      <b-navbar-nav class="ml-auto">
        <b-btn
          v-b-modal.search
          size="sm"
          class="mr-1 text-uppercase"
          variant="outline-light"
          ><b>Поиск по каталогу</b></b-btn
        >
        <!-- <VueTypeaheadBootstrap
          v-model="search"
          size="sm"
          class="mr-1 search-custom"
          :serializer="(s) => s.name"
          placeholder="Поиск по каталогу"
          :data="searchResult"
          background-variant="#000000"
          @hit="seeProduct($event)"
        ></VueTypeaheadBootstrap> -->
        <b-btn
          v-b-modal.brand
          size="sm"
          class="text-uppercase d-none d-md-none d-lg-block"
          variant="outline-warning"
          ><b>производители</b>
        </b-btn>
      </b-navbar-nav>
      <!-- </b-collapse> -->
    </b-container>
    <b-modal
      id="search"
      ref="search"
      header-bg-variant="light"
      header-text-variant="dark"
      body-bg-variant="light"
      scrollable
      hide-backdrop
      title="Поиск по каталогу"
      hide-footer
      size="lg"
    >
      <div class="text-dark">
        <div class="mb-1">
          <b-form-input
            v-model="search"
            autofocus
            placeholder="Наименование, марка или артикул"
          ></b-form-input>
        </div>
        <div v-if="searchResult.length > 0">
          <b-row>
            <b-col v-for="product in searchResult" :key="product" cols="6">
              <b-btn
                class="mt-1 mb-1"
                variant="outline-dark"
                block
                :to="{ name: 'product-id', params: { id: product.id } }"
                @click="hideSearch"
              >
                {{ product.name }}
              </b-btn>
            </b-col>
          </b-row>
          <!-- <div
            v-for="product in searchResult"
            :key="product"
            class="mt-3"
            @click="hideSearch"
          >
            <b-col class="m-2" cols="12"
              ><b-btn
                variant="outline-dark"
                :to="{ name: 'product-id', params: { id: product.id } }"
              >
                <h6 class="text-dark">
                  {{ product.name }}
                </h6>
              </b-btn>
            </b-col>
          </div> -->
        </div>
        <div v-else class="mt-4">
          <p class="text-dark">Нет результатов</p>
        </div>
      </div>
    </b-modal>
    <b-modal
      id="brand"
      hide-backdrop
      modal-class="brand"
      ok-only
      size="lg"
      ok-title="Закрыть окно"
      content-class="shadow"
      title="Товарные бренды"
      header-bg-variant="dark"
      body-bg-variant="dark"
      header-text-variant="light"
      footer-bg-variant="dark"
      hide-footer
    >
      <div>
        <b-row>
          <b-col
            v-for="brand in brands"
            :key="brand"
            cols="3"
            class="mt-2 mb-2"
          >
            <b-btn
              variant="outline-warning"
              :to="{
                name: 'products',
                query: { brnd: brand.id, page: 1 },
              }"
              block
              @click="hideBrand"
              >{{ brand.brand }}</b-btn
            >
          </b-col>
        </b-row>
      </div>
    </b-modal>
    <!-- <small class="text-light">{{ searchResult }}</small> -->
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
// import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'

export default {
  components: {
    // VueTypeaheadBootstrap,
  },
  data: () => ({
    search: '',
    searchResult: [],
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    cart() {
      return this.$store.state.modules.cart.products
    },
    comp() {
      return this.$store.state.modules.comparison.products
    },
    fvs() {
      return this.$store.state.modules.favorites.products
    },
    brands() {
      return this.$store.state.brands
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    token() {
      return this.$store.state.auth.token
    },
    userid() {
      return this.$store.state.auth.userid
    },
    user() {
      return this.$store.state.auth.user
    },
    useremail() {
      return this.$store.state.auth.useremail
    },
    status() {
      return this.$store.state.auth.status
    },
  },
  watch: {
    search() {
      this.debouncedGetAnswer()
    },
  },
  created() {
    this.debouncedGetAnswer = this.lodash.debounce(this.goSearch, 300)
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    showModal() {
      this.$refs.search.show()
    },
    hideSearch() {
      this.$bvModal.hide('search')
    },
    hideBrand() {
      this.$bvModal.hide('brand')
    },
    seeProduct(link) {
      const id = link.id
      this.$router.push({
        name: 'product-id',
        params: { id },
      })
    },
    goSearch() {
      if (this.search.length > 3) {
        this.$axios
          .$post('/c/search/', { name: this.search.toLowerCase() })
          .then((response) => {
            this.searchResult = response
          })
      }
    },
    // income: function() {
    //   HTTP.get("finance/income/").then(response => {
    //     response.data;
    //   });
    // }
  },
}
</script>

<style scoped>
.search-custom {
  min-width: 200px;
}
</style>
