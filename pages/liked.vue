<template>
  <div class="mt-4 mb-4 text-light">
    <div v-if="like_prods.length > 0">
      <div>
        <b-row>
          <b-col>
            <h4>Сохранённые товары</h4>
          </b-col>
          <b-col></b-col>
        </b-row>
      </div>

      <!-- Start Tab Wrapper -->
      <div class="sort-product-tab-wrapper">
        <div class="row">
          <div class="col-12">
            <div class="tab-content tab-animate-zoom">
              <!-- Start Grid View Product -->
              <div
                id="layout-4-grid"
                class="tab-pane active show sort-layout-single"
              >
                <transition-group tag="b-row" name="fav">
                  <b-col
                    v-for="product in like_prods.slice(0, 12)"
                    :key="product"
                    cols="12"
                    sm="6"
                    lg="3"
                    xl="3"
                  >
                    <!-- Start Product Defautlt Single -->
                    <div class="product-default-single border-around h-100">
                      <!-- <b-badge variant="danger">РЕКОМЕНДУЕМ</b-badge> -->
                      <div class="product-img-warp">
                        <router-link
                          :to="{
                            name: 'Product',
                            params: { id: product.id },
                          }"
                        >
                          <b-img
                            :src="product.preview_image"
                            class="product-default-img img-fluid"
                            @error.native="load = false"
                          ></b-img>
                        </router-link>
                        <div class="product-action-icon-link">
                          <ul>
                            <li>
                              <a
                                v-b-tooltip.topleft
                                title="Удалить из избранного"
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
                                ><i
                                  class="text-dark mdi mdi-24px mdi-thumb-up-outline"
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                v-if="filterComp(product.id)"
                                v-b-tooltip.topleft
                                title="Удалить из сравнения"
                                @click="
                                  {
                                    delToComparison(product),
                                      makeToast(
                                        product,
                                        'warning',
                                        'Был удалён из сравнения'
                                      )
                                  }
                                "
                                ><i
                                  class="text-dark mdi mdi-24px mdi-chart-box-outline"
                                ></i
                              ></a>
                              <a
                                v-else
                                v-b-tooltip.topleft
                                title="Добавить в сравнение"
                                @click="
                                  {
                                    addToComparison(product),
                                      makeToast(
                                        product,
                                        'success',
                                        'Был добавлен к сравнению'
                                      )
                                  }
                                "
                                ><i
                                  class="text-dark mdi mdi-24px mdi-chart-box-outline"
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                v-if="filterCart(product.id)"
                                v-b-tooltip.topleft
                                title="Удалить из корзины"
                                @click="
                                  {
                                    delProductToCart(product),
                                      makeToast(
                                        product,
                                        'warning',
                                        'Был удалён из корзины'
                                      )
                                  }
                                "
                                ><i
                                  class="text-dark mdi mdi-24px mdi-cart-outline"
                                ></i
                              ></a>
                              <a
                                v-else
                                v-b-tooltip.topleft
                                title="Добавить в корзину"
                                data-toggle="modal"
                                data-target="#modalQuickview"
                                @click="
                                  {
                                    addProductToCart(product),
                                      makeToast(
                                        product,
                                        'success',
                                        'Был добавлен в Вашу корзину'
                                      )
                                  }
                                "
                                ><i
                                  class="text-dark mdi mdi-24px mdi-cart-outline"
                                ></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-default-content">
                        <!-- <div
                          v-for="price in product.prod_price.slice(0, 1)"
                          :key="price"
                        >
                          <span class="product-default-price"
                            >{{ price.price }} руб.</span
                          >
                        </div> -->
                        <h6 class="product-default-link">
                          <router-link
                            :to="{
                              name: 'Product',
                              params: { id: product.id },
                            }"
                            ><small
                              class="product-default-img-link text-dark"
                              >{{ product.name }}</small
                            >
                          </router-link>
                        </h6>
                        <!-- <span class="product-default-price"
                        ><del class="product-default-price-off">$30.12</del>
                        $25.12</span>

                        <span class="product-default-price">{{
                        neue.price
                      }}</span> -->
                      </div>
                    </div>
                    <!-- End Product Defautlt Single -->
                  </b-col>
                </transition-group>
              </div>
              <!-- End Grid View Product -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <b-row>
        <b-col cols="12" md="6">
          <h4 class="text-light">У вас нет товаров в закладках</h4>
        </b-col>
        <b-col cols="12" md="6">
          <b-btn to="/cts" block variant="outline-warning">
            Перейти в каталог
          </b-btn>
        </b-col>
      </b-row>
      <Svarog />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Svarog from '../components/Svarog.vue'

export default {
  components: {
    Svarog,
  },
  data() {
    return {
      loading: false, /// Not work(for sceleton)
    }
  },
  computed: {
    ...mapGetters({
      cartID: 'modules/cart/cartID',
      compID: 'modules/comparison/compID',
      favID: 'modules/favorites/favID',
    }),
    ...mapState({
      statusCartModal: (state) => state.statusCartModal,
      selectedShop: (state) => state.selectedShop,
      shop: (state) => state.shop,
      cart: (state) => state.modules.cart.products,
    }),
    like_prods() {
      return this.$store.state.modules.favorites.products
    },
  },
  methods: {
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
      this.$bvToast.toast(action, {
        title: product.name,
        variant,
        solid: true,
      })
    },
    ...mapActions({
      addProductToCart: 'modeles/cart/addProductToCart',
      delProductToCart: 'modeles/cart/addProductToCart',
      addToComparison: 'modules/comparison/addToComparison',
      delToComparison: 'modules/comparison/addToComparison',
      delProductToFav: 'modules/favorites/delProductToFav',
    }),
  },
}
</script>
