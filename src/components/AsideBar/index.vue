<template>
  <div class="aside">
    <el-row class="tac">
      <el-col>
        <el-menu
        router
        active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
        <el-menu-item index="/announce">
          <el-icon><Bell /></el-icon>
            <span>公告信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>作业管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>待开发</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
  .tac {
    height: 100%;
    background: #545c64;
  }
}
</style>
