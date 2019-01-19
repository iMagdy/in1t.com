<template>
  <footer>
    1988 - {{ currentYear }} In1t. <a target="_blank" href="https://github.com/iMagdy/in1t.com">open sourced</a>
  </footer>
</template>

<script>
  export default {
    name: 'GlobalFooter',
    data: () => ({
      currentYear: new Date().getFullYear()
    })
  }
</script>
