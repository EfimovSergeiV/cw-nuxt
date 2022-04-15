<template>
  <transition name="fade" mode="out-in">
    <b-btn
      v-if="filterComp(product.id)"
      key="in-comp"
      :variant="variant"
      class="mdi mdi-16px mdi-equalizer"
      @click="
        delToComparison(product),
          showAction({ title: 'Удалён из сравнения', variant: 'warning' })
      "
    >
      <h6 v-if="title" class="hr ml-1">В сравнении</h6>
    </b-btn>
    <b-btn
      v-else
      key="out-comp"
      :variant="variant"
      class="mdi mdi-16px mdi-equalizer-outline"
      @click="
        addToComparison(product),
          showAction({ title: 'Добавлен в сравнение', variant: 'success' })
      "
    >
      <h6 v-if="title" class="hr ml-1">В сравнение</h6>
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
      compID: 'modules/comparison/compID',
    }),
  },
  methods: {
    filterComp(id) {
      return this.compID.filter((n) => n === id).length !== 0
    },
    showAction(action) {
      this.$bvToast.toast(this.product.name, {
        title: action.title,
        variant: action.variant,
      })
    },
    ...mapActions({
      addToComparison: 'modules/comparison/addToComparison',
      delToComparison: 'modules/comparison/delToComparison',
    }),
  },
}
</script>
