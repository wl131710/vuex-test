<template>
  <div class="hello">
    <ul>
     <li v-for="item in list">
                <p class="name">姓名：{{item.name}}</p>
                <p class="age">年龄：￥{{item.age}}</p>
            </li>
            <hr>
     <li v-for="item in list2">
                <p class="name">姓名：{{item.name}}</p>
                <p class="age">年龄：￥{{item.age}}</p>
            </li>
            <hr>Model里面的<br/>
     <li v-for="item in list3">
                <p class="name">姓名：{{item.name}}</p>
                <p class="age">年龄：￥{{item.age}}</p>
            </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, computed: {
    list() {
      return this.$store.state.dolist
    },
    list2() {
      // getters的使用
      // return this.$store.getters['ageDoubble']
      return this.$store.getters.ageDoubble
    },
    list3() {
      // getters的使用
      return this.$store.getters['test/moduleAgeDoubble'] // model中的调用,//   a/moduleAgeDoubble
    }
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
