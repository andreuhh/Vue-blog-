
<template>
  <!-- // npm i -g json-server -->
  <!-- json-server --watch data/db.json -->
  <div class="home">
    <h2>Refs</h2>
    <p ref="p">my name is {{ ninjaOne.name }} my age is {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">updateNInjaOne</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update ninja 2</button>
    <h2>Computed</h2>
    <input type="text" v-model="search" />
    <div v-for="compName in matchingNames" :key="compName">{{ compName }}</div>
    <h2>Watch</h2>
    <button @click="handleClick">stop watching</button>
    <h2>Post List</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
      <TagCloud />
    </div>
    <div v-else><Spinner /></div>
    <button @click="showPosts = !showPosts">Toggle Post</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import getPosts from "../composables/getPosts";
import PostList from "./PostList";
import TagCloud from "../components/TagCloud";
import Spinner from "../components/Spinner";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const p = ref(null);
    const search = ref("");

    // se usi ref devi usare .value per accedere ad un determinato valore
    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "Luigi", age: 32 });

    // richiamo la funzione esterna che fetcha i dati + faccio il destructoring per usare i dati
    const { posts, error, load } = getPosts();

    load();

    const showPosts = ref(false);

    const updateNinjaOne = () => {
      ninjaOne.value.age = 69;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    const computedNames = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "kopps",
      "peach",
    ]);

    const stopWatch = watch(search, () => {
      console.log("stop watch");
    });

    const stopEffect = watchEffect(() => {
      console.log("stop watch effect", search.value);
    });

    const matchingNames = computed(() => {
      return computedNames.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      computedNames,
      matchingNames,
      search,
      handleClick,
      posts,
      showPosts,
      error,
    };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>