<template>
  <div>
    <v-navigation-drawer
      v-if="$isMobile"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list dense>
        <v-layout row align-center>
          <v-flex
            xs12
            align-center
            justify-center
            layout
            text-xs-center
          >
            <v-avatar
              size="150"
              color="grey lighten-4"
              class="avatar"
            >
              <img src="/img/avatar.jpeg"/>
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-divider />
        <template v-for="item in items">
          <v-list-tile
            v-if="item.externalUrl"
            :key="item.text"
            :href="item.externalUrl"
            :target="item.target"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="item.nativeUrl" :key="item.text" to="/">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="yellow" light app fixed flat>
      <v-toolbar-title style="width: 300px" class="ml-0">
        <v-toolbar-side-icon v-if="$isMobile" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Islam Magdy</span>
      </v-toolbar-title>
      <v-text-field
        v-if="$enableExperimental"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Type keyword and hit enter..."
        class="hidden-sm-and-down"
        @keyup="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon v-if="this.$enableExperimental">
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon v-if="this.$enableExperimental">
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'PrimaryHeader',
  methods: {
    search: (event) => {
      if (event.code === 'Enter') {
        window.find(event.target.value);
      }
    },
  },
  data() {
    return {
      drawer: null,
      items: [
        { icon: 'home', text: 'Home', nativeUrl: '/' },
        {
          icon: 'save_alt', text: 'Resume', externalUrl: '/Islam-Magdy-Resume.pdf', target: '_blank',
        },
        {
          icon: 'link', text: 'LinkedIn', externalUrl: 'https://www.linkedin.com/in/imagdy/', target: '_blank',
        },
        {
          icon: 'link', text: 'GitHub', externalUrl: 'https://github.com/iMagdy', target: '_blank',
        },
        {
          icon: 'email', text: 'i.magdy.m@gmail.com', externalUrl: 'mailto:i.magdy.m@gmail.com', target: '_blank',
        },
        {
          icon: 'phone', text: '+20 114 895 6422', externalUrl: 'tel:+20 114 895 6422', target: '_blank',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .avatar {
    margin: 10px 0px;
  }
</style>
