/* eslint-disable camelcase */

export const state = () => ({
  stateregtoast: true,
  messagetoast: true,
  mainbanner: [],
  secbanner: [],
  brands: [],
  certificates: [],
  categories: [],
  selct: [],
  selectedShop: {
    region_code: 'MOW',
    adress: 'Москва, Ткацкая улица, 5, с16',
    shop: 9,
  },
  statusCartModal: null,
  client: {
    person: null,
    phone: null,
    email: null,
    adress: null,
    comment: null,
    company: null,
    legaladress: null,
    inn: null,
    kpp: null,
    okpo: null,
    bankname: null,
    currentacc: null,
    corresponding: null,
    bic: null,
  },

  /// Identification and select user shop

  shop: {
    shop_id: 9,
    region_code: 'MOW',
    city: 'Москва',
    adress: 'Москва, Ткацкая улица, 5, с16',
    phones: [
      { number: '+7 (495) 970-30-43', link: '+74959703043' },
      // { number: '+7 (495) 970-40-63', link: '+74959704063' },
    ],
    mapurl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.7848792001491!2d37.46429181342134!3d55.63105073225911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5529bc576d34f%3A0xe38181dc80c841c!2z0JzQmtCQ0JQsIDQxLdC5INC60LwsINCc0L7RgdC60LLQsCwgMTE3MzIx!5e0!3m2!1sru!2sru!4v1649150619736!5m2!1sru!2sru',
  },
  shops: [
    {
      title: 'Выберите магазин из списка',
      shop: null,
    },
    {
      title: 'Москва, Ткацкая улица, 5, с16',
      shop: {
        shop_id: 9,
        region_code: 'MOW',
        city: 'Москва',
        adress: 'Москва, Ткацкая улица, 5, с16',
        phones: [
          { number: '+7 (495) 970-30-43', link: '+74959703043' },
          // { number: '+7 (495) 970-40-63', link: '+74959704063' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2243.404542248942!2d37.720199565936056!3d55.78621303056229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JzQvtGB0LrQstCwLCDQotC60LDRhtC60LDRjyDRg9C70LjRhtCwLCA1LCDRgTE2!5e0!3m2!1sru!2sru!4v1657104378422!5m2!1sru!2sru',
      },
    },
    {
      title: 'Санкт-Петербург, шоссе Революции, д.84, литера Е',
      shop: {
        shop_id: 1,
        region_code: 'SPE',
        city: 'Санкт-Петербург',
        adress: 'Санкт-Петербург, шоссе Революции, д.84, литера Е',
        phones: [
          { number: '+7 (812) 336-93-81', link: '+78123369381' },
          { number: '+7 (812) 703-50-13', link: '+78127035013' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.2501459329694!2d30.452679000000003!3d59.961174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963212079136a5%3A0x539eb2bc6ec0bd89!2z0JPQu9Cw0LLQvdGL0Lkg0YHQstCw0YDRidC40Lo!5e0!3m2!1sru!2sru!4v1644216895501!5m2!1sru!2sru',
      },
    },
    {
      title: 'Псков, ул.Леона Поземского, 92, Павильон 28 (рынок на Алмазной)',
      shop: {
        shop_id: 6,
        region_code: 'PSK',
        city: 'Псков',
        adress:
          'Псков, ул.Леона Поземского, 92, Павильон 28 (рынок на Алмазной)',
        phones: [
          { number: '+7 (8112) 70-10-80', link: '+78112701080' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2124.198942962845!2d28.310578951637158!3d57.831909281067674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c01ebf22b5141b%3A0x70646a1ae845f205!2z0JPQu9Cw0LLQvdGL0Lkg0YHQstCw0YDRidC40Lo!5e0!3m2!1sru!2sru!4v1644217067475!5m2!1sru!2sru',
      },
    },
    {
      title: 'Псков, пос Неёлово, ул.Юбилейная д. 5ж',
      shop: {
        shop_id: 11,
        region_code: 'PSK',
        city: 'Псков',
        adress: 'Псков, пос Неёлово, ул.Юбилейная д. 5ж',
        phones: [
          { number: '+7 (8112) 77-77-80', link: '+78112777780' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2125.900017564692!2d28.328575451635963!3d57.80304638105854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c0191368a65501%3A0x5cf78133bd7c8b27!2z0JPQu9Cw0LLQvdGL0Lkg0YHQstCw0YDRidC40Lo!5e0!3m2!1sru!2sru!4v1644217205412!5m2!1sru!2sru',
      },
    },
    {
      title: 'Псков, ул.Шоссейная д.3а',
      shop: {
        shop_id: 10,
        region_code: 'PSK',
        city: 'Псков',
        adress: 'Псков, ул.Шоссейная д.3а',
        phones: [
          { number: '+7 (8112) 60-60-05', link: '+78112606005' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.7515676351168!2d28.314340051637462!3d57.8394985810701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c01ebd15f8654b%3A0x40fe20f227401bfd!2z0JPQu9Cw0LLQvdGL0Lkg0YHQstCw0YDRidC40Lo!5e0!3m2!1sru!2sru!4v1644217388679!5m2!1sru!2sru',
      },
    },
    {
      title:
        'Смоленск, ул. Посёлок Тихвинка 69, ТК "Город Мастеров" павильон №21',
      shop: {
        shop_id: 4,
        region_code: 'SMO',
        city: 'Смоленск',
        adress:
          'Смоленск, ул. Посёлок Тихвинка 69, ТК "Город Мастеров" павильон №21',
        phones: [
          { number: '+7 (4812) 67-33-22', link: '+74812673322' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.1242853675417!2d32.08359595152002!3d54.7426169801986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ce58ed516ce31d%3A0x19590ae134c0098b!2z0KHQv9C10YbQuNCw0LvQuNC30LjRgNC-0LLQsNC90L3Ri9C5INC80LDQs9Cw0LfQuNC9ICLQk9C70LDQstC90YvQuSDQodCy0LDRgNGJ0LjQuiI!5e0!3m2!1sru!2sru!4v1644217468162!5m2!1sru!2sru',
      },
    },
    {
      title: 'Смоленск, ул.Крупской 30 Б',
      shop: {
        shop_id: 3,
        region_code: 'SMO',
        city: 'Смоленск',
        adress: 'Смоленск, ул.Крупской 30 Б',
        phones: [
          { number: '+7 (4812) 70-77-17', link: '+74812707717' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.7957968180913!2d32.05755745152083!3d54.765976980204314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ce5873d8cdeb5d%3A0x9dcf8e88b3c8d3fe!2z0JPQu9Cw0LLQvdGL0Lkg0YHQstCw0YDRidC40LosINGB0L_QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90YvQuSDQvNCw0LPQsNC30LjQvQ!5e0!3m2!1sru!2sru!4v1644217612958!5m2!1sru!2sru',
      },
    },
    {
      title: 'Петрозаводск, ул. Заводская, д. 2',
      shop: {
        shop_id: 2,
        region_code: 'KR',
        city: 'Петрозаводск',
        adress: 'Петрозаводск, ул. Заводская, д. 2',
        phones: [
          { number: '+7 (8142) 33-12-23', link: '+78142331223' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.4024580276966!2d34.30823665179406!3d61.81611808251161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46a1eea4d25036f7%3A0xa85b3986983b8d00!2z0JPQu9Cw0LLQvdGL0Lkg0KHQstCw0YDRidC40Los!5e0!3m2!1sru!2sru!4v1644218055546!5m2!1sru!2sru',
      },
    },
    {
      title: 'Великие Луки, проспект Ленина д.57',
      shop: {
        shop_id: 5,
        region_code: 'PSK1',
        city: 'Великие Луки',
        adress: 'Великие Луки, проспект Ленина д.57',
        phones: [
          { number: '+7 (81153) 56-575', link: '+78115356575' },
          // { number: '+7 (812) 336-93-81', link: '+78123369381' },
        ],
        mapurl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2211.471690236029!2d30.53352345158005!3d56.33894568061954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c68c61a3bf1d85%3A0x303d5bb69f3a8816!2z0JzQsNCz0LDQt9C40L0g4oCc0JPQu9Cw0LLQvdGL0Lkg0KHQstCw0YDRidC40LrigJ0sINGB0LLQsNGA0L7Rh9C90L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LUg0Lgg0LzQsNGC0LXRgNC40LDQu9GL!5e0!3m2!1sru!2sru!4v1644218146313!5m2!1sru!2sru',
      },
    },
  ],

  ///  Legacy data/ Suchen und zerstoren
  listShops: [
    {
      region_code: 'MOW',
      adress: 'Москва, Ткацкая улица, 5, с16',
      shop: 9,
    },
    {
      region_code: 'SPE',
      adress: 'Санкт-Петербург, шоссе Революции, д.84, литера Е',
      shop: 1,
    },
    {
      region_code: 'PSK',
      adress: 'Псков, ул.Леона Поземского, 92, Павильон 28 (рынок на Алмазной)',
      shop: 6,
    },
    {
      region_code: 'PSK',
      adress: 'Псков, пос Неёлово, ул.Юбилейная д. 5ж',
      shop: 11,
    },
    { region_code: 'PSK', adress: 'Псков, ул.Шоссейная д.3а', shop: 10 },
    {
      region_code: 'SMO',
      adress:
        'Смоленск, ул. Посёлок Тихвинка 69, ТК "Город Мастеров" павильон №21',
      shop: 4,
    },
    { region_code: 'SMO', adress: 'Смоленск, ул.Крупской 30 Б', shop: 3 },
    { region_code: 'KR', adress: 'Петрозаводск, ул. Заводская, д. 2', shop: 2 },
    {
      region_code: 'PSK1',
      adress: 'Великие Луки, проспект Ленина д.57',
      shop: 5,
    },
  ],

  cities: [
    {
      value: {
        city: 'Санкт-Петербург',
        phone: '+7 (812) 336-93-81',
        link: '+78123369381',
      },
      code: 'SPE',
      text: 'Санкт-Петербург',
    },
    {
      value: {
        city: 'Москва',
        phone: '+7 (495) 970-30-43',
        link: '+74959703043',
      },
      code: 'MOW',
      text: 'Москва',
    },
    {
      value: {
        city: 'Петрозаводск',
        phone: '+7 (8142) 33-12-23',
        link: '+78142331223',
      },
      code: 'KR',
      text: 'Петрозаводск',
    },
    {
      value: {
        city: 'Смоленск',
        phone: '+7 (4812) 70-77-17',
        link: '+74812707717',
      },
      code: 'SMO',
      text: 'Смоленск',
    },
    {
      value: {
        city: 'Великие луки',
        phone: '+7 (81153) 5-65-75',
        link: '+78115356575',
      },
      code: 'PSK1',
      text: 'Великие луки',
    },
    {
      value: {
        city: 'Псков',
        phone: '+7 (8112) 60-60-05',
        link: '+78112606005',
      },
      code: 'PSK',
      text: 'Псков',
    },
  ],
  deliverycity: null,
})

export const getters = {
  carouselBrand: (state) => {
    const truebrand = []
    state.brands.forEach((element) => {
      if (element.carousel === true) {
        truebrand.push(element)
      }
    })
    return truebrand
  },
  adressSelectedShop(state) {
    let adress = null
    state.listShops.forEach((element) => {
      if (element.shop === state.selectedShop) {
        adress = element.adress
      }
    })
    return adress + ' - This is getter'
  },
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },
  async storeDispatchFunc({ commit }) {
    const nearshop = await this.$axios.$get('/nearshop/')
    // if (this.state.auth.loggedIn) {
    //   const likeserver = await this.$axios.$get('u/likes/')
    //   commit('addLikesProducts', likeserver)
    // }
    commit('selectShop', nearshop.shop)
  },
  // async AutoSelectShop({ commit }) {
  //   const nearshop = await this.$axios.$get('/nearshop/')
  //   commit('selectShop', nearshop.shop)
  // },
  // async getMainBanner({ commit }) {
  //   const mainbanner = await this.$axios.$get('/c/mainbanner/')
  //   commit('addMainBanner', mainbanner)
  // },
  addLikesAction({ commit }, likeserver) {
    commit('addLikesProducts', likeserver)
  },
  async getBrands({ commit }) {
    const brands = await this.$axios.$get('/c/brands/')
    commit('addBrands', brands)
  },
  async getCertificates({ commit }) {
    const certificates = await this.$axios.$get('/c/certificate/')
    commit('addCertificates', certificates)
  },
  // async getCategories({ commit }, selct) {
  //   const categories = await this.$axios.$get('/c/ct/')
  //   commit('addCategories', categories)
  //   commit('selCategory', selct)
  // },
}

export const mutations = {
  addLikesProducts(state, likeserver) {
    if (likeserver.length > 0) {
      state.modules.favorites.products = []
      likeserver.forEach((like) =>
        state.modules.favorites.products.push({
          id: like.product.id,
          vcode: like.product.vcode,
          description: like.product.description,
          name: like.product.name,
          rating: like.product.rating,
          prod_price: like.product.prod_price,
          preview_image: like.product.preview_image,
          propstrmodel: like.product.propstrmodel,
          brand: like.product.brand,
          category: like.product.category,
          quantity: 1,
        })
      )
    }
  },
  saveDeliveryParams(state, city) {
    state.deliverycity = city
  },
  selectShop(state, shop) {
    state.shop = shop
  },
  addMainBanner(state, mainbanner) {
    state.mainbanner = mainbanner
  },
  addSecBanner(state, secbanner) {
    state.secbanner = secbanner
  },
  addBrands(state, brands) {
    state.brands = brands
  },
  addCertificates(state, certificates) {
    state.certificates = certificates
  },
  addCategories(state, categories) {
    state.categories = categories
  },
  selCategory(state, selct) {
    state.selct = selct
  },
  clientPerson(state, person) {
    state.client.person = person
  },
  clientPhone(state, phone) {
    state.client.phone = phone
  },
  clientEmail(state, email) {
    state.client.email = email
  },
  clientComment(state, comment) {
    state.client.comment = comment
  },
  cartModal(state, status) {
    state.statusCartModal = status
  },
  dissableRegToast(state) {
    state.stateregtoast = false
  },
}
