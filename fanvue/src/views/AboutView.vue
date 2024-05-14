<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="mb-4">
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" @click="handleClick">Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </div>
  </div>
</template>
<script>
import { ElMessage } from 'element-plus'
export default {
  name: 'AboutView',
  methods: {
    handleClick() {
      // 在这里定义按钮点击后的逻辑
      console.log('按钮被点击了');
      ElMessage.success('复制成功');
    }
  },
}
</script>