<template>
  <div class="text-dark">
    <b-row class="mt-4 mb-4">
      <b-col class="text-center mt-2 mb-2" cols="12" md="4">
        <div
          class="product__image-bg pt-1 pb-1 point-cursor"
          @click="allProductImage()"
        >
          <b-img
            fluid
            width="255px"
            height="197px"
            :src="product.preview_image"
            onerror="this.src='../../noimage-235-177.jpg'"
            alt="Image 3"
          ></b-img>
        </div>
      </b-col>

      <b-col class="mt-2 mb-2" cols="12" md="8">
        <b-row class="h-50">
          <b-col cols="6">
            <h1 v-if="product.brand" class="text-dark">{{ product.brand.brand }}</h1>
            <h1 v-else>Бренд не указан</h1>
            <div class="line-hr"></div>
          </b-col>
          <b-col class="text-right" cols="6">
            <small>Артикул: {{ product.vcode }}</small>
          </b-col>
          <b-col cols="10">
            <h5>{{ product.name }}</h5>
          </b-col>
        </b-row>
        <b-row class="h-50">
          <b-col cols="12">
            <b-row>
              <b-col class="text-right" cols="12">
                <h1>
                  {{ getProductValues(product.prod_price) }}

                  <small class="text-dark">
                    <del v-if="product.promo" class="product-default-price-off">
                      {{ product.discount }}
                    </del>
                    {{ selectPrice.price.toLocaleString() }}
                  </small>
                  <small v-if="selectPrice.price > 0" class="text-dark">руб.</small>
                  <small v-else class="text-dark">цена по запросу</small>
                </h1>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="text-right" cols="12">
                <div>
                  <h6 v-if="selectPrice.status == 'order'">под заказ</h6>
                  <h6 v-else>в наличии</h6>
                </div>
              </b-col>
            </b-row>

            <b-row align-v="end">
              <b-col cols="4">
                <b-form-rating
                  id="rating-sm-no-border"
                  :value="product.rating"
                  variant="dark"
                  readonly
                  no-border
                  inline
                  size="sm"
                ></b-form-rating>
              </b-col>
              <b-col class="text-right" cols="8">
                <ul class="hr">
                  <li>
                    <CompBtn
                      :product="product"
                      :variant="'link-dark'"
                      :status="true"
                      class="mt-1"
                    />
                  </li>
                  <li>
                    <LikeBtn
                      :product="product"
                      :variant="'link-dark'"
                      :status="true"
                      class="mt-1"
                    />
                  </li>
                  <li v-if="selectPrice.price > 0" @click="openCartModal()">
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
                      @click="openAskPriceModal()"
                    >
                      <h6 class="hr ml-1">Запросить</h6>
                    </b-btn>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- <div class="line-hr"></div> -->
    <!-- <b-row class="mt-4 mb-4">
      <b-col cols="12">
        {{ product.description }}
      </b-col>
    </b-row> -->
    <ProductImages :images="product.prod_img" />
    <AskPriceModal :product="product" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CompBtn from '../buttons/CompBtn.vue'
import CartBtn from '../buttons/CartBtn.vue'
import LikeBtn from '../buttons/LikeBtn.vue'
import ProductImages from '../modals/ProductImages.vue'
import AskPriceModal from '../modals/AskPriceModal.vue'

export default {
  components: {
    CompBtn,
    CartBtn,
    LikeBtn,
    ProductImages,
    AskPriceModal,
  },
  props: {
    product: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {
      selectPrice: [],
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
    allProductImage(images) {
      this.$root.$emit('bv::show::modal', 'product-img')
      this.images = images
    },
    openAskPriceModal() {
      this.$bvModal.show('askprice')
    },
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
