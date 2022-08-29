<template>
  <section>
    <div v-if="response.count > 0">
      <div class="mt-3">
        <b-row id="startpage" class="startpage mb-2">
          <b-col cols="6" class="mb-3"></b-col>
          <b-col class="text-right" cols="12" lg="6">
            <h1 class="title-category text-right">{{ response.meta.title }}</h1>
          </b-col>
        </b-row>
        <b-row v-if="breadcrumbs.length > 0" class="mb-2">
          <b-col cols="12">
            <div class="text-dark">
              <b-breadcrumb>
                <b-breadcrumb-item to="/">
                  <b-icon
                    icon="house-fill"
                    scale="1.25"
                    shift-v="1.25"
                    aria-hidden="true"
                  ></b-icon>
                  Главная
                </b-breadcrumb-item>
                <b-breadcrumb-item to="/cts"> Каталог </b-breadcrumb-item>

                <b-breadcrumb-item
                  v-for="(breadcrumb, bcb) in breadcrumbs"
                  :key="bcb"
                  :to="{
                    name: 'products',
                    query: { ct: breadcrumb.id },
                  }"
                >
                  {{ breadcrumb.name }}
                </b-breadcrumb-item>
              </b-breadcrumb>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" lg="6">
            <b-row>
              <b-col cols="12">
                <div v-if="response.count > 20">
                  <b-pagination
                    v-model="page"
                    pills
                    align="left"
                    active-class
                    :total-rows="response.count"
                    :per-page="perPage"
                    @change="moveToPage"
                  >
                  </b-pagination>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" lg="6">
            <b-row>
              <b-col class="text-right" cols="12">
                <!-- <h4 id="top">найдено товаров {{ count }}</h4> -->
                <b-form-group>
                  <b-form-radio-group
                    id="btn-radios-1"
                    v-model="by"
                    size="sm"
                    :options="orders"
                    name="radios-btn-default"
                    buttons
                  ></b-form-radio-group>
                  <b-btn v-b-toggle.sidebar-left size="sm"> Фильтр </b-btn>
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>

      <Products :products="response.results" />

      <b-row class="mt-5 mb-2">
        <b-col cols="9" md="10">
          <div v-if="response.count > 20" @click="scrollTop()">
            <b-pagination
              v-model="page"
              pills
              align="right"
              active-class
              :total-rows="response.count"
              :per-page="perPage"
              @change="moveToPage"
            >
            </b-pagination>
          </div>
        </b-col>
        <b-col cols="3" md="2">
          <b-btn
            block
            pill
            variant="light"
            size="sm"
            @click="$router.push('/cts')"
            ><b>Каталог</b></b-btn
          >
        </b-col>
      </b-row>
    </div>

    <div v-else>
      <div class="full-height mt-5 mb-5">
        <b-row id="startpage" class="startpage mb-2">
          <b-col cols="5" class="mb-4">
            <b-btn block variant="outline-warning" @click="$router.push('/cts')"
              >Категории товаров</b-btn
            >
          </b-col>
          <b-col cols="7">
            <b-btn v-b-toggle.sidebar-left block variant="outline-warning"
              >Фильтр по товарам</b-btn
            >
          </b-col>
        </b-row>

        <div v-if="response.count == 0">
          <b-row class="mt-4 text-center">
            <b-col>
              <h2 class="text-light mt-4 mb-4">
                По запросу ничего не найдено...
              </h2>
            </b-col>
          </b-row>
          <b-row class="mt-4 text-center">
            <b-col>
              <h4 class="text-light mt-4 mb-4">
                <!-- Может вам понравиться что-то из товаров ниже? -->
              </h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col v-for="(rand, rd) in rands" :key="rd" cols="6" md="4" lg="3">
              <div
                class="card mb-4 neue-img box-shadow slide-contain text-center"
                style="background-color: #fff"
              >
                <router-link
                  :to="{ name: 'product-id', params: { id: rand.id } }"
                >
                  <b-img
                    :src="rand.preview_image"
                    width="235px"
                    height="177px"
                    rounded
                    fluid
                    alt="Главный сварщик"
                  ></b-img>
                </router-link>
                <div
                  v-for="(rnd, r) in rand.prod_price.slice(0, 1)"
                  :key="r"
                  class="top-right"
                >
                  <h6 class="hr">{{ rnd.price }}</h6>
                  <small>руб.</small>
                </div>
                <div class="bottom-left d-none d-sm-block">
                  <b-badge pill variant="warning"
                    >{{ rand.name.slice(0, 30) }}...
                  </b-badge>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>

        <b-row v-else class="mt-4 text-center">
          <b-col cols="12">
            <h2 class="text-light">
              Поиск товаров
              <b-spinner label="Small Spinner" type="grow"></b-spinner>
            </h2>
          </b-col>
        </b-row>
      </div>
    </div>

    <div>
      <b-sidebar
        id="sidebar-left"
        text-variant="light"
        title="Фильтр по товарам"
        bg-variant="dark"
        left
        shadow
      >
        <b-col class="mt-4">
          <h6>Стоимость:</h6>
          <b-row>
            <b-col>
              <b-form-input
                id="min"
                v-model="opts['min']"
                placeholder="0"
                size="sm"
              ></b-form-input>
            </b-col>
            -
            <b-col>
              <b-form-input
                id="max"
                v-model="opts['max']"
                placeholder="0000"
                size="sm"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-input
                id="range"
                v-model="opts['max']"
                min="1"
                max="100000"
                type="range"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-col>

        <div v-if="brands.length > 1">
          <b-button v-b-toggle.brand variant="link text-left" class="m-1">
            <h6 class="hr">Производитель</h6>
          </b-button>
          <b-collapse id="brand">
            <b-col>
              <b-form-group>
                <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="opts['brnd']"
                  name="flavour-2"
                >
                  <b-form-checkbox
                    v-for="(brand, brnd) in brands"
                    :key="brnd"
                    :value="brand.id"
                    >{{ brand.brand }}</b-form-checkbox
                  >
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-collapse>
        </div>

        <div v-if="props">
          <div>
            <div v-for="(prop, prb) in props" :key="prb">
              <b-button
                v-b-toggle="String(prb)"
                variant="link text-left"
                class="m-1"
              >
                <h6 class="hr">
                  {{ prop.name }}
                </h6>
                <b-badge
                  v-b-tooltip.hover.topleft
                  :title="prop.description"
                  pill
                  variant="primary"
                >
                  ?
                </b-badge>
              </b-button>
              <b-collapse :id="String(prb)">
                <b-col>
                  <div v-if="prop.propwidget === 'range'">
                    <b-row>
                      <!-- :value=“value[0]” @change=“setProperty(index, value)” -->
                      <!-- ?ct=8&fdt1=MMA&fdt2=2001-3000&fdt3=5-6&fdt4=8-7&fdt5=1-4 -->
                      <b-col>
                        <b-form-input
                          id="max"
                          v-model="opts[prop.prop_alias]"
                          placeholder="0-00"
                          size="sm"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <!-- {{ prop.prop_alias }} -->
                    <b-row v-if="prop.prop_ops" class="mt-2">
                      <b-col>
                        <b-form-group>
                          <b-form-radio-group
                            id="radio-group-2"
                            v-model="opts[prop.prop_alias]"
                            name="radio-sub-component"
                          >
                            <b-form-radio
                              v-for="opss in prop.prop_ops"
                              :key="opss"
                              :value="opss.opskey"
                              >{{ opss.ops }}
                            </b-form-radio>
                          </b-form-radio-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-else>
                    <b-form-group>
                      <b-form-checkbox-group
                        id="checkbox-group-2"
                        v-model="opts[prop.prop_alias]"
                        name="flavour-2"
                      >
                        <b-form-checkbox
                          v-for="opss in prop.prop_ops"
                          :key="opss"
                          :value="opss.opskey"
                          >{{ opss.ops }}</b-form-checkbox
                        >
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>
                </b-col>
              </b-collapse>
            </div>
          </div>
        </div>
        <div>
          <b-col>
            <small class="text-light"> </small>
            <b-btn
              variant="outline-warning"
              class="mt-2 mb-2"
              block
              size="sm"
              :to="{
                name: 'products',
                query: { ct: opts.ct, ...opts, page: undefined },
              }"
            >
              Применить
            </b-btn>
            <b-row>
              <b-col>
                <b-btn
                  variant="outline-warning"
                  class="mt-2 mb-2"
                  block
                  size="sm"
                  @click="clearFilter"
                >
                  Сбросить поиск
                </b-btn>
              </b-col>
            </b-row>
          </b-col>
        </div>
      </b-sidebar>
    </div>
    <CartModal />
    <RegisterToast />
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import RegisterToast from '@/components/RegisterToast.vue'
import Products from '../../components/sections/Products.vue'
import CartModal from '../../components/modals/CartModal.vue'

export default {
  components: {
    CartModal,
    Products,
    RegisterToast,
  },
  async asyncData({ query, $axios }) {
    const brands = await $axios.$get(`c/ctbrand/`, {
      params: { ct: query.ct },
    })
    const props = await $axios.$get(`c/props/`, {
      params: { ct: query.ct },
    })
    const rands = await $axios.$get(`c/random/`, {
      params: { ct: query.ct },
    })
    const response = await $axios.$get(`c/prods/`, {
      params: query,
    })
    const breadcrumbs = await $axios.$get(`c/breadcrumb/`, {
      params: query,
    })
    return { response, brands, props, rands, breadcrumbs }
  },
  data() {
    return {
      opts: this.$route.query,
      product: {},
      by: '',
      page: this.$route.query.page,
      perPage: 20,
      category: '',
      orders: [
        { text: 'Новые', value: 'Date' },
        { text: 'Дешевле', value: 'LowPrice' },
        { text: 'Дороже', value: 'HighPrice' },
        { text: 'Рейтинг', value: 'Rating' },
      ],
      options: [],
      /// Определение заголовка
      titlct: this.$route.query.ct,
      titlbrand: this.$route.query.brnd,
    }
  },
  head() {
    return {
      title: `${this.response.meta.title} ${this.shop.city} купить в интернет магазине Главный сварщик`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.shop.city} ${this.response.meta.title} купить онлайн в интернет магазине сварочного оборудования и комплектующих Главный Сварщик`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${this.response.meta.title}, ${this.shop.city}, купить, интернет, магазин, Главный Сварщик `,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      statusCartModal: (state) => state.statusCartModal,
      selectedShop: (state) => state.selectedShop,
      shop: (state) => state.shop,
    }),
    ...mapGetters({
      cartID: 'modules/cart/cartID',
      compID: 'modules/comparison/compID',
      favID: 'modules/favorites/favID',
    }),
  },
  watch: {
    $route(to, from) {
      this.$router.app.refresh()
    },
    by() {
      this.$router.push({
        name: 'products',
        query: {
          ...this.$route.query,
          by: this.by,
          page: undefined,
        },
      })
    },
  },
  mounted() {
    this.scrollTop()
  },
  methods: {
    scrollTop() {
      document
        .getElementById('startpage')
        .scrollIntoView({ behavior: 'smooth' })
    },
    getProductValues(productData) {
      let selValues = null
      productData.forEach((element) => {
        if (element.shop === this.shop.shop_id) {
          selValues = element
        }
      })
      return selValues
    },
    // openCartModal() {
    //   if (!this.statusCartModal) {
    //     this.$bvModal.show('cart-modal')
    //   }
    // },
    setComplete(id) {
      this.$router.push({
        name: 'product-id',
        params: { id },
      })
    },
    moveToPage(num) {
      this.$router.push({
        name: 'products',
        query: {
          ...this.$route.query,
          page: String(num),
        },
      })
    },
    appFilter() {
      this.$router.push({
        name: 'products',
        query: {
          ...this.$route.query,
          page: undefined,
        },
      })
    },
    clearFilter() {
      this.opts = []
      this.$router.push({
        name: 'products',
        query: {
          ct: this.$route.query.ct,
          page: undefined,
        },
      })
    },
    filterCart(id) {
      return this.cartID.filter((n) => n === id).length !== 0
    },
    filterComp(id) {
      return this.compID.filter((n) => n === id).length !== 0
    },
    filterFav(id) {
      return this.favID.filter((n) => n === id).length !== 0
    },

    makeToast(product, variant = null, action = null) {
      if (this.statusCartModal) {
        this.$bvToast.toast(action, {
          title: product.name,
          variant,
          solid: true,
        })
      }
    },
    ...mapActions({
      addProductToCart: 'modules/cart/addProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
      addToComparison: 'modules/comparison/addToComparison',
      delToComparison: 'modules/comparison/delToComparison',
      addProductToFav: 'modules/favorites/addProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
    }),
  },
}
</script>
