<template>
  <div id="newprod">
    <b-row>
      <b-col v-for="i in 12" :key="i" cols="6" md="4" lg="3">
        <div class="newprod__card">
          <div class="newprod__card-image">
            <b-img
              src="https://picsum.photos/200/200/?image=35"
              fluid
              alt="Responsive image"
            ></b-img>
          </div>
          <div class="newprod__card-text">
            <p>Hallo welt</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
