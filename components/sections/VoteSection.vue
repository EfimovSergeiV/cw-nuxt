<template>
  <div class="text-dark mt-4 mb-4 vote-bg">
    <b-row>
      <b-col cols="9">
        <div class="p-1 vote-header">
          <h6 class="text-light">Нам интересно ваше мнение</h6>
        </div>
      </b-col>
      <b-col class="text-right" cols="3"> </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col class="h-100" cols="6">
        <div class="bg-white p-2 text-center">
          <h4>{{ vote }}</h4>
        </div>
      </b-col>
      <b-col class="h-100" cols="6">
        <div class="bg-white p-2">
          <b-form-group :id="num">
            <b-form-radio-group
              :id="num"
              v-model="answer"
              :options="answers"
              name="radio-btn-stacked"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="4"> </b-col>
      <b-col class="text-right" cols="8">
        <b-btn style="box-shadow: 0 0 10px #000000" variant="warning"
          >Проголосовать
        </b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-light" cols="12">
        {{ answer }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vote: 'Каким образом Вы узнали о нашем сайте',
      answer: 1,
      answers: [
        { value: 1, text: 'Видел рекламу на улице/интернете' },
        {
          value: 2,
          text: 'Нашёл через поисковые сети (Google, Яндекс...)',
        },
        { value: 3, text: 'Давно являюсь постоянным клиентом' },
        { value: 4, text: 'Другой вариант' },
      ],
      carouselData: 0,
    }
  },
}
</script>

<style lang="scss">
.skew {
  transform: skewX(2deg) skewY(-1deg);
}
// .vote-bg {
//   border-radius: 5px;
//   background-color: #ffffff50;
//   box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
// }
// .vote-header {
//   background: linear-gradient(-120deg, transparent 40px, #ffffff 0) top right;
//   background-repeat: no-repeat;
//   border-radius: 5px 0 0 0;
//   // margin-bottom: -2px;
// }
// .vote-body {
//   border-radius: 0 5px 0 5px;
//   background-color: #fff;
//   box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
// }
// .vote-footer {
//   background: linear-gradient(60deg, transparent 30px, #ffffff 0) bottom right;
//   background-repeat: no-repeat;
//   border-radius: 0 0 5px 0;
//   // margin-top: -2px;
// }
</style>
