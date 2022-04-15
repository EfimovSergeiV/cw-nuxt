/* eslint-disable camelcase */
export const state = () => ({
  products: [],
})

export const getters = {
  favID: (state) => {
    return state.products.map(({ id }) => {
      return id
    })
  },
}

export const actions = {
  addProductToFav({ state, commit }, product) {
    const favProduct = state.products.find((item) => item.id === product.id)
    if (!favProduct) {
      commit('addProductToFav', {
        id: product.id,
        vcode: product.vcode,
        description: product.description,
        name: product.name,
        rating: product.rating,
        prod_price: product.prod_price,
        preview_image: product.preview_image,
        propstrmodel: product.propstrmodel,
        brand: product.brand,
        category: product.category,
      })
    } else {
      commit('delProductFromFav', favProduct)
    }
  },

  delProductToFav({ commit }, product) {
    commit('delProductFromFav', { id: product.id })
  },
}

export const mutations = {
  addProductToFav(
    state,
    {
      id,
      vcode,
      description,
      name,
      rating,
      prod_price,
      preview_image,
      propintmodel,
      propstrmodel,
      brand,
      category,
    }
  ) {
    state.products.push({
      id,
      vcode,
      description,
      name,
      rating,
      prod_price,
      preview_image,
      propintmodel,
      propstrmodel,
      brand,
      category,
      quantity: 1,
    })
  },

  delProductFromFav(state, { id }) {
    const prodID = state.products.findIndex((product) => product.id === id)
    state.products.splice(prodID, 1)
  },
}
