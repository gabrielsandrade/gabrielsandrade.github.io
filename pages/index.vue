<template>
  <div justify="center" align="center" class="main">
    <div class="main-content mt-2">
      <div class="title d-flex">
        <h2 class="title__fixed_sentence">&ltGabriel</h2>
        <h2 class="title__typing-sentence"></h2>
        <p class="title__input-cursor"></p>
      </div>
      <div class="intro text-justify my-8">
        <v-img class="profile-picture pa-2" max-height="800" max-width="800" src="profile.jpg"></v-img>
        <p>
          Hi, I am Gabriel! I am Brazilian, 26 years old, Computer Engineering
          student at UFBA (Federal University of Bahia), interested in math,
          engineering, data science, and web development.
        </p>
        <p>
          I have worked with Professor Leonardo F. Nascimento at Digital
          Humanities Laboratory (LABHD - UFBA) developing web scraping scrpts
          with Python to collect online data from many different sources and
          since 2020 I am working with web development using mostly PHP /
          Laravel and Vue.Js
        </p>
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
    const textEnd = " Andrade />";
    while(true){
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
  font-size: 1.1rem !important;
  font-weight: 350;
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
    margin-left: 8px;
  }

  .intro {
    display: block;
    max-width: 100%;

    ::first-letter {
      margin-left: 25px;
    }
  }

  .profile-picture {
    float: right;
    width: 30%;
    height: auto;
    margin-left: 20px;
    border-radius: 100%;
    box-shadow: rgba(6, 37, 46, 15) 2px 2px 10px;
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
    margin-bottom: 20px;
    height: auto;
  }
}
</style>