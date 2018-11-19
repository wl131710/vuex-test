<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>state.isRed：{{$store.state.isRed}}</h2>
    <button @click="$store.state.isRed = !$store.state.isRed;">有脾气就点击我啊</button>

    <button @click="clickMe()">点我累加哦{{$store.state.count}}</button>
    <button @click="clickMe3()">点我也累加哦{{$store.state.count}}</button>
    <button @click="clickMe2()">点我修改名字哦</button>
    <button @click="clickMe4()">点我修改名字哦action</button>
    <button @click="change(name)">点我修改名字哦2</button><input type="text" v-model="name"/><br/>
    <button @click="clickMeModel()">点我Model</button>
    <button @click="clickMeModelAction()">点我ModelAction</button>
    <test></test>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import test from './test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: ''
    }
  },
  methods: {
      clickMe () {
        this.$store.commit('addCount')
      },      
      clickMe2 () {
        // this.$store.commit('changeName', this.name)
        //对象风格的提交方式,提交 mutation 的另一种方式是直接使用包含 type 属性的对象 注意changeName2的方法参数处理必须是json
        this.$store.commit({
          type: 'changeName2',
          name: this.name
        })
      },
      clickMe4() {
        this.changeNamePromise(this.name).then(()=>{alert(1)})
      },
      // 使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
      ...mapMutations({
          change: 'changeName' // 将 `this.change()` 映射为 `this.$store.commit('changeName')`
      }),
      clickMe3 () {
        this.$store.dispatch('addCount')
      },
      ...mapActions({
      changeNamePromise: 'changeNamePromise', // 将 `this.changeNamePromise()` 映射为 `this.$store.dispatch('changeNamePromise')`
      //changeNamePromise2: 'test/changeNamePromise' // model中的调用
    }),
      // 统一命名空间 
      ...mapActions('test',{ //a
      changeNamePromise2: 'changeNamePromise' // model中的调用
    }),
      clickMeModel () {
        //alert(this.$store.state.a.count)
        alert(this.$store.state.test.count)
      },clickMeModelAction () {
        this.changeNamePromise2(this.name).then(()=>{alert(1)})
      }
  },
  components:{
    test:test
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
