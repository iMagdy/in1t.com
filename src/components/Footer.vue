<template>
  <p>
    2018-present &copy; - <a :href="url">open source</a>
  </p>
</template>

<script>
import Constants from '@/constants';
export default {
  name: 'Footer',
  data: () => ({
    url: Constants.GITHUB_SITE_REPO
  })
}
</script>