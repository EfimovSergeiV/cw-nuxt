<template>
  <div class="mt-4 mb-4 text-light">

    <b-row class="mb-2">
      <b-col cols="12">
        <div class="text-dark">
          <b-breadcrumb>
            <b-breadcrumb-item to="/">
              <b-icon
                icon="house-fill"
                scale="1.25"
                shift-v="1.25"
                aria-hidden="true"
              ></b-icon>
              Главная
            </b-breadcrumb-item>
            <b-breadcrumb-item to="/f"> Форум </b-breadcrumb-item>
            <b-breadcrumb-item active>Помощь</b-breadcrumb-item>
          </b-breadcrumb>
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

    <b-row v-for="topic in topics" :key="topic" class="mb-4">
      <b-col cols="12">

        <div class="">
          <b-row>
            <b-col cols="12">

              <div class="forum-topic-header">

                <b-btn
                  size="lg"
                  :to="{ name: 'f-topic-id', params: { id: topic.id, topic: topic.id }, query: { page: 1 }, }"
                  class="mdi mdi-forum-outline text-light"
                  variant="link"
                >
                  {{ topic.title }}
                  
                </b-btn>

              </div>
            </b-col>
            
          </b-row>

           <div class="forum-topic-body bg-white text-dark">

            <b-row class="pl-3">
              <b-col cols="12">
                <small class="mdi mdi-calendar">
                  {{ topic.created_date }} <b class="mdi mdi-account">{{ topic.username }} </b>
                </small>
              </b-col>
            </b-row>

            <b-row class="pl-3">
              <b-col cols="12">
                <small class="mdi mdi-comment-text-multiple-outline"> Комментариев:<b> 84</b></small>
                <small class="mdi mdi-account">Последний от:<b> Anonym</b></small>                
              </b-col>
            </b-row>

            <b-row class="pl-3 pr-3 pb-1 mt-3">
              <b-col cols="12" class="text-dark">
                <small v-if="topic.description.length > 500" class="" v-html="topic.description.slice(0, 500)" />
                <small v-else class="" v-html="topic.description" />
              </b-col>
            </b-row>
          </div>
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
        <h4>Создать тему:</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <b-form-input v-model="username" placeholder="Заголовок"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="12">
        <b-form-textarea
          id="textarea"
          v-model="post"
          placeholder="Ваш комментарий..."
          rows="10"
        ></b-form-textarea>        
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="8">
        <b-form-input v-model="username" placeholder="Как к вам обращаться?"></b-form-input>
      </b-col>
      <b-col cols="4" class="text-right">
        <b-btn block class="mdi mdi-robot-off-outline" @click="sendComment(username, post)" variant="warning"> Проверка на робота</b-btn>
        <!-- <b-btn block class="mdi mdi-send" @click="sendComment(username, post)" variant="warning"> Отправить</b-btn> -->
      </b-col>
    </b-row>


    <div class="mt-4">
      <small class="text-light"> {{ post }} </small>
    </div>
   

  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const topics = await $axios.$get('/f/topics/')
    return { topics }
  },
  data() {
    return {
      opts: this.$route.query,
      username: "",
      title: "",
      post: ""
    }
  },
  head() {
    return {
      title: 'Клуб Главного Сварщика',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Уютное сообщество профессионалов',
        },
      ],
    }
  },
  methods: {
    sendComment(username, post) {
      console.log( this.posts.length + 1)
      this.posts.push({"username": username, "post": post})
    }
  }
}
</script>

<style>
.forum-topic-header {
  background-color: #1010ffda;
  border-radius: 2px 2px 0px 0px;
}
.forum-topic-body {
  border-radius: 0px 0px 2px 2px;
}
</style>