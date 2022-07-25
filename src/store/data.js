import { api } from 'boot/axios'

const state = () => ({
  cart:[{items:[]}],
  orders:[],
  staticData:[],
  session_id:''


})

const mutations = {
  updateCart(state,data){
    state.cart = data
  },
  updateSessionID(state,data){
    state.session_id = data
  },
  updateStaticData(state,data){
    state.staticData = data
  }
}

const actions = {
  async fetchCart({commit,getters}){
    console.log('getters[session_id]',getters['session_id'])
    const response = await api.get(`/api/cart/get?session_id=${getters['session_id']}`)
    commit('updateCart',response.data)

  },
  async fetchStaticData({commit,getters}){
    const response = await api.get(`/api/data/static`)
    commit('updateStaticData',response.data)
  },
  setSessionID({commit},data){
    commit('updateSessionID',data)

  },

}

const getters = {
  cart: (state) => state.cart,
  session_id: (state) => state.session_id,
  staticData: (state) => state.staticData



}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


