<template>
  <b-row>
    <b-col v-for="product in products" :key="product.id" cols="6" lg="4" xl="3">
      <div class="test">
        <div class="product-list--card">
          <div class="product-list--card-top">
            <div class="product-img-warp" style="min-height: 177px">
              <router-link
                class="text-center"
                :to="{
                  name: 'product-id',
                  params: { id: product.id },
                }"
              >
                <b-img-lazy
                  :src="product.preview_image"
                  onerror="this.src='../../noimage-235-177.jpg'"
                  :alt="product.name"
                  height="187"
                  width="245"
                  class="img-fluid pt-2 pr-4 pl-4 product-list--card-image"
                ></b-img-lazy>
                <b-badge
                  v-if="product.promo"
                  class="product-list--card-badge"
                  variant="danger"
                >
                  Скидка на товар
                </b-badge>
              </router-link>
            </div>
          </div>

          <div class="product-list--card-center">
            <b-row>
              <b-col cols="12">
                <div>
                  <span
                    v-if="getProductValues(product.prod_price).price > 0"
                    class="product-default-price"
                    ><del v-if="product.promo" class="product-default-price-off"
                      >{{ product.discount }}
                    </del>
                    <h5 class="hr">
                      {{
                        getProductValues(
                          product.prod_price
                        ).price.toLocaleString()
                      }}
                    </h5>
                    руб.
                  </span>
                  <small v-else class="text-dark">(Цена по запросу)</small>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <small
                  v-if="getProductValues(product.prod_price).status === 'order'"
                  class="hr text-dark"
                >
                  под заказ
                </small>
                <small
                  v-if="getProductValues(product.prod_price).status === 'stock'"
                  class="hr text-dark"
                >
                  Имеется в наличии
                </small>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <div class="bugfix">
                  <router-link
                    class="title-product text-dark"
                    :to="{
                      name: 'product-id',
                      params: { id: product.id },
                    }"
                  >
                    {{ product.name }}
                  </router-link>
                </div>
              </b-col>
            </b-row>
          </div>

          <div class="p-1">
            <b-row align-v="end" class="text-right">
              <b-col cols="12">
                <div class="btn-bugfix">
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
                    <li
                      v-if="getProductValues(product.prod_price).price > 0"
                      @click="openCartModal()"
                    >
                      <CartBtn
                        class="mt-1 product-list--cart-btn-shadow"
                        :product="product"
                        :variant="{ add: 'warning', del: 'danger' }"
                        :status="true"
                        :title="true"
                      />
                    </li>
                    <li v-else>
                      <b-btn
                        class="mdi mdi-16px mdi-icon mdi-bell-plus-outline"
                        variant="warning"
                        @click="openAskPriceModal(product)"
                      >
                        <h6 class="hr ml-1">Запросить</h6>
                      </b-btn>
                    </li>
                    <AskPriceModal :product="pricerequest" />
                    <!-- <li @click="openCartModal()">
                      <CartBtn
                        class="mt-1 product-list--cart-btn-shadow"
                        :product="product"
                        :variant="{ add: 'warning', del: 'danger' }"
                        :status="true"
                        :title="true"
                      />
                    </li> -->
                  </ul>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'
import CompBtn from '../buttons/CompBtn.vue'
import CartBtn from '../buttons/CartBtn.vue'
import LikeBtn from '../buttons/LikeBtn.vue'
import AskPriceModal from '../modals/AskPriceModal.vue'

export default {
  components: {
    CompBtn,
    CartBtn,
    LikeBtn,
    AskPriceModal,
  },
  props: {
    products: {
      type: Array,
      default: Array,
    },
  },
  data() {
    return {
      pricerequest: {},
    }
  },
  computed: {
    ...mapState({
      statusCartModal: (state) => state.statusCartModal,
      shop: (state) => state.shop,
    }),
  },
  methods: {
    openCartModal() {
      if (!this.statusCartModal) {
        this.$bvModal.show('cart-modal')
      }
    },
    openAskPriceModal(product) {
      this.$bvModal.show('askprice')
      this.pricerequest = product
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
  },
}
</script>

<style lang="scss">
.product-list--card {
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 3px;
  border-radius: 3px;
  transition: all 1.8s ease;
  border: #505050 1px solid;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 5px 1px #fffb0088;
  }
}
.product-list--card-image {
  position: absolute;
  // text-align: center;
}
.product-list--card-badge {
  position: relative;
}
.product-list--card-center {
  height: 120px;
  color: #ffffff !important;
  padding: 5px;
}
.product-list--cart-btn-shadow {
  box-shadow: 0px 0px 8px 2px #00000088;
}

// .bugfix {
//   background: linear-gradient(#ffffff, rgb(0, 0, 0));
// }

.btn-bugfix {
  background-color: #ffffff;
}

.bugfix:hover {
  position: relative;

  height: 95px;
  z-index: 50;
  background: linear-gradient(#ffffff, #ffffff93);
}
</style>
