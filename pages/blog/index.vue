<template>
  <div>
    <h1 class="text-center mt-8">Blog</h1>
    <v-card
      v-for="article in articles"
      :key="article.path"
      class="mb-3"
      :to="'blog/' + article.path.split('/articles/')[1]"
      elevation="2"
      :hover="true"
      outlined
    >
      <v-card-title>
        {{ article.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ article.description }}
      </v-card-subtitle>
      <div class="d-flex footer ml-4 grey--text">
        <p v-if="article.author" class="mr-4">{{ article.author }}</p>
        <p class="">{{ formatDate(article.createdAt) }}</p>
      </div>
    </v-card>
    <div class="d-flex justify-space-between my-4">
      <v-btn :disabled="offset <= 0" @click="previousPage"> &lt; </v-btn>
      <v-btn :disabled="offset >= totalArticles - 5" @click="nextPage">
        &gt;
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
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
    formatDate(date) {
      return date.split("T")[0];
    },
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