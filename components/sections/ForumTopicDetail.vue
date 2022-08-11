<template>
  <div>
    <small>topic detail:{{ topic }}</small>
  </div>
</template>

<script>

export default {
  props: {
    topic: {
      type: Object,
      default: Object,
    },
  },
}
</script>

<style lang="scss">

</style>
