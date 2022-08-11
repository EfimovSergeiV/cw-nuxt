<template>
  <div class="mt-4 mb-4 text-light">
    
    <b-row>
      <b-col cols="12">
        <h1>{{ topic.title }}</h1>
      </b-col>
    </b-row>
    <!-- <ForumTopicDetail /> -->
    <b-row>
      <b-col cols="12">
        <small>{{ topic.created_date }} {{ topic.username }}</small>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <p v-html="topic.description" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <small class="text-danger">topics: {{ topic }}</small>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col cols="12">
        <small class="text-danger">posts: {{ posts }}</small>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import ForumTopicDetail from '~/components/sections/ForumTopicDetail.vue'

export default {
  components: {
    ForumTopicDetail,
},
  async asyncData({ $axios }) {
    const topic = await $axios.$get('/f/topic/')
    const posts = await $axios.$get('/f/posts/')
    return { topic, posts }
  },
  head() {
    return {
      title: this.topic.title + ' - ГС Клуб',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.topic.description,
        },
      ],
    }
  },
}
</script>

<style>
.about-bg-dark {
  background-color: #00000050;
  padding: 10px;
  border-radius: 5px;
}
</style>