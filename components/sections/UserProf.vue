<template>
  <div>
    <b-row class="mt-1 mb-2">
      <b-col cols="12">
        <UserInfo :user="user" />
      </b-col>
    </b-row>
    <b-row class="mt-2 mb-2">
      <b-col cols="12">
        <UserOrders :orders="orders" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import UserInfo from '../UserInfo.vue'
import UserOrders from '../UserOrders.vue'

export default {
  components: {
    UserInfo,
    UserOrders,
  },
  props: {
    user: {
      type: Array,
      default: Array,
    },
    orders: {
      type: Array,
      default: Array,
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

<style>
.warning-section {
  border: 1px solid #00000071;
  padding: 4px;
  border-radius: 5px;
}
</style>
