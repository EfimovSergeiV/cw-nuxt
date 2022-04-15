<template>
  <div class="mt-4">
    <!-- <p class="text-light">{{ reslike }}</p> -->
    <b-row class="mb-2">
      <b-col cols="12">
        <div class="bg-light p-1" style="border-radius: 3px">
          <b-btn
            class="mdi mdi-account text-left"
            variant="link-dark"
            :disabled="statusBtn('profile')"
            @click="active = 'profile'"
          >
            Мой профиль
          </b-btn>

          <b-btn
            class="mdi mdi-sale text-left"
            variant="link-dark"
            :disabled="statusBtn('sales')"
            @click="active = 'sales'"
          >
            Товары со скидкой
          </b-btn>

          <b-btn
            class="mdi mdi-heart-multiple text-left"
            variant="link-dark"
            :disabled="statusBtn('likes')"
            @click="active = 'likes'"
          >
            Сохранённые товары
          </b-btn>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <transition name="left-emergence" mode="out-in">
              <UserProf
                v-if="active === 'profile'"
                id="profile"
                :user="user"
                :orders="orders"
              />
              <LikeUser v-if="active === 'likes'" id="likes" />
              <SaleUser v-if="active === 'sales'" id="sales" :prods="sales" />
            </transition>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import UserProf from '../components/sections/UserProf.vue'
import UserProf from '../components/sections/UserProf.vue'
import LikeUser from '../components/sections/LikeUser.vue'
import SaleUser from '../components/sections/SaleUser.vue'

export default {
  components: {
    UserProf,
    LikeUser,
    SaleUser,
  },
  middleware: 'auth',
  async asyncData({ $axios }) {
    const reslike = await $axios.$get('u/likes/').catch((err) => err)
    const user = await $axios.$get('u/profile/').catch((err) => err)
    const sales = await $axios.$get('c/sale/').catch((err) => err)
    const orders = await $axios.$get('o/user-order/').catch((err) => err)
    return { user, reslike, sales, orders }
  },
  data: () => ({
    active: 'profile',
  }),
  mounted() {
    this.addLikesAction(this.reslike) /// CRUNCH! Move in middleware
  },
  methods: {
    ...mapActions({
      addLikesAction: 'addLikesAction',
    }),
    statusBtn(name) {
      if (name === this.active) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style>
.warning-section {
  border: 1px solid #00000071;
  padding: 4px;
  border-radius: 5px;
}
</style>
