<template>
  <div id="svarog">
    <b-row>
      <b-col cols="4" class="d-none d-xl-block">
        <div class="svarog__left-container">
          <iframe
            :src="data[0].video"
            loading="lazy"
            height="100%"
            width="100%"
            allowfullscreen="0"
            frameborder="0"
          ></iframe>
        </div>
      </b-col>
      <b-col cols="12" xl="8">
        <nuxt-link :to="{ name: `products`, query: { brnd: 9, page: 1 } }">
          <b-img
            fluid
            height="300"
            width="870"
            class="svarog__r-banner"
            src="elemental-force.jpg"
          ></b-img>
        </nuxt-link>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="4" class="d-none d-xl-block">
        <div class="svarog__bottom-container">
          <iframe
            :src="data[1].video"
            loading="lazy"
            height="250"
            width="350"
            class="svarog__bottom-video"
            allowfullscreen="0"
            frameborder="0"
          ></iframe>
          <div class="svarog__bottom-video-text">
            <nuxt-link :to="data[1].link">перейти к товару</nuxt-link>
          </div>
        </div>
      </b-col>
      <b-col cols="4" class="d-none d-xl-block">
        <div class="svarog__bottom-container">
          <iframe
            :src="data[2].video"
            loading="lazy"
            height="250"
            width="350"
            class="svarog__bottom-video"
            allowfullscreen="0"
            frameborder="0"
          ></iframe>
          <div class="svarog__bottom-video-text">
            <nuxt-link :to="data[2].link">перейти к товару</nuxt-link>
          </div>
        </div>
      </b-col>
      <b-col cols="4" class="d-none d-xl-block">
        <div class="svarog__bottom-container">
          <iframe
            :src="data[3].video"
            loading="lazy"
            height="250"
            width="350"
            class="svarog__bottom-video"
            allowfullscreen="0"
            frameborder="0"
          ></iframe>
          <div class="svarog__bottom-video-text">
            <nuxt-link :to="data[3].link">перейти к товару</nuxt-link>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'Правильная сварка - Сварог',
          link: { name: `products`, query: { brnd: 9, page: 1 } },
          video:
            'https://www.youtube.com/embed/SakTd5qGn24?autoplay=0&amp;loop=1&amp;&amp;playlist=SakTd5qGn24',
        },
        {
          id: 2,
          name: 'PRO TIG 315P AC/DC - Сварог',
          link: { name: 'product-id', params: { id: 1035 } },
          video:
            'https://www.youtube.com/embed/600W5mJjTco?autoplay=0&amp;loop=1&amp;&amp;playlist=600W5mJjTco',
        },
        {
          id: 3,
          name: 'REAL SMART MIG 200 - Сварог',
          link: { name: 'product-id', params: { id: 1039 } },
          video:
            'https://www.youtube.com/embed/TV4Ku9q9M0Y?autoplay=0&amp;loop=1&amp;&amp;playlist=TV4Ku9q9M0Y',
        },
        {
          id: 4,
          name: 'REAL SMART ARC 160 - Сварог',
          link: { name: 'product-id', params: { id: 1058 } },
          video:
            'https://www.youtube.com/embed/owyfZ-ATr9Y?autoplay=0&amp;loop=1&amp;&amp;playlist=owyfZ-ATr9Y',
        },
      ],
    }
  },
}
</script>
