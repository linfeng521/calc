<template>
<div>
    <h1>加载STL显示</h1>
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