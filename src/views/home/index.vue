<template>
  <div>
    <el-input v-model="input" placeholder="Please input" @keyup.enter="addEvent" />
    <div class="event" v-for="(item, index) in list" :key="index">
      <el-checkbox :label="item" size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue';
const input: any = ref('');
const list:string[] = reactive([]);
const addEvent = (e: any) => {
    // console.log('s' + input.value);
    list.push(input.value);
    input.value = '';
    console.log(list);

}
</script>

<style lang="scss" scoped></style>
