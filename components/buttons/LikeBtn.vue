<template>
  <transition name="fade" mode="out-in">
    <b-btn
      v-if="filterFav(product.id)"
      key="in-like"
      :variant="variant"
      class="mdi mdi-16px mdi-heart-multiple"
      @click="delLikeProduct(product)"
    >
      <h6 v-if="title" class="hr ml-1">В избранном</h6>
    </b-btn>
    <b-btn
      v-else
      key="out-like"
      :variant="variant"
      class="mdi mdi-16px mdi-heart-multiple-outline"
      @click="addLikeProduct(product)"
    >
      <h6 v-if="title" class="hr ml-1">В избраннное</h6>
    </b-btn>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      default: Object,
    },
    status: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'link',
    },
  },
  computed: {
    ...mapGetters({
      favID: 'modules/favorites/favID',
    }),
  },
  methods: {
    ...mapActions({
      addProductToFav: 'modules/favorites/addProductToFav',
      delProductToFav: 'modules/favorites/delProductToFav',
    }),
    filterFav(id) {
      return this.favID.filter((n) => n === id).length !== 0
    },
    addLikeProduct(product) {
      this.addProductToFav(product)
      this.$bvToast.toast(product.name, {
        title: 'Товар добавлен в избранное',
        variant: 'success',
      })
      if (this.$auth.loggedIn) {
        this.$axios
          .$post('/u/likes/', {
            product: product.id,
          })
          .catch(() => {})
      }
    },
    delLikeProduct(product) {
      this.delProductToFav(product)
      this.$bvToast.toast(product.name, {
        title: 'Товар удален из избранного',
        variant: 'warning',
      })
      if (this.$auth.loggedIn) {
        this.$axios
          .$post('/u/likes/', {
            product: product.id,
          })
          .catch(() => {})
      }
    },
  },
}
</script>
