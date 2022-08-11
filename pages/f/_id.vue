<template>
  <div class="mt-4 mb-4 text-light">

    <b-row>
      <b-col cols="12">
        <h1>ТОПИКИ</h1>
      </b-col>
    </b-row>
    <b-row>

      <b-col v-for="topic in topics" :key="topic" cols="12">

        <div class="bg-dark m-2">
          <b-row>
            <b-col cols="12">
              <!-- <nuxt-link  class="text-light" :to="{ name: 'products', query: { ct: ct.id, page: 1 }, }">{{ ct.name }}</nuxt-link> -->
              <b-btn
                size="lg"
                :to="{ name: 'f-topic-id', params: { id: topic.id, topic: topic.id }, query: { page: 1 }, }"
                class="mdi mdi-forum-outline text-light"
                variant="link"
              >
                {{ topic.title }}
                
              </b-btn>
            </b-col>
            
          </b-row>

          <b-row class="pl-3">
            <b-col cols="12">
              <small>
                {{ topic.created_date }} <b>{{ topic.username }} </b>
              </small>
            </b-col>
          </b-row>

          <b-row class="pl-3">
            <b-col cols="12">
              <small>
                Сообщений: 84 Последний: Anonym
              </small>
            </b-col>
          </b-row>

          <b-row class="pl-3 pr-3 pb-1">
            <b-col cols="12" class="">
              <small v-if="topic.description.length > 500" class="text-light" v-html="topic.description.slice(0, 500)" />
              <small v-else class="text-light" v-html="topic.description" />
            </b-col>
          </b-row>
        </div>

        
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const topics = await $axios.$get('/f/topics/')
    return { topics }
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
}
</script>

<style>
.about-bg-dark {
  background-color: #00000050;
  padding: 10px;
  border-radius: 5px;
}
</style>