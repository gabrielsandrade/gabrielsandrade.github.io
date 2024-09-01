<template>
  <v-app light>
    <div class="mt-2 ml-2">
      <v-btn v-if="$route.path != '/'" prepend-icon="mdi-apps" outlined class="back-btn" small @click="$router.go(-1)">Back</v-btn>
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import StorageService from "@/services/StorageService";

export default {
  created() {
    const theme = StorageService.getItem("theme");
    if (!theme) {
      StorageService.setItem("theme", "dark");
    }
    switch (theme) {
      case "dark":
        this.$vuetify.theme.dark = true;
        break;

      case "light":
        this.$vuetify.theme.dark = false;
        break;

      default:
        this.$vuetify.theme.dark = true;
        break;
    }
  },
  methods: {
    switchTheme() {
      console.log('--', this.$vuetify.theme.isDark);
      StorageService.setItem(
        "theme",
        this.$vuetify.theme.isDark ? "light" : "dark"
      );
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-note-edit",
          title: "Blog",
          to: "/blog",
        },
        {
          icon: "mdi-account",
          title: "About",
          to: "/about",
        },
      ],
      miniVariant: false,
      title: "<GabrielAndrade />",
    };
  },
};
</script>
<style scoped>
body {
  background-color: #fff;
}

.title {
  cursor: pointer;
}
</style>