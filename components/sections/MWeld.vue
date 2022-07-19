<template>
  <div class="mb-4 text-light">
    <b-row class="h-100 xs">
      
      <b-col lg="4" xl="6">
        <b-row class="h-100" align-v="center">
          <b-col cols="12">
            <b-img src="https://api.glsvar.ru/files/c/m-welt.png" rounded fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
      </b-col>
      

      <b-col lg="8" xl="6">

        <b-row class="h-25 ">
          <b-col cols="12">
            <div class="p-1 bg-mweld">
              <h3 class="text-right pr-2">Травильная паста M-WELD</h3>
            </div>
          </b-col>
        </b-row>

        <b-row class="h-50" align-v="center">
          <b-col cols="12">
            <div class="bg-mweld p-1">
              <small>
                <b>
                  Паста для травления и пассивации нержавеющей стали. 
                  Удаляет следы побежалости, ржавчину, восстанавливает свойства нержавеющей стали. 
                  Паста применяется для обработки сварных швов, мест термического взаимодействия (плазменная резка, горячая штамповка и тд), 
                  мест механического воздействия (шлифовка, резка, пескоструйная обработка и тд). 
                  После обработки пастой сварной шов и околошовная приобретает ровный матовый цвет и коррозионную стойкость нержавеющей стали.
                </b>
              </small>
            </div>
          </b-col>
        </b-row>

        <b-row class="h-25 mt-2" align-v="end">

          <b-col cols="6">
            <h3 class="mr-1 text-warning">
              <h2 class="hr text-warning">
                {{ getProductValues(product.prod_price) }}
                {{ selectPrice.price.toLocaleString() }}
              </h2>
              <small v-if="selectPrice.price > 0">руб.</small>
              <small v-else>цена по запросу</small>
            </h3>
          </b-col>
          <b-col class="text-right" cols="6">
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
          </b-col>

          
        </b-row>

      </b-col>
      
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CompBtn from '../buttons/CompBtn.vue'
import CartBtn from '../buttons/CartBtn.vue'
import LikeBtn from '../buttons/LikeBtn.vue'

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

<style scoped>
.bg-mweld {
  background-color: #00000050;
  border: 2px solid #00000010;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 1px #ffffff;
}
</style>