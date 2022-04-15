<template>
  <div class="">
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
              <div class="row">
                <div
                  v-for="neue in recommend.slice(0, 12)"
                  :key="neue"
                  class="col-xl-3 col-lg-3 col-sm-6 col-12"
                >
                  <!-- Start Product Defautlt Single -->
                  <div class="product-default-single border-around h-100">
                    <div class="product-img-warp">
                      <router-link
                        :to="{ name: 'product-id', params: { id: neue.id } }"
                      >
                        <b-img-lazy
                          blank-src="GLSVAR"
                          :alt="neue.name"
                          :src="neue.preview_image"
                          class="product-default-img img-fluid"
                          @error.native="load = false"
                        ></b-img-lazy>
                        <!-- <img
                          :src="
                            'http://tehnosvar.beget.tech/' + neue.preview_image
                          "
                          :alt="neue.preview_image"
                          class="product-default-img img-fluid"
                        /> -->
                      </router-link>
                      <!-- <div class="product-action-icon-link">
                        <ul>
                          <li>
                            <a
                              @click="
                                {
                                  addProductToFav(neue),
                                    makeToast(
                                      neue,
                                      'warning',
                                      'Был удалён из избранного'
                                    );
                                }
                              "
                              ><i
                                class="text-dark mdi mdi-24px mdi-thumb-up-outline"
                              ></i
                            ></a>
                          </li>
                          <li>
                            <a
                              @click="
                                {
                                  addToComparison(neue),
                                    makeToast(
                                      neue,
                                      'success',
                                      'Был добавлен к сравнению'
                                    );
                                }
                              "
                              ><i
                                class="text-dark mdi mdi-24px mdi-chart-box-outline"
                              ></i
                            ></a>
                          </li>
                          <li>
                            <a
                              @click="
                                {
                                  addProductToCart(neue),
                                    makeToast(
                                      neue,
                                      'success',
                                      'Был добавлен в Вашу корзину'
                                    );
                                }
                              "
                              data-toggle="modal"
                              data-target="#modalQuickview"
                              ><i
                                class="text-dark mdi mdi-24px mdi-cart-outline"
                              ></i
                            ></a>
                          </li>
                        </ul>
                      </div> -->
                    </div>
                    <div class="product-default-content">
                      <div
                        v-for="price in neue.prod_price.slice(0, 1)"
                        :key="price"
                      >
                        <span class="product-default-price"
                          >{{ price.price.toLocaleString() }} руб.</span
                        >
                      </div>
                      <router-link
                        class="title-product text-dark"
                        :to="{
                          name: 'product-id',
                          params: { id: neue.id },
                        }"
                      >
                        {{ neue.name }}
                      </router-link>
                      <!-- <span class="product-default-price"
                        ><del class="product-default-price-off">$30.12</del>
                        $25.12</span> -->

                      <!-- <span class="product-default-price">{{
                        neue.price
                      }}</span> -->
                    </div>
                  </div>
                  <!-- End Product Defautlt Single -->
                </div>
              </div>
            </div>
            <!-- End Grid View Product -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Tab Wrapper -->
    <!-- <b-container class="object yellow-border-inset h-100">
    <b-row>
      <b-col cols="12">
        <h4 class="text-warning ml-4">Новые товары на сайте</h4>
      </b-col>
    </b-row>
    <b-row class="m-2">
      <b-col v-for="neue in recommend.slice(0, 8)" :key="neue" cols="6" lg="3">
        <div>
          <b-card
            class="mt-4"
            overlay
            :img-src="'http://tehnosvar.beget.tech/' + neue.preview_image"
            :img-alt="neue.preview_image"
            text-variant="white"
          >
          </b-card>
        </div>
        <router-link :to="{ name: 'Product', params: { id: neue.id } }"
          ><small class="product-default-img-link">{{ neue.name }}</small>
        </router-link>
      </b-col>
    </b-row>
  </b-container> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommend: [],
    }
  },
  async fetch() {
    this.recommend = await fetch(
      'https://api.glsvar.ru/c/recommend/'
    ).then((res) => res.json())
  },
}
</script>
