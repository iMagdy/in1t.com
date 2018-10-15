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
import HomeData from '@/assets/data.home.json';

export default {
  name: 'home',
  data: () => ({ ...HomeData })
};
</script>

<style lang="scss">

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

</style>