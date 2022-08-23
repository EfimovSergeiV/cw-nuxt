<template>
  <b-row align-h="center" class="mt-3 mb-3">
    <b-col>
      <div class="bg-light pt-2 pb-2" style="border-radius: 3px">
        <b-row>
          <b-col class="text-center" cols="12">
            <div style="position: relative">
              <b-img
                :src="product.preview_image"
                onerror="this.src='../../noimage-235-177.jpg'"
                fluid
                rounded
                class="p-1"
                alt="Responsive image"
              ></b-img>
            </div>
            <div style="position: absolute; top: 0px; left: 20px">
              <b-badge v-if="product.promo" variant="danger">
                скидка на товар
              </b-badge>
            </div>
          </b-col>
        </b-row>
        <b-row class="m-1" align-v="center" style="min-height: 80px">
          <b-col class="text-center" cols="12">
            <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">
              <h6>{{ product.name }}</h6>
            </nuxt-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="text-right">
            <h6 class="mr-1">
              <h6 class="hr">
                {{ getProductValues(product.prod_price) }}
                <!-- {{
                  getProductValues(product.prod_price).price.toLocaleString()
                }} -->
                {{ selectPrice.price.toLocaleString() }}
              </h6>
              <small v-if="selectPrice.price > 0">руб.</small>
              <small v-else>цена по запросу </small>
            </h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-right">
            <ul class="hr">
              <li>
                <CompBtn
                  :product="product"
                  :variant="'dark'"
                  :status="true"
                  class="mt-1"
                />
              </li>
              <li>
                <LikeBtn
                  :product="product"
                  :variant="'dark'"
                  :status="true"
                  class="mt-1"
                />
              </li>
              <li>
                <CartBtn
                  class="mt-1 mr-1 product-list--cart-btn-shadow"
                  :product="product"
                  :variant="{ add: 'warning', del: 'danger' }"
                  :status="true"
                  :title="true"
                />
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'
import CompBtn from './buttons/CompBtn.vue'
import CartBtn from './buttons/CartBtn.vue'
import LikeBtn from './buttons/LikeBtn.vue'

export default {
  components: {
    CompBtn,
    CartBtn,
    LikeBtn,
  },
  props: {
    product: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {
      selectPrice: {},
    }
  },
  computed: {
    ...mapState({
      shop: (state) => state.shop,
    }),
  },
  methods: {
    // getProductValues(productData) {
    //   let selValues = null
    //   productData.forEach((element) => {
    //     if (element.shop === this.shop.shop_id) {
    //       selValues = element
    //     }
    //   })
    //   if (selValues.price !== 0) {
    //     return selValues
    //   } else {
    //     return { price: 'Стоимость по запросу' }
    //   }
    // },
    getProductValues(productData) {
      productData.forEach((element) => {
        if (element.shop === this.shop.shop_id) {
          if (element.price === 0) {
            element.price = ''
          }
          this.selectPrice = element
        }
      })
    },
  },
}
</script>
