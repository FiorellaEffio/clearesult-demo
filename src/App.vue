<template>
  <div class="h-screen bg-slate-200">
    <nav class="bg-black text-slate-400 h-fit py-3">
      <router-link to="/" class="text-inherit">Reactive Data Binding</router-link> |
      <router-link to="/component-communication" class="text-inherit">Component Communication</router-link> |
      <router-link to="/component-communication-with-emit" class="text-inherit">Component Communication with Emit</router-link> |
      <router-link to="/watcher-usage" class="text-inherit">Watcher Usage</router-link>
    </nav>
    <div class="py-6 px-4 h-fit flex">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
