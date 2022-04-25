<template>
  <div class="text-dark mt-4 mb-4">
    <b-row>
      <b-col cols="9">
        <div
          class="p-1"
          style="
            background-color: #fff;
            border-radius: 0 50px 0 0;
            margin-bottom: -25px;
          "
        >
          <h5>Lorem ipsum dolor</h5>
        </div>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <div class="p-2" style="background-color: #fff">
      <b-row align-v="center" class="h-100">
        <b-col cols="6">
          <b-row>
            <b-col cols="12">
              <h4>{{ vote }}</h4>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <b-form-radio-group
                  id="btn-radios-3"
                  v-model="answer"
                  :options="answers"
                  size="lg"
                  name="radio-btn-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <!-- <b-col v-for="answer in answers" :key="answer" cols="12">
              <b-form-checkbox size="lg">{{ answer.text }}</b-form-checkbox>
            </b-col> -->
          </b-row>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col cols="5"></b-col>
      <b-col class="text-right" cols="7">
        <div
          class="p-1"
          style="
            background-color: #fff;
            border-radius: 0 0 0 50px;
            margin-top: -30px;
          "
        >
          <b-btn variant="warning">Проголосовать</b-btn>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
      answer: null,
      answers: [
        { value: 1, text: 'Excepteur sint occaecat cupidatat' },
        {
          value: 2,
          text:
            'Excepteur sint occaecat cupidatat sint occaecat cupidatat cupidatat sint occaecat cupidatat',
        },
        { value: 3, text: 'Excepteur sint occaecat cupidatat' },
        { value: 4, text: 'Excepteur sint occaecat cupidatat' },
      ],
    }
  },
}
</script>

<style lang="scss">
.vote-bg {
  background-color: #fff;
  transform: skewX(-40deg) skewY(40deg);
}
.skew {
  transform: skewX(2deg) skewY(-1deg);
}
</style>
