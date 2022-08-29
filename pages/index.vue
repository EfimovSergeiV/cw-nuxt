<template>
    <div>
    </div>
  </template>
  <script>
  export default {
    async asyncData({ $axios, redirect }) {
      const version = await $axios.$get(
        '/version/'
      )
    redirect('/main')
    }
  }
  </script>