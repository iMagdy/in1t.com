<template>
  <div class="home page">
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.introduction') }}</p>
    <h1>{{ $t('home.listTitle') }}</h1>
    <ul>
      <li v-for="item in $t('home.list')" :key="item" class="text item">
        {{ item }}
      </li>
    </ul>
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
  .page {
    background: #fff;
    text-align: left;
    padding: 7px 30px;
    min-height: 60vh;
  }

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

