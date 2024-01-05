<template>

  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #242424;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #efca08;
}

</style>
