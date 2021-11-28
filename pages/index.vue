<template>
  <div justify="center" align="center" class="main">
    <div class="main-content mt-2">
      <!-- <h1>&ltGabriel Andrade /></h1> -->
      <h2>Olá !</h2>
      <p class="">
        Meu nome é Gabriel Andrade e moro em Salvador/BA. Há alguns anos eu
        iniciei a graduação em Matemática mas a paixão por tecnologia me fez
        migrar para a Engenharia de Computação que atualmente curso o oitavo
        semestre na UFBA (Universidade Federal da Bahia) e há 1 ano trabalho
        desenvolvendo aplicações web com VueJs e PHP (Laravel).
      </p>
    </div>
    <div class="my-6 articles">
      <h3 class="my-4">Últimas postagens</h3>
      <PostCard
        v-for="article in articles"
        :article="article"
        :key="article.createAt"
      />
      <div class="d-flex justify-center">
        <v-btn
          class="mt-6"
          color="info"
          outlined
          @click="$router.push('blog')"
          rounded
          >Ver mais posts</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import PostCard from "@/components/PostCard";
export default {
  components: {
    PostCard,
  },
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

@media screen and (max-width: 600px) {
  .main-content {
    max-width: 700px;
    width: 95%;
    p {
      font-size: 18px !important;
    }
  }
}
</style>