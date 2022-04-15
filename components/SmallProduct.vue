<template>
  <div class="product__small-card mt-1 mb-1 p-2">
    <b-row>
      <b-col class="text-center" cols="12" md="4">
        <!-- {{ like }} -->
        <!-- <b-img
          :src="$axios.defaults.baseURL +  + like.product.preview_image"
          fluid
          width="160"
          alt="Responsive image"
        ></b-img> -->
      </b-col>
      <b-col cols="12" md="8">
        <b-row>
          <b-col cols="12">
            <!-- <p>{{ like.product.name }}</p> -->
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6" class="mt-2 mb-2">
            <b-btn size="sm">В сравнение</b-btn>
          </b-col>
          <b-col cols="6" class="mt-2 mb-2 text-right">
            <h4>18000 руб.</h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center" cols="6">
            <!-- <LikeBtn
              :product="like.product"
              :status="true"
              title="В избранное"
            /> -->
          </b-col>
          <b-col class="text-center" cols="6">
            <b-btn size="sm" block>В корзину</b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import LikeBtn from '../components/buttons/LikeBtn.vue'

export default {
  components: {
    // LikeBtn,
  },
  props: {
    like: {
      type: Object,
      default: Object,
    },
  },
  computed: {
    ...mapState({
      shop: (state) => state.shop,
    }),
  },
  methods: {
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
