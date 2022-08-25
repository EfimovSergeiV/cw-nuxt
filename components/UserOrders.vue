<template>
  <div
    class="text-dark bg-white p-2"
    style="border-radius: 3px; min-height: 30vh"
  >
    <b-row>
      <b-col cols="12">
        <h5>Мои заказы</h5>
      </b-col>
    </b-row>
    <div v-if="orders.length === 0">
      <b-row>
        <b-col>
          <h4>Заказов не найдено</h4>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <div v-for="(order, id) in orders" :key="order.id">
        <b-row>
          <b-col class="mt-2 mb-2" cols="12">
            <div
              class="p-1 point-cursor"
              style="border: solid 1px; border-radius: 3px"
              @click="showDetails(id)"
            >
              <b-row>
                <b-col cols="6">
                  <p>
                    {{ order.order_number }} ({{ order.status }})
                    <br />
                    <small>{{ order.date_created }}</small>
                  </p>
                </b-col>
                <b-col cols="6" class="text-right">
                  <p>
                    Итог: <b>{{ order.total }} RUB</b>
                  </p>
                </b-col>
              </b-row>
              <transition name="left-emergence" mode="in-out">
                <b-row v-if="showid === id" :id="id">
                  <b-col
                    v-for="product in order.client_product"
                    :key="product.id"
                    cols="12"
                  >
                    <div
                      class="p-1 m-1"
                      style="border: solid 1px; border-radius: 3px"
                    >
                      <b-row>
                        <b-col class="text-right" cols="8" md="9">
                          <small>{{ product.name }}</small>
                        </b-col>
                        <b-col class="text-right" cols="4" md="3">
                          <b-img
                            :src="product.preview_image"
                            width="60"
                            fluid
                            alt="Responsive image"
                          ></b-img>
                          <br />
                          <small>
                            {{ product.price }} X {{ product.quantity }}
                          </small>
                        </b-col>
                      </b-row>
                    </div>
                  </b-col>
                </b-row>
              </transition>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  components: {
    // UserInfo,
    // UserOrders,
  },
  props: {
    orders: {
      type: Array,
      default: Array,
    },
  },
  data: () => ({
    showid: 100,
  }),
  methods: {
    showDetails(id) {
      if (this.showid === id) {
        this.showid = 100
      } else {
        this.showid = id
      }
    },
  },
  // middleware: 'auth',
  // async asyncData({ $axios }) {
  //   const reslike = await $axios.$get('u/likes/').catch((err) => err)
  //   const user = await $axios.$get('u/profile/').catch((err) => err)
  //   const sales = await $axios.$get('c/sale/').catch((err) => err)
  //   return { user, reslike, sales }
  // },
  // data: () => ({
  //   active: 'profile',
  // }),
  // mounted() {
  //   this.addLikesAction(this.reslike) /// CRUNCH! Move in middleware
  // },
  // methods: {
  //   ...mapActions({
  //     addLikesAction: 'addLikesAction',
  //   }),
  //   statusBtn(name) {
  //     if (name === this.active) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   },
  // },
}
</script>
