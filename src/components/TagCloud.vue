<template>
  <div class="tag-cloud">
    <h3>Tags Cloud</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";

export default {
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);
    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  background-color: rgb(236, 97, 97);
}
.tag-cloud a {
  color: white;
  text-decoration: none;
}

.tag-cloud a.router-link-active {
  font-weight: 700;
}
</style>