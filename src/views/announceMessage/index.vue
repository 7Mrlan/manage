<template>
  <div>
    <h2>公告信息</h2>
    <div class="announce-list">
      <div class="announce-item">
        <p>标题</p>
        <p>内容</p>
        <p>发布日期</p>
        <p>发布教师</p>
        <p>班级</p>
      </div>
      <div :class="[{gray: !isGray(index)}, 'announce-item']" v-for="(item, index) in announceList" :key="index">
        <p>{{ item.title }}</p>
        <p>{{ item.content }}</p>
        <p>{{ item.time }}</p>
        <p>{{ item.teacher }}</p>
        <p>{{ item.classes }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AnnounceMessage {
  title: string,
  content: string,
  time: string,
  teacher: string,
  classes: string,
}
const announceList: AnnounceMessage[] = [{
  title: '标题一',
  content: '内容一',
  time: '2023-4-23',
  teacher: '张三',
  classes: '计算机科学与技术19007班'
},
{
  title: '标题二',
  content: '内容二',
  time: '2023-4-23',
  teacher: '李四',
  classes: '计算机科学与技术19006班'
},
{
  title: '标题三',
  content: '内容三',
  time: '2023-4-23',
  teacher: '王五',
  classes: '计算机科学与技术19005班'
},
{
  title: '标题四',
  content: '内容四',
  time: '2023-4-23',
  teacher: '王五',
  classes: '计算机科学与技术19005班'
},
{
  title: '标题五',
  content: '内容五',
  time: '2023-4-23',
  teacher: '熊炜',
  classes: '计算机科学与技术19005班'
},
{
  title: '标题六',
  content: '内容三',
  time: '2023-4-23',
  teacher: '无名',
  classes: '计算机科学与技术19005班'
},
]





const isGray = (inedx:number):boolean => {
  // 判断index下标，根据下标处理gray类的展示
  return !!(inedx%2)
}
</script>

<style lang="scss" scoped>
.announce-list {
  padding: 1rem 2rem;
  .announce-item {
    text-align: left;
    display:flex;
    padding: 1rem 1rem;
    p {
      width: 11rem;
    }
    &:hover {
      background: #d2d2d2;
    }
  }
  .gray {
    background: #f4f4f4;
  }
}
</style>
