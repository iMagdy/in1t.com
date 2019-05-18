<template>
  <v-layout justify-center align-center row wrap>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Hi, I'm Islam</h3>

          <span class="subheading">
            I've worked on multiple large projects; Real-time apps,
             interactive educational platforms, artificial-intelligence assisted apps,
             world-class e-commerce websites, mobile apps that
              utilizes geospatial technologies to connect drivers with riders, and much more.
          </span>

          <v-divider class="my-3"></v-divider>

          <div class="title mb-3">
            Check out my resume!
          </div>

          <v-bottom-sheet v-model="resumeSheet">
            <template v-slot:activator>
              <v-btn
                class="mx-0"
                color="primary"
                large
                round
                ripple
                depressed
              >
                Download
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-subheader>How would you like to get my resume?</v-subheader>
              <v-list-tile
                v-for="item in resumeList.filter(item => item.enabled)"
                :key="item.title"
                :href="item.url"
                :download="item.download"
                :target="item.target"
                @click="resumeSheet = false"
              >
                <v-list-tile-avatar>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-bottom-sheet>
          <v-bottom-sheet v-model="skipSheet">
            <template v-slot:activator>
              <v-btn
                class="mx-0"
                flat
                large
                round
                ripple
                depressed
              >
                Skip
              </v-btn>
            </template>
            <v-list>
              <v-subheader>Proceed to</v-subheader>
              <v-list-tile
                v-for="item in skipList.filter(item => item.enabled)"
                :key="item.title"
                @click="skipSheet = false"
                :to="item.url"
              >
                <v-list-tile-avatar>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-bottom-sheet>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      bottom
    >
      You can always view the resume from the side menu to the left
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      snackbar: false,
      resumeSheet: false,
      skipSheet: false,
      resumeList: [
        {
          icon: 'tab',
          title: 'Open in a new tab',
          url: '/Islam-Magdy-Resume.pdf',
          target: '_blank',
          enabled: true,
        },
        {
          icon: (this.$isMobile || this.$isTablet) ? 'mobile_friendly' : 'cloud_download',
          title: `Save to my ${this.$device.mobile() || this.$device.tablet() || 'computer'}`,
          url: '/Islam-Magdy-Resume.pdf',
          download: 'Islam-Magdy-Resume.pdf',
          enabled: true,
        },
        {
          icon: 'mail',
          title: 'Forward to my email',
          enabled: this.$enableExperimental,
        },
      ],
      skipList: [
        {
          icon: 'list',
          title: 'Highlights',
          url: '/highlights',
          enabled: true,
        },
        {
          icon: 'work',
          title: 'Experience',
          url: '/experience',
          enabled: true,
        },
      ],
    };
  },
};
</script>
