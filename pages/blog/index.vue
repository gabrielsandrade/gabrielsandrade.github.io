<template>
  <div class="main">
    <h1 class="text-center mt-8">Blog</h1>
    <PostCard
      v-for="article in articles"
      :article="article"
      :key="article.createAt"
    />
    <div class="d-flex justify-space-between mt-8">
      <v-btn :disabled="offset <= 0" @click="previousPage"> &lt; </v-btn>
      <v-btn :disabled="offset >= totalArticles - 5" @click="nextPage">
        &gt;
      </v-btn>
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
export default {
  data: function () {
    return {};
  },
  components: {
    PostCard,
  },
  async asyncData({ $content, params, store }) {
    const articles = await $content("articles")
      .skip(store.state.offset)
      .limit(store.state.paginationLimit)
      .fetch();
    const allArticles = await $content("articles").only(["title"]).fetch();
    const totalArticles = allArticles.length;
    return { articles, totalArticles };
  },
  computed: {
    offset() {
      return this.$store.state.offset;
    },
  },
  methods: {
    previousPage() {
      this.$store.commit("decrement");
      this.refreshNuxt();
    },
    nextPage() {
      this.$store.commit("increment");
      this.refreshNuxt();
    },
    async refreshNuxt() {
      await this.$nuxt.refresh();
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 700px;
  margin: auto;
  width: 100%;
}
</style>