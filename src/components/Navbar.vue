<template>
  <header>
    <h1>The dojo blog</h1>
  </header>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Create' }">Create Post</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  color: #dfdfdf;
  font-size: 48px;
}

header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}

header a.router-link-active {
  color: green;
  font-weight: bold;
}
</style>