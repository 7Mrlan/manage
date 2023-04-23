<template>
  <div class="main">
    <aside-bar/>
    <div class="right">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  .right {
    flex:1;
  }
}
</style>
