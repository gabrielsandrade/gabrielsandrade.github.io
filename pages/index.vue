<template>
  <div justify="center" align="center" class="main">
    <div class="main-content mt-2">
      <div class="title d-flex">
        <h2 class="title__fixed_sentence">Gabriel</h2>
        <h2 class="title__typing-sentence ml-2"></h2>
        <p class="title__input-cursor"></p>
      </div>
      <div class="intro text-justify my-8">
        <v-img class="profile-picture pa-2" max-height="800" max-width="800" src="developer.png"></v-img>
        <h3 class="mx-0">Welcome to my corner of the web</h3>
        <p>
          Olá, me chamo Gabriel, sou estudante de Engenharia de Computação na UFBA (Universidade Federal da Bahia) e trabalho como desenvolvedor de software. Minha jornada na
          tecnologia me levou a explorar diversas linguagens e frameworks, incluindo PHP com Laravel, Node.js, Vue,
          React, Python e Svelte. Adoro criar soluções que facilitam a vida das pessoas e estou sempre em busca de novos
          desafios e aprendizados.
        </p>
        <p>Além do meu amor pela programação, adoro filmes e livros, especialmente aqueles
          que envolvem suspense, investigação, ficção científica e fantasia. Quando não estou codando ou lendo, você
          provavelmente me encontrará jogando video games ou ouvindo música, que são outras das minhas grandes paixões.
          Fique à vontade para explorar o meu site e saber mais sobre meus projetos e interesses! </p>
      </div>
    </div>
    <div class="my-6 articles">
      <h3 class="my-4">Last posts</h3>
      <PostCard v-for="article in articles" :article="article" :key="article.createAt" />
      <div class="d-flex justify-center">
        <v-btn class="mt-6" color="info" outlined @click="$router.push('blog')" rounded>Read more</v-btn>
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
  async mounted() {
    const title = document.getElementsByClassName("title__typing-sentence")[0];
    const textEnd = " Andrade";
    while (true) {
      await this.typeSentence(textEnd, title);
      await this.waitForMs(6000);
      await this.deleteSentence(title);
      await this.waitForMs(2000);
    }

  },
  methods: {
    formatDate(date) {
      return date.split("T")[0];
    },
    waitForMs(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    typeSentence(sentence, element) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < sentence.length) {
          element.textContent += sentence.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
    deleteSentence(element) {
      let i = element.innerText.length;
      const interval = setInterval(() => {
        if (i > 0) {
          element.innerText = element.innerText.slice(0, i - 1);
          i--;
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 1rem !important;
  font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.main-content {
  max-width: 700px;
  width: 100%;

  .title {

    &__fixed_sentence,
    &__typing-sentence {
      font-size: 34px;
      font-weight: 700;
    }

    font-size: 34px !important;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    40% {
      opacity: 1;
    }

    60% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  .title__input-cursor {
    animation: blink .6s linear infinite alternate;
    display: inline-block;
    width: 2px;
    height: 30px;
    background-color: #26a69a;
    margin-left: 0px;
  }

  .intro {
    display: block;
    max-width: 100%;

    p::first-letter {
      margin-left: 25px;
    }
  }

  .profile-picture {
    float: left;
    width: 20%;
    height: auto;
    margin-right: 20px;
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
      font-size: 1rem !important;
    }

    .intro {
      position: relative;
    }
  }

  .profile-picture {
    position: relative;
    top: 0;
    display: inline;
    width: 85vw !important;
    margin: auto;
    margin-bottom: 20px;
    height: auto;
  }
}
</style>