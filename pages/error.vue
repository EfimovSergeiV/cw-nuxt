<template>
  <div>
    <div class="mt-4 pt-4">
      <b-row>
        <b-col>
          <h3 class="text-warning">Каталог товаров</h3>
        </b-col>
      </b-row>

      <div class="mt-4 mb-4">
        <transition-group tag="b-row" name="emergence">
          <b-col
            v-for="sec in sections"
            :key="sec"
            class="mt-4 clearfix"
            cols="12"
            md="6"
            lg="4"
          >
            <div class="cards h-100">
              <b-btn
                variant="link"
                :to="{
                  name: 'products-ct-page',
                  params: { ct: sec.id, page: '1' },
                }"
                >{{ sec.name }}
              </b-btn>
              <b-col v-for="ct in sec.inserted" :key="ct" cols="12">
                <b-dropdown
                  v-if="ct.inserted.length > 0"
                  id="dropdown-dropright"
                  dropright
                  :text="ct.name"
                  variant="link"
                >
                  <b-dropdown-text>
                    <h5 class="text-warning">{{ ct.name }}</h5>
                    <b-btn
                      v-for="(link, l) in ct.inserted"
                      :key="l"
                      variant="link"
                      size="sm"
                      class="text-light"
                      :to="{
                        name: 'products-ct-page',
                        params: { ct: link.id, page: '1' },
                      }"
                    >
                      <b>{{ link.name }}</b> <spacer /> </b-btn
                  ></b-dropdown-text>
                </b-dropdown>

                <b-btn
                  v-else
                  class="text-left"
                  :to="{
                    name: 'products-ct-page',
                    params: { ct: ct.id, page: '1' },
                  }"
                  variant="link"
                  >{{ ct.name }}</b-btn
                >
              </b-col>
            </div>
          </b-col>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const sections = await $axios.$get(`c/ct/`)
    return { sections }
  },
}
</script>

<style scoped>
.cards {
  background-color: #00000050;
  padding: 5px;
  border: 1px solid #d9ff00;
  border-radius: 5px;
}
.displ {
  display: inline-block;
}
</style>
