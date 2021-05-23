<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log("comp mounted"));
    onUnmounted(() => console.log("comp Unmounted"));
    onUpdated(() => console.log("comp update"));
  },
  mounted() {
    console.log("mounted using options api");
  },
};
</script>

<style>
</style>