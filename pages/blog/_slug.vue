<template>
  <article class="main">
    <h1 class="text-center font-title mt-16 article-title">
      {{ article.title }}
    </h1>
    <blockquote class="text--disabled quote">
      <p class="text-subtitle-2">{{ formatDate(article.createdAt) }}</p>
    </blockquote>
    <nuxt-content class="article-text mt-8" :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      return date.split("T")[0];
    },
  },
};
</script>

<style lang="scss">
.main {
  max-width: 700px;
  margin: auto;
  width: 100%;
  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }
}
.nuxt-content p {
  font-size: 1.4rem;
  font-weight: 300;
}

.quote {
  margin-left: 10px;
}
</style>