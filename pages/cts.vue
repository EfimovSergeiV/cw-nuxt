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
            :key="sec.id"
            class="mt-4 clearfix"
            cols="12"
            md="6"
            lg="4"
          >
            <div class="cards h-100">
              <b-btn v-if="sec.inserted.length > 0" variant="link"
                ><b class="ct-name">{{ sec.name }}</b>
              </b-btn>
              <b-btn
                v-else
                variant="link"
                :to="{
                  name: 'products',
                  query: { ct: sec.id, page: 1 },
                }"
                ><b class="ct-name">{{ sec.name }}</b>
              </b-btn>
              <b-col v-for="ct in sec.inserted" :key="ct.id" cols="12">
                <b-dropdown
                  v-if="ct.inserted.length > 0"
                  id="dropdown-dropright"
                  class="menu-dropdown-font"
                  dropright
                  no-caret
                  :text="ct.name"
                  variant="link"
                >
                  <b-dropdown-text>
                    <b-btn
                      variant="link"
                      class="text-warning"
                      size="sm"
                      :to="{
                        name: 'products',
                        query: { ct: ct.id },
                      }"
                      ><h5>{{ ct.name }}</h5></b-btn
                    >
                    <br />
                    <b-btn
                      v-for="link in ct.inserted"
                      :key="link.id"
                      variant="link"
                      size="sm"
                      class="text-light"
                      :to="{
                        name: 'products',
                        query: { ct: link.id, page: 1 },
                      }"
                    >
                      <b>{{ link.name }}</b> <spacer /> </b-btn
                  ></b-dropdown-text>
                </b-dropdown>

                <b-btn
                  v-else
                  class="text-left"
                  :to="{
                    name: 'products',
                    query: { ct: ct.id, page: 1 },
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
  head() {
    return {
      title: 'Категории товаров сварочного оборудования',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Категории товаров сварочного оборудования, комплектующих и расходных материалов интернет магазина Главный сварщик',
        },
      ],
    }
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
.ct-name {
  color: #dfdfdf;
  font-size: 16px;
}
</style>
