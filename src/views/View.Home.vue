<template>
  <div class="home page">
    <h1>Pretty Brief</h1>
    <p>{{intro}}</p>
    <h1>Should you prefer bullets</h1>
    <ul>
      <li v-for="item in bullets" :key="item" class="text item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import '@/styles/View.Home.scss';
  import HomeData from '@/assets/data.home.json';

  export default {
    name: 'home',
    data: () => ({ ...HomeData }),
  };
</script>
