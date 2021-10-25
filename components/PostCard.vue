<template>
  <v-card
    class="mb-3"
    :to="'blog/' + article.path.split('/articles/')[1]"
    elevation="12"
    shaped
    outlined
  >
    <v-card-title class="text-h5 font-weight-bold">
      {{ article.title }}
    </v-card-title>
    <v-card-subtitle class="font-weight-400">
      {{ article.description }}
    </v-card-subtitle>
    <div class="d-flex footer ml-4 grey--text">
      <p v-if="article.author" class="mr-1">{{ article.author }} |</p>
      <p class="ml-0">{{ formatDate(article.createdAt) }}</p>
    </div>
  </v-card>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: {
    article: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatDate(date) {
      return date.split("T")[0];
    },
  },
};
</script>