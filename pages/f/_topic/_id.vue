<template>
  <div class="mt-4 mb-4 text-light">
    
    <b-row class="mb-2">
      <b-col cols="12">
        <div class="text-dark">
          <b-breadcrumb>
            <b-breadcrumb-item href="#home">
              <b-icon
                icon="house-fill"
                scale="1.25"
                shift-v="1.25"
                aria-hidden="true"
              ></b-icon>
              Главная
            </b-breadcrumb-item>
            <b-breadcrumb-item href="#foo"> Каталог </b-breadcrumb-item>
            <b-breadcrumb-item href="#bar">Ручная дуговая сварка</b-breadcrumb-item>
            <!-- <b-breadcrumb-item active>INVERTEC 400SX</b-breadcrumb-item> -->
            <b-breadcrumb-item active>{{ topic.title }}</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mt-2 mb-2">

        <div class="forum-post-topic-header p-2">
          <b-row>
            <b-col cols="12">
              <h1 class="text-white">{{ topic.title }}</h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <small class="mdi mdi-calendar"> {{ topic.created_date }} </small>
              <small class="mdi mdi-account"> {{ topic.username }}</small>
            </b-col>
            <b-col class="text-right" cols="6">
              <b-btn variant="link" class="mdi text-white mdi-thumb-up-outline hr"> 10</b-btn>
              <b-btn variant="link" class="mdi text-white mdi-thumb-down-outline hr"> 5</b-btn>
            </b-col>
          </b-row>            
        </div>

        <div class="bg-white p-2 text-dark forum-post-topic-body">

          <b-row class="mt-4">
            <b-col cols="12">
              <p v-html="topic.description" />
            </b-col>
          </b-row>

        </div>
       
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col cols="12">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>        
      </b-col>
    </b-row>


    <b-row class="mb-3" v-for="post in posts" :key="post">
    
      <b-col cols="12">
        <div class="forum-post-commentar-header p-1">
          <b-row class="h-100" align-v="center">
            <b-col cols="6">
              <small class="mdi mdi-calendar"> {{ topic.created_date }} </small>
              <small class="mdi mdi-account"> {{ topic.username }}</small>
            </b-col>
            <b-col cols="6" class="text-right">
              <b-btn variant="link" size="sm" class="mdi text-white mdi-thumb-up-outline hr"> 10</b-btn>
              <b-btn variant="link" size="sm" class="mdi text-white mdi-thumb-down-outline hr"> 5</b-btn>
            </b-col>
          </b-row>
        </div>
      </b-col>

      <b-col cols="12">
        <div class="p-3 forum-post-commentar-body bg-white">
          <p class="text-dark" v-html="post.post" />
        </div>
      </b-col>

    </b-row>


    <b-row>
      <b-col cols="12" class="text-right">
        <b-pagination
          v-model="currentPage"
          align="right"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>        
      </b-col>
    </b-row>


    <b-row>
      <b-col cols="12">
        <h4>Оставить комментарий:</h4>
      </b-col>
    </b-row>

    <div v-if="visibleform">
      <b-row class="mt-2">
        <b-col cols="12">
          <b-form-textarea
            id="textarea"
            v-model="post"
            placeholder="Ваш комментарий..."
            rows="3"
          ></b-form-textarea>        
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="8">
          <b-form-input v-model="username" placeholder="Как к вам обращаться?"></b-form-input>
        </b-col>
        <b-col cols="4" class="text-right">
          <b-btn block class="mdi mdi-send" @click="sendComment(username, post)" variant="warning"> Отправить</b-btn>
        </b-col>
      </b-row>
    </div>
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
  data() {
    return {
      opts: this.$route.query,
      username: "",
      post: "",
      visibleform: false,
    }
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
  methods: {
    sendComment(username, post) {
      console.log( this.posts.length + 1)
      this.visibleform = false
      this.posts.push({"username": username, "post": post})
    }
  }
}
</script>

<style>
.forum-post-topic-header {
  background-color: #1010ffda;
  border-radius: 2px 2px 0px 0px;
}
.forum-post-topic-body {
  border-radius: 0px 0px 2px 2px;
}
.forum-post-commentar-header {
  background-color: #1010ff50;
  border-radius: 2px 2px 0px 0px;
}
.forum-post-commentar-header {
  border-radius: 2px 2px 0px 0px;
}
</style>