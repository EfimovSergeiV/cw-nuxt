<template>
  <div>
    <b-modal
      id="sdekmodal"
      centered
      hide-backdrop
      hide-footer
      size="xl"
      title="Расчитать стоимость доставки"
    >
      <SDEK :product="product" :regions="regions" />
    </b-modal>
  </div>
</template>

<script>
import SDEK from '../widgets/SDEK.vue'

export default {
  components: {
    SDEK,
  },
  props: {
    product: {
      type: Object,
      default: Object,
    },
    regions: {
      type: Array,
      default: Array,
    },
  },
}
</script>
