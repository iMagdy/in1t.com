<template>
  <v-layout justify-center align-center row wrap>
    <v-container fluid grid-list-lg>
      <h1 class="display-2 font-weight-thin page-headline">Experience</h1>
      <v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
      <v-layout row wrap>
        <v-flex xs12>
          <!-- <h1 class="display-2 font-weight-thin">Experience</h1> -->
          <v-timeline :dense="$isMobile">
            <v-timeline-item
              v-for="(job, index) in experience"
              :key="job.meta"
              :color="index === 0 ? 'green darken-3' : 'blue darken-3'"
              :large="!$isMobile"
              :icon="$isMobile ? '' : 'work'"
            >
              <template v-if="!$isMobile" v-slot:opposite>
                <span>
                  <strong class="test1">{{job.company}}</strong> <br />
                  {{job.meta.split(' — ')[0]}} <br />
                  <small class="test2">{{job.meta.split(' — ')[1]}}</small>
                </span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  {{job.title}}
                  <v-flex v-if="$isMobile" class="job-meta">
                    <small>
                      <strong>{{job.company}} — {{job.meta.split(' — ')[0]}}</strong><br />
                      {{job.meta.split(' — ')[1]}}
                    </small>
                  </v-flex>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li v-for="detail in job.details" :key="detail">
                      {{detail}}
                    </li>
                  </ul>
                </v-card-text>
                <!-- <v-card-actions>
                  <v-btn flat>Learn more</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import experience from '../../assets/experience.json';

export default {
  name: 'Experience',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Home',
        disabled: false,
        to: '/',
      },
      {
        text: 'Experience',
        disabled: true,
      },
    ],
    experience,
  }),
};
</script>

<style lang="scss" scoped>
  .page-headline {
    margin: 10px 0 20px 0;
  }
  .job-meta {
    font-size: 14px;
    line-height: 13px;
    padding: 11px 0 0 0 !important;
  }
</style>
