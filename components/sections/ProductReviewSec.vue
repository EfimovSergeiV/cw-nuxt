<template>
  <div>
    <div v-if="$auth.user && show" class="mb-4">
      <b-row>
        <b-col cols="12">
          <b-form-textarea
            id="textarea-rows"
            v-model="text"
            placeholder="Напишите отзыв"
            size="sm"
            max-rows="8"
            no-auto-shrink
            rows="4"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col md="6"></b-col>
        <b-col class="text-right" md="6">
          <b-form-rating
            id="rating-sm-no-border"
            v-model="grade"
            show-value
            variant="dark"
            autofocus
            autocomplete
            no-border
            inline
            size="sm"
          ></b-form-rating>
          <b-btn variant="light" @click="sendReview()">Оставить отзыв</b-btn>
        </b-col>
      </b-row>
    </div>
    <div v-if="reviews.length > 0">
      <b-row v-for="review in reviews" :key="review.id" class="mt-2 mb-2">
        <b-col cols="12">
          <div class="bg-light text-dark p-1" style="border-radius: 3px">
            <b-row>
              <b-col cols="10">
                <b-form-rating
                  id="rating-sm-no-border"
                  :value="review.grade"
                  show-value
                  variant="dark"
                  autofocus
                  autocomplete
                  no-border
                  readonly
                  inline
                  size="sm"
                ></b-form-rating>
                {{ review.user }}</b-col
              >
              <b-col class="text-right" cols="2">
                <small>{{ review.date }}</small>
              </b-col>
            </b-row>
            <b-row class="mt-1">
              <b-col cols="12">
                <h6>{{ review.review }}</h6>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <h5>Пока нет отзывов</h5>
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
      text: null,
      show: true,
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
          this.show = false
        })
        .catch(() => {
          this.$bvToast.toast('Попробуйте написать отзыв позже', {
            title: 'Что то пошло не так(',
            variant: 'danger',
          })
        })
    },
  },
}
</script>
