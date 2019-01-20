<template>
  <div class="home page">
    <h2>{{ $t('home.title') }}</h2>
    <p>{{ $t('home.introduction') }}</p>
    <p>
      Examples: <a target="_blank" href="https://storyfile.com/">StoryFile</a> (<a target="_blank" href="https://www.youtube.com/watch?v=X7XsFcVzFm0">video</a>) - 
      <a target="_blank" href="https://mamasandpapas.ae">Mamas &amp; Papas</a> - 
      <a target="_blank" href="https://nisnass.ae">Nisnass</a> - 
      <a target="_blank" href="https://ounass.ae">Ounass</a> - 
      <a target="_blank" href="https://gap.ae">GAP</a> - 
      <a target="_blank" href="https://www.kodinglab.com/">KodingLab</a>
    </p>
    <h2>{{ $t('home.listTitle') }}</h2>
    <ul>
      <li v-for="item in $t('home.list')" :key="item" class="text item">
        {{ item }}
      </li>
    </ul>
    <h2>I've made this open source</h2>
    <p>
      I've spent most of my front-end developer life with <a target="_blank" href="https://reactjs.org/">React</a> 
      and I didn't have much experience with <a target="_blank" href="https://vuejs.org">Vue</a>, so I decided to create 
      my own personal website with Vue, with <a target="_blank" href="https://ssr.vuejs.org/" title="Server-side Rendering">SSR</a> and all (just trying to do my best). 
      and it was really fun :D
    </p>
    <p>
      Check out GitHub repo here <a target="_blank" href="https://github.com/iMagdy/in1t.com">here</a>. You're free to reuse it.
    </p>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    methods: {
      track () {
        this.$ga.page('/')
      }
    },
    head () {
      return {
        title: `${this.$t('globals.author')} - ${this.$t('globals.title')}`
      }
    }
  }
</script>

<style lang="scss" scoped>

  ul {
    margin: 0;
    padding: 0 0 0 20px;
    li {
      margin-bottom: 10px;
    }
  }
  .rtl {
    h1, p, ul, li {
      direction: rtl;
      text-align: right;
    }
  }
</style>

