<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  data () {
    return {
      test: 'meinTest',
      account: {
        name: 'Marina Mosti',
        money: 10
      },
      user: 'tobias',
      count2: 0,
      incrementCount2 () {
        this.count2++
        console.log(this.count2)
      },
      store2: {
        debug: true,
        state: {
          message: 'Hello!'
        },
        setMessageAction (newValue) {
          if (this.debug) console.log('setMessageAction triggered with', newValue)
          this.state.message = newValue
          console.log('this.state.message= ' + this.state.message)
        },
        clearMessageAction () {
          if (this.debug) console.log('clearMessageAction triggered')
          this.state.message = ''
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
