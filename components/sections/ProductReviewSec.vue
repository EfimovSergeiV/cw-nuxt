<template>
  <div>
    <!-- <div v-if="$auth.user && show" class="mb-4"> -->

    <div v-if="reviews.length > 0">
      <b-row v-for="review in reviews" :key="review.id" class="mt-2 mb-2">
        <b-col cols="12">
          <div class="bg-white text-dark p-1" style="border-radius: 2px">
            
            <b-row>
              <b-col cols="6" md="9">
                <div class="mdi mdi-account text-dark">
                  <small> {{ review.user }}</small>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <b-form-rating 
                id="grade"
                :value="review.grade"
                no-border 
                size="sm"
                color="#800000"
                ></b-form-rating>
              </b-col>
            </b-row>
            
            <b-row class="">
              <b-col cols="12">
                <div class="p-1" style="border: #00000040 1px solid; border-radius: 2px;">
                  <p>{{ review.review }}</p>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" class="text-right mt-1">
                <div class="mdi mdi-calendar text-dark">
                  <small> {{ review.date }}</small>
                </div>
                
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row class="">
        <b-col cols="12" class="text-center mt-5">
          <h3>Ваш отзыв может стать первым</h3>
        </b-col>
      </b-row>
    </div>

    <div v-if="visibleform" class="mt-5 bg-white p-2" style="border-radius: 2px;">
      <b-row>
        <b-col cols="6" md="9">
          <h6 class="text-dark">Оставить отзыв</h6>
        </b-col>
        <b-col cols="6" md="3">
          <b-form-rating 
            id="user-rating" 
            v-model="grade"
            no-border 
            size="sm"
            color="#800000"
            ></b-form-rating>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-textarea
            id="textarea-rows"
            v-model="text"
            placeholder="Комментарий"
            size="sm"
            no-auto-
            min-rows="4"
            rows="4"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-4 mb-4">
        <b-col cols="12">
          <recaptcha class="recaptcha-style" />
        </b-col>
      </b-row>
      <b-row class="h-100" align-h="center">
        <b-col class="text-right" cols="12">
          <!-- <b-form-rating
            id=""
            v-model="grade"
            show-value
            autofocus
            autocomplete
            size="sm"
          ></b-form-rating> -->
          <b-btn variant="link-dark" class="mt-2 mdi mdi-robot-off-outline" size="sm" @click="ImNotRobot()"> Я не робот</b-btn>
          <b-btn variant="warning" :disabled="hidesendbtn" class="mdi mdi-send-outline" @click="sendReview()"> Отправить</b-btn>
        </b-col>
        
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Object,
      default: Object,
    },
    prodid: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {
      grade: 5,
      re_token: null,
      text: null,
      show: true,
      hidesendbtn: true,
      visibleform: true,
    }
  },
  methods: {
    sendReview() {
      this.$axios
        .$post('u/reviews/', {
          // prod_id: this.reviews[0].product,
          product: this.prodid,
          grade: this.grade,
          review: this.text,
        })
        .then((resp) => {
          this.$bvToast.toast('Мы его опубликуем после модерации', {
            title: 'Спасибо за отзыв',
            variant: 'success',
          })
          this.visibleform = false
        })
        .catch(() => {
          this.$bvToast.toast('Попробуйте написать отзыв позже', {
            title: 'Что то пошло не так(',
            variant: 'danger',
          })
        })
    },
    async ImNotRobot() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.re_token = token
        this.hidesendbtn = false
      } catch (error) {
        this.$bvToast.toast(
          'Свяжитесь со службой поддержки support@glsvar.ru',
          {
            title: 'Вы не прошли проверку',
            variant: 'danger',
          }
        )
      }
    },
  },
}
</script>

<style lang="scss">
.recaptcha-style {
  display: flex;
  justify-content: right;
}
</style>