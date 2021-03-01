<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="increment()">increment with vuex</button>
    <button @click="increment2()">increment with vue3</button>
    <button @click="increment2FromParent()">increment with vue3 From Parent</button>
    <button @click="setMessageAction()">setMessageAction</button>
    <div>{{ state.counter }}</div>
    <div>{{ store2 }}</div>
    <div>{{ componentVar }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { reactive } from 'vue'

export default {
  inject: ['user'],
  setup () {
    const state = reactive({ counter: 0 })
    return { state }
  },
  data () {
    return {
      test: 'test123',
      componentVar: this.$root.$data.user,
      store2: this.$root.$data.store2
    }
  },
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    setMessageAction () {
      this.$root.$data.store2.setMessageAction('MessageAction called from home component')
    },
    increment () {
      this.$store.commit('increment')
      console.log(this.$store.state.counter)
    },
    increment2 () {
      this.$root.$data.count2++
      console.log(this.$root.$data.count2)
    },
    increment2FromParent () {
      this.$root.$data.incrementCount2()
    }
  }
}

</script>
