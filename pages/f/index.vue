<template>
  <div class="mt-4 mb-4 text-light">
    
    <b-row>
      <b-col cols="12">
        <h1>КАТЕГОРИИ</h1>
      </b-col>
    </b-row>


    <b-row>

      <b-col v-for="ct in cts" :key="ct" cols="12">

        <div class="bg-dark m-2">
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

          <b-row class="pl-3 pr-3 pb-1">
            <b-col cols="12" class="">
              <small class="text-light">{{ ct.description }}</small>
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
.about-bg-dark {
  background-color: #00000050;
  padding: 10px;
  border-radius: 5px;
}
</style>