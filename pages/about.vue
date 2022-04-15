<template>
  <div class="text-light">
    <b-row>
      <b-col>
        <h4 class="mt-4 mb-4 text-warning">
          Приветствуем Вас в нашем фирменном интернет-магазине «Главный
          Сварщик»!
        </h4>
      </b-col>
    </b-row>

    <div class="warning-border">
      <b-card no-body>
        <b-tabs pills vertical nav-wrapper-class="w-50">
          <b-tab v-for="(shop, sh) in shops" :key="sh" :title="shop.adress">
            <b-card-text>
              <b-row>
                <b-col>
                  <b-row>
                    <b-col>
                      <h6>
                        <small>Телефон:</small>
                        <a class="text-light" :href="'tel:' + shop.phone">
                          {{ shop.phone }}
                        </a>
                      </h6>
                    </b-col>
                  </b-row>
                  <small>Режим работы:</small>
                  <b-row>
                    <b-col
                      ><h6>{{ shop.wday }}</h6></b-col
                    >
                    <b-col
                      ><h6>{{ shop.wend }}</h6></b-col
                    >
                  </b-row>
                  <div class="pr-2">
                    <iframe
                      :src="shop.maps"
                      height="250"
                      allowfullscreen="true"
                      style="width: 100%"
                    ></iframe>
                    <!-- <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4247.568066836361!2d28.314213662326996!3d57.83894785098839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c01ebd15f8654b%3A0x40fe20f227401bfd!2z0JPQu9Cw0LLQvdGL0Lkg0YHQstCw0YDRidC40Lo!5e0!3m2!1sru!2sru!4v1624363911406!5m2!1sru!2sru"
                      width="400"
                      height="300"
                      style="border: 0; width: 100%"
                      loading="lazy"
                    ></iframe> -->
                  </div>
                </b-col>
              </b-row>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <div class="mt-4 warning-border about-bg-dark">
      <b-row class="mt-4 mb-4">
        <b-col cols="12">
          <h5>
            Предлагаем вам большой выбор расходных материалов для любых целей:
            омеднённая, порошковая проволока, электроды. Также, в нашем
            интернет-магазине вы можете приобрести сопутствующие товары:
            кабельные разъёмы, электроды, держатели или клеммы заземления,
            необходимые приспособления при проведении электросварочных работ и
            многое другое.
          </h5>
        </b-col>
      </b-row>
      <b-row class="mt-4 mb-4">
        <b-col cols="12" class="mt-2">
          <h5 class="about-card">
            У нас представлен широкий выбор сварочного оборудования и
            аксессуаров от известных и проверенных производителей, таких как
            <b>Сварог, Ресанта, Telwin, Кедр, Huter</b> и другие. У нас вы
            найдете самые привлекательные цены и прогрессивные системы скидок!
            Если Вы ищите инверторный аппарат, полуавтомат или аргоно-дуговую
            установку, то доверьтесь нам.
          </h5>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="12" lg="4">
          <p>
            <b class="text-warning">Гарантируем</b>
            хорошее качество продукции и профессиональную консультацию по любым
            вопросам
          </p>
        </b-col>
        <b-col cols="12" lg="4">
          <p>
            <b class="text-warning">Поможем</b>
            Вам сделать выбор среди огромного ассортимента аппаратов для сварки.
          </p>
        </b-col>
        <b-col cols="12" lg="4">
          <p>
            <b class="text-warning">Подскажем</b>
            Вам, как приобрести высококачественное сварочное оборудование.
          </p>
        </b-col>
      </b-row>
    </div>

    <div class="warning-border about-bg-dark mt-4">
      <b-row class="mt-2 mb-2">
        <b-col cols="12" md="8" class="block mt-1">
          <h4>От нас вы получите:</h4>
          <ul>
            <li>
              <h6 class="ml-3">Доставку во все регионы России</h6>
            </li>
            <li>
              <h6 class="ml-3">Консультации по телефону, e-mail</h6>
            </li>
            <li>
              <h6 class="ml-3">
                Обмен товаров надлежащего и ненадлежащего качества
              </h6>
            </li>
            <li>
              <h6 class="ml-3">
                Гарантийное обслуживание купленных у нас товаров
              </h6>
            </li>
          </ul>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
      <b-row>
        <b-col class="mt-5">
          <h6>
            Если вы не нашли то, что Вам нужно - свяжитесь с нами и мы найдем
            этот товар специально для Вас! Покупайте современное сварочное
            оборудование у нас и помните, качественное оборудование - залог
            успешной работы!
          </h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right pb-4 mt-4">
          <h4 class="text-warning">Приятных покупок!</h4>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const shops = await $axios.$get('/c/shops/')
    return { shops }
  },
  data: () => ({
    active: true,
  }),
  head() {
    return {
      title: 'Информация о сети магазинов Главный сварщик',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Информация о сети магазинов Главный сварщик',
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
