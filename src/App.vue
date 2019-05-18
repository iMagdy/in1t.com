<template>
  <v-app id="inspire">

    <!-- <PrimaryNavigation v-on:onToggleDrawer="toggleDrawer" :drawer="this.drawer" /> -->

    <PrimaryHeader />

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-btn
      v-if="this.$enableExperimental"
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="dialog = !dialog"
    >
      <v-icon>message</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <!-- ... -->
    </v-dialog>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} In1t - All Rights Reserved</div>
    </v-footer>
  </v-app>
</template>

<script>
import PrimaryHeader from './views/header/header-primary.vue';

export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    source: String,
  },
  components: {
    PrimaryHeader,
  },
};
</script>
