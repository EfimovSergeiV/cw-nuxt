/* eslint-disable camelcase */
export const state = () => ({
  products: [],
  deliverysumm: 0,
  deliverystatus: false,
})

export const getters = {
  cartTotalPrice: (state) => {
    let result = 0
    state.products.forEach((el) => (result += el.price * el.quantity))
    return result
  },
  cartID: (state) => {
    return state.products.map(({ id }) => {
      return id
    })
  },
  completeID: (state) => {
    return state.products.map(({ id }) => {
      return id
    })
  },
  setCompPrice: (state) => {
    let result = 0
    state.setcomplete.forEach((el) => (result += el.price * el.quantity))
    return result
  },
}

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.products.find((item) => item.id === product.id)
    if (!cartProduct) {
      commit('addProductToCart', {
        id: product.id,
        vcode: product.vcode,
        name: product.name,
        rating: product.rating,
        prod_price: product.prod_price,
        preview_image: product.preview_image,
        propstrmodel: product.propstrmodel,
      })
    } else {
      commit('delProductFromCart', cartProduct)
    }
  },

  incProductToCart({ commit }, product) {
    commit('incItemQuantity', { id: product.id })
  },

  decProductToCart({ commit }, product) {
    commit('decProductQuantity', { id: product.id })
  },

  delProductToCart({ commit }, product) {
    commit('delProductFromCart', { id: product.id })
  },

  cleanCart({ commit }) {
    commit('cleanCart')
  },
  changeDeliveryStatus({ commit }, status) {
    commit('changeDeliveryStatus', status)
  },
  changeDeliverySumm({ commit }, summ) {
    commit('changeDeliverySumm', summ)
  },

  setComplete({ state, commit }, comp) {
    const setComplete = state.setcomplete.find((item) => item.id === comp.id)
    if (!setComplete) {
      commit('setComplete', {
        id: comp.id,
        vcode: comp.vcode,
        name: comp.name,
        rating: comp.rating,
        price: comp.prod_price[0].price,
        preview_image: comp.preview_image,
        propstrmodel: comp.propstrmodel,
      })
    } else {
      commit('delSetComplete', setComplete)
    }
  },
}

export const mutations = {
  changeDeliveryStatus(state, status) {
    state.deliverystatus = status
  },
  changeDeliverySumm(state, summ) {
    state.deliverysumm = summ
  },
  addProductToCart(
    state,
    { id, vcode, name, rating, prod_price, preview_image, propstrmodel }
  ) {
    state.products.push({
      id,
      vcode,
      name,
      rating,
      prod_price,
      preview_image,
      propstrmodel,
      quantity: 1,
    })
  },

  incItemQuantity(state, { id }) {
    const cartProduct = state.products.find((item) => item.id === id)
    cartProduct.quantity++
  },

  delProductFromCart(state, { id }) {
    const cartProduct = state.products.findIndex((item) => item.id === id)
    state.products.splice(cartProduct, 1)
  },

  cleanCart(state) {
    state.products = []
  },

  decProductQuantity(state, { id }) {
    const cartProduct = state.products.find((product) => product.id === id)
    if (cartProduct.quantity > 1) {
      cartProduct.quantity--
    }
  },
  setComplete(
    state,
    { id, vcode, name, rating, price, preview_image, propstrmodel }
  ) {
    state.setcomplete.push({
      id,
      vcode,
      name,
      rating,
      price,
      preview_image,
      propstrmodel,
      quantity: 1,
    })
  },
  delSetComplete(state, { id }) {
    const setComplete = state.setcomplete.findIndex((item) => item.id === id)
    state.setcomplete.splice(setComplete, 1)
  },
}
