<template>
  <v-row justify="center" align="center" class="main">
    <div class="main-content mt-12">
      <!-- <h1>&ltGabriel Andrade /></h1> -->
      <h2>Olá !</h2>
      <p class="text-justify">
        Meu nome é Gabriel Andrade e moro em Salvador/BA. Há alguns anos eu
        iniciei a graduação em Matemática mas a paixão por tecnologia me fez
        migrar para o curso de Engenharia de Computação na UFBA (Universidade
        Federal da Bahia) que atualmente estou no oitavo semestre e há 1 ano
        trabalho desenvolvendo aplicações web com VueJs e PHP (Laravel).
      </p>
    </div>
    <div class="my-6 articles">
      <h3 class="my-4">Últimas postagens</h3>
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
      <div class="d-flex justify-center">
        <v-btn color="info" outlined @click="$router.push('blog')"
          >Ver mais posts</v-btn
        >
      </div>
    </div>
  </v-row>
</template>
<script>
export default {
  async asyncData({ $content, params, store }) {
    const articles = await $content("articles").limit(2).fetch();

    return { articles };
  },
  methods: {
    formatDate(date) {
      return date.split("T")[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  max-width: 700px;
  width: 100%;
  p {
    font-size: 22px !important;
  }
}
.articles {
  max-width: 700px;
  width: 100%;
}
</style>