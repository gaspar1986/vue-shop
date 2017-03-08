<template>
  <div id="app">
    <div class="header">i am header</div>
    <div class="tab">i am tab</div>
    <div class="footer">i am footer</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  #app
   & > .header{
      font-size:20px;
   }
</style>
