<template>
  <div class="problem prodhr--card-style mt-2 mb-2">
    <b-row>
      <b-col cols="12" md="6">
        <div class="">
          <b-row class="text-dark">
            <b-col cols="4" md="6">
              <b-row align-v="center" class="h-100">
                <b-col cols="12">
                  <b-img
                    fluid
                    width="255px"
                    height="197px"
                    :src="product.preview_image"
                    alt="Image 3"
                  ></b-img>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="8" md="6">
              <b-row class="h-75">
                <b-col cols="12">
                  <h4>{{ product.brand.brand }}</h4>
                  <h6>{{ product.name }}</h6>
                </b-col>
              </b-row>
              <b-row align-v="end" class="h-25">
                <b-col cols="12">
                  <h6>В наличии</h6>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-right mb-1" cols="12">
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
          <!-- <li @click="openCartModal()"> -->
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
</template>

<script>
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
}
</script>

<style lang="scss">
.prodhr--card-style {
  background-color: #fff;
  color: #000;
  border-radius: 3px;
}
</style>
