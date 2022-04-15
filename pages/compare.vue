<template>
  <transition name="fade" mode="out-in">
    <div v-if="comp.length > 0" key="ok" class="text-light mt-4">
      <b-row>
        <b-col cols="6">
          <h4>Сравнение товаров</h4>
        </b-col>
      </b-row>

      <b-row class="text-center" align-v="center">
        <b-col
          v-for="product in comp.slice(0, 4)"
          :key="product.id"
          cols="6"
          lg="3"
          class="mt-1 mb-1"
        >
          <div class="compare__single-card text-dark h-100">
            <router-link
              :to="{
                name: 'product-id',
                params: { id: product.id },
              }"
            >
              <b-img
                :src="product.preview_image"
                fluid
                rounded
                :alt="product.name"
              ></b-img>
            </router-link>
            <div class="p-1">
              <b-row class="text-left">
                <b-col cols="12" style="min-height: 50px">
                  <h6>{{ product.name }}</h6>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12">
                  <h5>
                    {{
                      getProductValues(
                        product.prod_price
                      ).price.toLocaleString()
                    }}
                    <h5 class="hr">руб.</h5>
                  </h5>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="9">
                  <b-btn
                    v-if="filterCart(product.id)"
                    size="sm"
                    block
                    variant="outline-success"
                    @click="addProductToCart(product)"
                    >Уже в корзине
                  </b-btn>
                  <b-btn
                    v-else
                    size="sm"
                    block
                    variant="success"
                    @click="addProductToCart(product)"
                    >В корзину
                  </b-btn>
                </b-col>
                <b-col cols="3">
                  <b-btn
                    size="sm"
                    block
                    variant="outline-danger"
                    @click="delToComparison(product)"
                    >X</b-btn
                  >
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
        <b-col v-if="comp.length < 4" cols="6" lg="3" class="pt-1 pb-1">
          <div class="compare__card-return text-dark h-100">
            <b-btn block variant="outline-light" @click="$router.go(-1)">
              Вернуться в категорию
            </b-btn>
          </div>
        </b-col>
      </b-row>
      <div class="compare__parameter mt-4 mb-4">
        <b-row
          v-for="prop in comp[0].propstrmodel"
          :key="prop"
          class="mt-3 mb-3"
        >
          <b-col cols="12">
            <div class="compare__parameter-line-name">
              <h5 class="p-1">{{ prop.name }}</h5>
            </div>
          </b-col>
          <b-col
            v-for="product in comp.slice(0, 4)"
            :key="product.id"
            class="text-center"
            cols="6"
            lg="3"
          >
            <div
              v-if="product.propstrmodel"
              class="compare__parameter-line-param"
            >
              <h6>{{ getPropValue(product.propstrmodel, prop.name) }}</h6>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <div v-else key="no" class="text-light mt-4">
      <b-row>
        <b-col>
          <h4>Нет товаров для сравнения</h4>
        </b-col>
      </b-row>

      <Svarog />
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Svarog from '../components/Svarog.vue'

export default {
  components: {
    Svarog,
  },
  data: () => ({
    search: '',
    searchResult: [],
    show: true,
  }),
  computed: {
    ...mapGetters({
      cartID: 'modules/cart/cartID',
      completeID: 'modules/cart/completeID',
      setCompPrice: 'modules/cart/setCompPrice',
      compID: 'modules/comparison/compID',
      favID: 'modules/favorites/favID',
      breadCrumb: 'breadCrumb',
    }),
    ...mapState({
      shop: (state) => state.shop,
      comp: (state) => state.modules.comparison.products,
    }),
  },
  methods: {
    ...mapActions({
      addProductToCart: 'modules/cart/addProductToCart',
      delProductToCart: 'modules/cart/delProductToCart',
      addToComparison: 'modules/comparison/addToComparison',
      delToComparison: 'modules/comparison/delToComparison',
      addProductToFav: 'modules/favorites/addProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
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
    getPropValue(props, name) {
      let value = null
      props.forEach((el) => {
        if (el.name === name) {
          value = el.value
        }
      })
      return value
    },
    getProps(props) {
      return props
    },
    filterCart(id) {
      return this.cartID.filter((n) => n === id).length !== 0
    },
  },
}
</script>

<style lang="scss">
.comp-enter,
.comp-leave-to {
  opacity: 0;
  transform: translateX(-12em);
}
.comp-enter-active,
.comp-leave-active {
  transition: all 0.3s ease;
}
.compare__single-card {
  background-color: #ffffff;
  border-radius: 2px;
}
.compare__props {
  color: #000000;
}
.compare__props-line {
  padding-left: 0px;
  padding-right: 0px;
}

.compare__parameter {
  background-color: #ececec;
  border-radius: 4px;
}
.compare__parameter-line-name {
  background-color: #cecece;
  color: #272727;
  border-radius: 3px;
  padding-left: 10vw;
}
.compare__parameter-line-param {
  background-color: #ececec;
  border-radius: 4px;
  color: #272727;
}
</style>
