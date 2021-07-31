<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="btn" @click="debouncedDoSth">clickme</div>
    <div class="btn" @click.right.pre="logSth()">right click me</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
const _ = require("lodash");
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    doSth() {
      console.log("doSth");
    },
    debouncedDoSth: _.debounce(function () {
      this.doSth();
    }, 1000),
    logSth(val = 1) {
      console.log(val);
    },
  },
  created() {
    var a = function (a) {
      this.a = a;
    };
    a.prototype.doSth = () => {
      console.log(1);
    };
    var b = new a(1);
    console.log(b);
    console.log(JSON.parse(JSON.stringify(b)));
    console.log(_.cloneDeep(b));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
