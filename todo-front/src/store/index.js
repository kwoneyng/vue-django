import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  // 상태(data) -- 바뀌면 보여지는 화면이 바뀜(Vuex를 통해 모든 컴포넌트에서 사용가능)
  state:{
    token:null,
    
  },
  // computed
  getters:{
    isLoggedIn(state){
      return state.token ? true : false
    },
    options(state){
      return {
        headers:{
          Authorization: 'JWT ' + state.token
        }
      }
    },
    userId(state){
      return state.token ? jwtDecode(state.token).user_id : null
    }
  },
  // 상태를 변경하는 함수
  mutations:{
    setToken(state, token){
      state.token = token
    }
  },
  // method
  actions:{
    login(context, token){
      context.commit('setToken', token)
    },
    logout(context){
      context.commit('setToken', null)
    }
  },
})
