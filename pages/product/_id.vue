<template>
  <div class="mb-1">
    <div class="single-product-main-area">
      <div class="custom-area">
        <b-row class="mt-3 mb-3">
          <b-col cols="12">
            <h1 class="text-uppercase prod-comp-block">{{ product.name }}</h1>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col cols="12">
            <div class="text-dark">
              <b-breadcrumb>
                <b-breadcrumb-item href="/">
                  <b-icon
                    icon="house-fill"
                    scale="1.25"
                    shift-v="1.25"
                    aria-hidden="true"
                  ></b-icon>
                  Главная
                </b-breadcrumb-item>
                <b-breadcrumb-item href="/cts"> Каталог </b-breadcrumb-item>

                <b-breadcrumb-item
                  v-for="(breadcrumb, pbcb) in breadcrumbs"
                  :key="pbcb"
                  :to="{
                    name: 'products',
                    query: { ct: breadcrumb.id },
                  }"
                >
                  {{ breadcrumb.name }}
                </b-breadcrumb-item>
                <b-breadcrumb-item v-if="product.name.length > 40">
                  {{ product.name.slice(0, 40) }}...
                </b-breadcrumb-item>
                <b-breadcrumb-item v-else>
                  {{ product.name.slice(0, 40) }}
                </b-breadcrumb-item>
              </b-breadcrumb>
            </div>
          </b-col>
        </b-row>

        <div class="text-light product-info__background p-1">
          <ProductPreviewSec :product="product" class="mb-4" />
          <div class="line-hr mb-2"></div>
          <!-- '91.204.138.138' -->
          <!-- '127.0.0.1' -->
          <CDEK
            v-if="ip === '91.204.138.138'"
            :products="Array(product)"
            :carttotal="getProductValues(product.prod_price).price"
            :regions="regions"
          />
          <div class="line-hr mt-1 mb-1"></div>
          <b-row class="mt-4 mb-4">
            <b-col cols="12">
              {{ product.description }}
            </b-col>
          </b-row>
        </div>

        <b-row v-if="options.length > 0" class="mt-2">
          <b-col>
            <div class="prod-comp-block">
              <b-row>
                <b-col>
                  <h5>Выбор комплектации:</h5>
                </b-col>
              </b-row>
              <b-row>
                <b-col
                  v-for="(option, ops) in options"
                  :key="ops"
                  class="mt-1 mb-1"
                  cols="6"
                  md="4"
                  lg="3"
                >
                  <div>
                    <b-form-group>
                      <b-form-checkbox-group
                        id="checkbox-group-2"
                        v-model="selected"
                        name="flavour-2"
                        size="lg"
                      >
                        <div class="comp-img slide-contain">
                          <router-link
                            :to="{
                              name: 'product-id',
                              params: { id: option.id },
                            }"
                          >
                            <b-img
                              :src="option.preview_image"
                              width="235px"
                              height="177px"
                              style="padding: 30px"
                              rounded
                              fluid
                              alt="Главный сварщик"
                            ></b-img>
                          </router-link>
                          <div
                            v-for="(pcomp, pcmp) in option.prod_price.slice(
                              0,
                              1
                            )"
                            :key="pcmp"
                            class="top-right-comp"
                          >
                            <div v-if="pcomp.price !== 0">
                              <h6 class="hr">{{ pcomp.price }}</h6>
                              <small>руб.</small>
                            </div>
                            <div v-else><small>( по запросу )</small></div>
                          </div>
                          <div class="position-top-left">
                            <b-form-checkbox
                              size="lg"
                              :value="option"
                            ></b-form-checkbox>
                          </div>
                          <div class="bottom-left d-none d-sm-block name-comp">
                            <b-badge
                              v-b-tooltip.hover
                              :title="option.description"
                              pill
                              variant="info info-badge"
                            >
                              <i>i</i>
                            </b-badge>
                            <small>
                              <b>{{ option.name.slice(0, 60) }}...</b>
                            </small>
                          </div>
                        </div>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-4 mh-40">
          <b-col cols="12">
            <div class="mb-4 prod-comp-block h-100">
              <b-tabs content-class="mt-3" fill>
                <b-tab title="Отзывы">
                  <ProductReviewSec :reviews="reviews" :prodid="product.id" />
                </b-tab>
                <b-tab active title="Характеристики">
                  <div v-if="product.propstrmodel.length === 0">
                    <h6 class="text-light">Характеристики не найдены</h6>
                  </div>
                  <div v-else>
                    <b-row
                      v-for="(prop, prp) in getUniqueProps(
                        product.propstrmodel
                      )"
                      :key="prp"
                    >
                      <b-col cols="5">
                        <p>{{ prop.name }}</p>
                      </b-col>
                      <b-col cols="7">
                        <p>{{ prop.value }}</p>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
                <b-tab title="Материалы">
                  <div v-if="product.prod_link.length === 0">
                    <h6 class="text-light">Нет дополнительных материалов</h6>
                  </div>
                  <div v-else>
                    <div v-for="(prod_link, pl) in product.prod_link" :key="pl">
                      <ul>
                        <li class="mt-4">
                          <b class="ml-2">{{ pl + 1 }}.</b>
                          <a
                            v-b-tooltip.topright
                            target="blank"
                            class="m-4 text-light"
                            variant="link"
                            :href="prod_link.url"
                            :title="prod_link.description"
                          >
                            {{ prod_link.name }}
                          </a>
                          <br />
                          <div class="prod-link-description">
                            <small>{{ prod_link.description }}</small>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div v-for="(prod_doc, pd) in product.prod_doc" :key="pd">
                      <ul class="hr">
                        <li>
                          <b-btn
                            v-b-tooltip.topright
                            target="blank"
                            class="mt-2"
                            variant="outline-light"
                            size="sm"
                            :href="prod_doc.doc"
                            :title="prod_doc.description"
                          >
                            {{ prod_doc.name }}
                          </b-btn>
                        </li>
                      </ul>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <Subscriebe />
    <CartModal />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ProductReviewSec from '@/components/sections/ProductReviewSec.vue'
import ProductPreviewSec from '@/components/sections/ProductPreviewSec.vue'
import Subscriebe from '@/components/modals/Subscriebe.vue'
import CartModal from '../../components/modals/CartModal.vue'
import CDEK from '../../components/widgets/SDEK.vue'

export default {
  components: {
    CDEK,
    Subscriebe,
    CartModal,
    ProductReviewSec,
    ProductPreviewSec,
  },
  async asyncData({ params, $axios }) {
    const ip = await $axios.$get(`myip/`)
    const product = await $axios.$get(`c/prod/${params.id}`)
    const reviews = await $axios.$get(`u/reviews/?prod_id=${params.id}`)
    const regions = await $axios.$get(`o/cdek/regions/`)
    const breadcrumbs = await $axios.$get(
      `c/breadcrumb/?ct=${product.category.id}`
    )
    return { ip, product, breadcrumbs, reviews, regions }
  },
  data() {
    return {
      category: '',
      images: [],
      priceseo: [],
      compprods: [],
      compproduct: [],
      loading: false, /// Not work(for sceleton)
      options: [],
      selected: [],
      compsumm: undefined,
      crutch: false,
      regions: null,
    }
  },
  head() {
    const structuredData = {
      '@context': 'http://schema.org',
      '@type': 'Product',
      id: this.product.vcode,
      name: this.product.name,
      image: this.product.preview_image,
      description: this.product.description,
      mpn: this.product.vcode,
      // brand: {
      //   '@type': 'Brand',
      //   name: this.product.brand.brand,
      // },
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: this.product.rating,
          bestRating: '3', /// Изменить количество комментариев тут или ниже х3
        },
        author: {
          '@type': 'Person',
          name: '/',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: this.product.rating,
        reviewCount: '5',
      },
      offers: {
        '@type': 'Offer',
        url: 'https://glsvar.ru/product/' + this.priceseo.id,
        priceCurrency: 'руб.',
        price: this.priceseo.price,
        itemCondition: 'https://schema.org/UsedCondition',
        availability: 'https://schema.org/InStock',
      },
    }

    return {
      title: `${this.product.name} ${this.shop.city} купить в интернет магазине Главный сварщик`,
      script: [
        {
          type: 'application/ld+json',
          json: structuredData,
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.product.name} ${this.shop.city} купить онлайн в интернет магазине Главный сварщик`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${this.product.name}, ${this.shop.city}, интернет ,магазин, Главный Cварщик`,
        },
        {
          hid: 'image',
          property: 'image',
          content: this.product.preview_image,
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      completeID: 'modules/cart/completeID',
      setCompPrice: 'modules/cart/setCompPrice',
      breadCrumb: 'breadCrumb',
    }),
    ...mapState({
      // statusCartModal: (state) => state.statusCartModal,
      selectedShop: (state) => state.selectedShop,
      shop: (state) => state.shop,
      cart: (state) => state.modules.cart.products,
      stateregtoast: (state) => state.stateregtoast,
    }),
  },
  mounted() {
    this.scrollTop()
    this.registerToast()
    // this.getCompProducts(this.product.product_comp)
    this.getCategories(this.product.category)
  },
  methods: {
    scrollTop() {
      document
        .getElementById('startpage')
        .scrollIntoView({ behavior: 'smooth' })
    },
    registerToast() {
      if (!this.$auth.loggedIn && this.stateregtoast) {
        this.$bvModal.show('subscriebe')
      }
    },
    getListRegions() {
      this.$axios
        .$get('o/cdek/regions/')
        .then((response) => (this.regions = response))
        .catch((err) => alert(err))
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
    complectSumm() {
      let result = 0
      this.selected.forEach((el) => (result += el.prod_price[0].price))
      return String(result)
    },
    addComplectToCart() {
      this.selected.forEach((el) => this.addProductToCart(el))
      if (this.crutch) {
        this.crutch = false
      } else {
        this.crutch = true
      }
    },
    allProductImage(images) {
      this.$root.$emit('bv::show::modal', 'product-img')
      this.images = images
    },
    // filterCart(id) {
    //   return this.cartID.filter((n) => n === id).length !== 0
    // },
    // selcompleteID() {
    //   return this.completeID.filter((n) => n === 8).length !== 0
    // },
    // filterComp(id) {
    //   return this.compID.filter((n) => n === id).length !== 0
    // },
    // filterFav(id) {
    //   return this.favID.filter((n) => n === id).length !== 0
    // },
    selcategory(category) {
      this.category = category
    },
    selprice(price) {
      this.priceseo = price
    },
    prev() {
      this.$refs.prodImg.prev()
    },
    next() {
      this.$refs.prodImg.next()
    },
    // makeToast(product, variant = null, action = null) {
    //   if (this.statusCartModal) {
    //     this.$bvToast.toast(action, {
    //       title: product.name,
    //       variant,
    //       solid: true,
    //     })
    //   }
    // },
    // async getCompProducts(ids) {
    //   const enable = []
    //   for (const id in ids) {
    //     this.compproduct.push(ids[id].rel_id)
    //     if (ids[id].completed === true) {
    //       enable.push(ids[id].rel_id)
    //     }
    //   }
    //   const compprods = await this.$axios.$get(`c/comp/`, {
    //     params: { id: this.compproduct },
    //   })
    //   for (const prod in enable) {
    //     const id = enable[prod]
    //     const result = compprods.filter((prod) => prod.id === Number(id))
    //     this.selected.push(result[0])
    //   }
    //   this.options = compprods
    // },
    getUniqueProps(props) {
      const uniqueprops = []
      for (const prop in props) {
        uniqueprops.push(props[prop])
      }
      return uniqueprops
    },
    ...mapActions({
      setComplete: 'modules/cart/setComplete',
      getCategories: 'getCategories',
    }),
  },
}
</script>

<style scoped>
.mh-40 {
  min-height: 40vh;
}
.prod-info-bg {
  background-color: #00000085;
  border: 1px solid #f8dc08;
  border-radius: 5px;
}
.cart-img-bg {
  background-color: #ffffff;
  height: 100%;
  text-align: center;
  border-radius: 3px;
  color: #111111;
}
.prod-comp-block {
  background-color: #00000085;
  border: 1px solid #f8dc08;
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
}
.comp-img {
  background-color: #ffffff;
  border-radius: 3px;
  text-align: center;
}
.info-badge {
  font-size: 12px !important;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.name-comp {
  background-color: #000000cc;
  width: 95%;
  padding: 2px;
  padding-right: 10px;
  border-radius: 3px;
}
.top-right-comp {
  position: absolute;
  background-color: #000000cc;
  border-radius: 5px;
  color: #ffffff;
  padding-left: 5px;
  padding-right: 5px;
  top: 3px;
  right: 3px;
}
.promo-old-price {
  color: #9d9d9d;
}

.form-control {
  background-color: #ffffff00 !important;
}
.prod-link-description {
  width: 40%;
  padding-left: 10%;
  padding-right: 5%;
}
</style>
