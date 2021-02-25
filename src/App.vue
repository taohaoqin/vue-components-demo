<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">目录1</router-link> |
      <router-link to="/about">目录2</router-link> |
      <router-link to="/digui">目录3</router-link> |
      <router-link to="/demo1">目录4</router-link> |
      <router-link to="/demo2">目录5</router-link> |
      <router-link to="/demo3">目录6</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
