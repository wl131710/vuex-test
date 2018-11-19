// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
//import vuex from 'vuex'

// 全局访问myone和mytwo方法
const install = function (Vue, options) {
  Vue.prototype.myone = function (){
      alert('执行成功1');
  };
  Vue.prototype.mytwo = function (){
      alert('执行成功2');
  };
};

export default install;