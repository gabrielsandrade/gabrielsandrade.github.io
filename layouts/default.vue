<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :expand-on-hover="false"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          color="info"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="info" />
      <v-toolbar-title
        class="title info--text"
        v-text="title"
        @click="$router.push('/')"
        color="info"
      />
      <v-spacer />
      <div>
        <v-layout column align-center>
          <v-icon
          color="info"
            @click="switchTheme">{{ $vuetify.theme.dark ? 'mdi-lightbulb' : 'mdi-lightbulb-on' }}</v-icon>
        </v-layout>
      </div>
    </v-app-bar>
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
      drawer: false,
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