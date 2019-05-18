<template>
  <v-layout justify-center align-center row wrap>
    <v-container fluid grid-list-lg>
      <h1 class="display-2 font-weight-thin page-headline"> Highlights</h1>
      <v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
      <v-layout row wrap>
        <v-flex v-for="item of list" :key="item.title" xs12 md6 lg4>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ item.subtitle}}</div>
                <span>{{ item.title }}</span>
              </div>
            </v-card-title>
            <!-- <v-card-actions>
              <v-btn flat dark>Learn more</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Highlights',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'Highlights',
        disabled: true,
      },
    ],
    list: [
      {
        title: 'Experience working with large scale e-commerce systems.',
        subtitle: 'E-Commerce & Retail',
      },
      {
        title: 'I\'ve worked on multiple large projects, like Real-time, interactive educational platform. Artificial Intelligence-Assisted customer support system, to mobile apps that use geospatial technologies to connect drivers with riders,.. etc',
        subtitle: 'Artificial Intelligence',
      },
      {
        title: 'Skilled in application development utilizing cutting edge technologies including Node.js, MongoDB, React and React Native.',
        subtitle: 'Full Stack',
      },
      {
        title: 'Strong architecture experience designing and scaling distributed systems using Microservices with Docker/Docker Swarm.',
        subtitle: 'Architecture',
      },
      {
        title: 'Experience building message/event-driven microservices using RabbitMQ',
        subtitle: 'Queueing',
      },
      {
        title: 'Currently self-learning Graph DBs (TinkerPop & AWS Neptune) & Kubernetes.',
        subtitle: 'Self learner',
      },
      {
        title: 'Interested in technologies such as: Ruby, Go, Consul, Nomad, Terraform, Zookeeper, and other frameworks.',
        subtitle: 'Passionate',
      },
      {
        title: 'Well versed with various protocols including HTTP/S, WS/S, and Meteor\'s DDP.',
        subtitle: 'Networking',
      },
      {
        title: 'Strong advocate for Unit, Integration, and End-to-End testing with maximum coverage in addition to building CI/CD automation pipelines.',
        subtitle: 'Test & Automation',
      },
      {
        title: 'Experience working with legacy systems.',
        subtitle: 'Maintenance',
      },
      {
        title: 'Worked with multi-national distributed teams on large scale.',
        subtitle: 'Distributed / Remote',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .page-headline {
    margin: 10px 0 20px 0;
  }
</style>
