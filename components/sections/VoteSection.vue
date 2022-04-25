<template>
  <div class="text-dark mt-4 mb-4 vote-bg">
    <b-row>
      <b-col cols="9">
        <div class="p-1 vote-header">
          <h6>Нам интересно ваше мнение</h6>
        </div>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <div class="p-2 vote-body">
      <b-row align-v="center" class="h-100">
        <b-col cols="6">
          <b-row>
            <b-col class="text-center" cols="12">
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
          </b-row>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col cols="4"></b-col>
      <b-col class="text-right" cols="8">
        <div class="p-1 vote-footer">
          <b-btn style="box-shadow: 0 0 10px #000000" variant="warning"
            >Проголосовать</b-btn
          >
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
.skew {
  transform: skewX(2deg) skewY(-1deg);
}
.vote-bg {
  border-radius: 5px;
  background-color: #ffffff50;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
}
.vote-header {
  background: linear-gradient(-120deg, transparent 40px, #ffffff 0) top right;
  background-repeat: no-repeat;
  border-radius: 5px 0 0 0;
  // margin-bottom: -2px;
}
.vote-body {
  border-radius: 0 5px 0 5px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
}
.vote-footer {
  background: linear-gradient(60deg, transparent 30px, #ffffff 0) bottom right;
  background-repeat: no-repeat;
  border-radius: 0 0 5px 0;
  // margin-top: -2px;
}
</style>
