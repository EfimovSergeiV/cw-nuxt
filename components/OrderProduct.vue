<template>
  <section id="order-product" class="text-light">
    <transition-group tag="div" name="left-emergence">
      <div
        v-for="product in cart"
        :key="product"
        class="mt-2 mb-2 light-border-cart dark-bg text-light"
      >
        <b-row class="p-1">
          <b-col cols="12" lg="8">
            <b-row>
              <b-col cols="4" md="3">
                <div class="bg-light">
                  <b-img
                    class="cart-img"
                    :src="product.preview_image"
                    width="235"
                    height="176"
                    fluid
                    :alt="product.vcode"
                  ></b-img>
                </div>
              </b-col>
              <b-col cols="8" md="9">
                <b-row class="h-75">
                  <b-col cols="12">
                    <small>{{ product.vcode }}</small>
                    <br />
                    <nuxt-link :to="{ path: `/product/${product.id}` }">
                      <h6 class="text-light">{{ product.name }}</h6>
                    </nuxt-link>
                  </b-col>
                </b-row>
                <b-row class="h-25" align-v="end">
                  <b-col cols="12">
                    <div v-if="productFav(product.id)" class="hr">
                      <b-btn
                        variant="outline-light"
                        size="sm"
                        @click="
                          {
                            delProductToFav(product),
                              makeToast(
                                product,
                                'warning',
                                'Был удалён из избранного'
                              )
                          }
                        "
                        >Удалить из избранного
                      </b-btn>
                    </div>
                    <div v-else class="hr">
                      <b-btn
                        variant="outline-light"
                        size="sm"
                        @click="
                          {
                            addProductToFav(product),
                              makeToast(
                                product,
                                'success',
                                'Был добавлен в избранное'
                              )
                          }
                        "
                        >В избраннное
                      </b-btn>
                    </div>
                    <b-btn
                      variant="link"
                      size="sm"
                      @click="delProductToCart(product)"
                      >Удалить
                    </b-btn>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" lg="4">
            <b-row align-v="start" class="h-50 pt-2">
              <b-col cols="7" class="text-left">
                <!-- <b-form-spinbutton
                :id="product_item"
                v-model="editQuantity"
                inline
                wrap
              ></b-form-spinbutton> -->
                <b-btn
                  variant="outline-light"
                  size="sm"
                  @click="decProductToCart(product)"
                >
                  <div class="mdi mdi-minus"></div>
                </b-btn>
                <h5 class="hr ml-1 mr-1">{{ product.quantity }}</h5>
                <b-btn
                  variant="outline-light"
                  size="sm"
                  @click="incProductToCart(product)"
                >
                  <div class="mdi mdi-plus"></div>
                </b-btn>
              </b-col>
              <b-col cols="5" class="text-right">
                <h6>
                  <h6 class="hr">
                    {{
                      getProductValues(
                        product.prod_price
                      ).price.toLocaleString()
                    }}
                  </h6>
                  руб./шт.
                </h6>
              </b-col>
            </b-row>
            <b-row align-v="end" class="h-50 pt-2">
              <b-col cols="6">
                <h5>Сумма:</h5>
              </b-col>
              <b-col cols="6" class="text-right">
                <h6>
                  <h5 class="hr">
                    {{
                      getProductValues(product.prod_price).price *
                      product.quantity
                    }}
                  </h5>
                  руб.
                </h6>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      df: 8,
    }
  },
  computed: {
    ...mapState({
      cart: (state) => state.modules.cart.products,
      shop: (state) => state.shop,
      selectedShop: (state) => state.selectedShop,
    }),
    ...mapGetters({
      favID: 'modules/favorites/favID',
    }),
  },
  methods: {
    ...mapActions({
      incProductToCart: 'modules/cart/incProductToCart',
      decProductToCart: 'modules/cart/decProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
      addProductToFav: 'modules/favorites/addProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
      cleanCart: 'modules/cart/cleanCart',
    }),
    getProductValues(productData) {
      let selValues = null
      productData.forEach((element) => {
        if (element.shop === this.shop.shop_id) {
          selValues = element
        }
      })
      return selValues
    },
    makeToast(product, variant = null, action = null) {
      this.$bvToast.toast(action, {
        title: product.name,
        variant,
        solid: true,
      })
    },
    productFav(id) {
      return this.favID.filter((n) => n === id).length !== 0
    },
  },
}
</script>

<style scoped>
.dark-bg {
  background-color: #0000006e;
}
.complete-card-cart {
  border-radius: 5px;
}
.cart-img {
  padding: 10px;
}
.comp-cart {
  background-color: #0000006e;
  border-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 3px;
}
</style>
