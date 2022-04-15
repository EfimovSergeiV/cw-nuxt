<template>
  <div>
    <h1 v-for="i in selectPrice" :key="i">{{ i }}</h1>
    <b-row>
      <b-col md="4"></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectPrice: ['asd', 'asd2', 'asd3'],
    }
  },
}
</script>
