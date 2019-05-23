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
        to: '/',
      },
      {
        text: 'Highlights',
        disabled: true,
      },
    ],
    list: [
      {
        title: 'Experience working with large scale production e-commerce systems with tens of thousands of daily traffic for big brands such as Ounass, Nisnass, Gap, and Mamas and Papas.',
        subtitle: 'E-Commerce & Retail',
      },
      {
        title: 'I\'ve worked on multiple large projects, like Real-time, interactive educational platform. Artificial Intelligence-Assisted customer support system, to mobile apps that use geospatial technologies to connect drivers with riders,.. etc',
        subtitle: 'Artificial Intelligence',
      },
      {
        title: 'Skilled in application development utilizing cutting edge technologies including Node.js, MongoDB, React, React Native, Vue, and more. This allows me to develop in all areas of any project.',
        subtitle: 'Full Stack',
      },
      {
        title: 'Strong architecture experience designing and scaling distributed systems using Microservices with Docker and Docker Swarm for large many-services projects. I also have long experience with monolithic apps architecture.',
        subtitle: 'Architecture',
      },
      {
        title: 'Experience building message/event-driven microservices using for example: RabbitMQ, this allows for a highly available services, and reliable executions for large loads of instructions/messages.',
        subtitle: 'Queueing',
      },
      {
        title: 'Currently self-learning Graph DBs & Kubernetes. I\'m always excited about learning new technologies, and working on my skills and knowledge, this have always allowed me to stay up to date with industry standards.',
        subtitle: 'Self learner',
      },
      {
        title: 'Well versed with various protocols including HTTP/S, and WS/S. Always try to use the right tool to match project requirements, for example real-time charting app, or a car booking app works better with sockets.',
        subtitle: 'Networking',
      },
      {
        title: 'Strong advocate for Unit, Integration, and End-to-End testing with maximum coverage in addition to building CI/CD automation pipelines. I\'d automate anything that can be automated, speially deployments, linting, and tests.',
        subtitle: 'Test & Automation',
      },
      {
        title: 'Experience working with legacy systems. I\'ve worked with some really legacy systems, and have long experience on how to work with refactoring existing features, or implementing new fixes and features.',
        subtitle: 'Maintenance',
      },
      {
        title: 'Worked with multi-national distributed teams on large scale. I have been working remotely for years, and understand how important communications and alignment is between remote team members.',
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
