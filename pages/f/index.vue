<template>
  <div class="mt-4 mb-4 text-light">
    
    <b-row class="mb-4">
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

            <!-- <b-breadcrumb-item active>INVERTEC 400SX</b-breadcrumb-item> -->
            <b-breadcrumb-item active>Форум</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </b-col>
    </b-row>


    <b-row v-for="ct in cts" :key="ct" class="mt-4 mb-4">

      <b-col cols="12">

        <div class="forum-post-topic-header">
        
          <b-row>
            <b-col cols="12">
              <!-- <nuxt-link  class="text-light" :to="{ name: 'products', query: { ct: ct.id, page: 1 }, }">{{ ct.name }}</nuxt-link> -->
              <b-btn
                :to="{ name: 'f-id', params: { id: ct.id }, query: { ct: ct.id, page: 1 }, }"
                class="mdi mdi-forum-outline text-light"
                variant="link"
              >
                {{ ct.name }}
                
              </b-btn>
            </b-col>
            
          </b-row>
        </div>

        <div class="forum-post-topic-body bg-white text-dark">
          <b-row class="pl-3 pr-3 pb-1">
            <b-col cols="12" class="">
              <small class="">{{ ct.description }}</small>
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
    const cts = await $axios.$get('/f/cts/')
    return { cts }
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
