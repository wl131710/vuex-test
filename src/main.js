// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storeModel from './common/store.js'
import util from './common/util.js'
import vuex from 'vuex'
Vue.use(vuex)
Vue.use(util)
Vue.config.productionTip = false
// Vue.config.devtools = true
/* eslint-disable no-new */

//创建一个常量对象
const state={
  isRed:false,
  count: 0,
  dolist: [{name:'小明', age:13},{name:'小傻', age:16},{name:'小屁', age:53}]
}
var store = new vuex.Store({//创建vuex中的store对象
  strict: true,  // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。
  state, 
  //有时候我们需要从 store 中的 state 中派生出一些状态,Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
  getters: {
    ageDoubble: state => {
      var mm = state.dolist.map(function(item){
        return {
          name: item.name,
          age: item.age * 2
        }
      });
      return mm;
    }
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations: {
    addCount: state=> {      
        // 变更状态
        state.count++
    },
    changeName: (state, name) => {
      state.dolist[0].name = name;
    },
    changeName2: (state, data) => {
      state.dolist[0].name = data.name;
    }
  },
  // 1、Action 提交的是 mutation，而不是直接变更状态。2、Action 可以包含任意异步操作。
  actions: {
    changeName (context) {
      context.commit('changeName')
    },
    changeNamePromise ({commit, state}, name) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('changeName', name)
          resolve()
        }, 1000)
      })
    },
    addCount ({commit}) {
      commit('addCount')
    }
  },
  // modules:{
  //   a:storeModel.test
  // },
  modules:storeModel
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
