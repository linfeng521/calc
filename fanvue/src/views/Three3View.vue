<template>
    <div>
        <p>当前时间：{{ currentTime }}</p>
        <button @click="getinfo">点击我</button>
        <div style="height: 500px;widows: 500px;">
            <TresCanvas shadows=true clearColor="#F78B3D">
                <TresPerspectiveCamera :position="[2, 2, 9]" :look-at="[0, 2, 0]" />
                <OrbitControls />
                <TresMesh>
                    <TresTorusGeometry :args="[4, 0.1, 180, 500]" />
                    <TresMeshBasicMaterial color="#0dbc79" />
                </TresMesh>
                <Suspense>
                    <LoadGLTF />
                </Suspense>
                <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="1" />
                <TresAmbientLight :intensity="2" />
            </TresCanvas>
        </div>

    </div>
</template>

<script>
import { TresCanvas, } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import LoadGLTF from '@/components/LoadGLTF.vue';
export default {
    data() {
        return {
            currentTime: '',
            boxRotation: [0, 0, 0], // 初始化XYZ轴旋转值
        }
    },
    components: {
        OrbitControls, LoadGLTF
    },
    mounted() {
        this.getCurrentTime();
        // 每秒更新一次时间
        setInterval(this.getCurrentTime, 1000);
        // 开始旋转动画
    },
    methods: {
        getCurrentTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        },
        getinfo() {
            console.log(this.boxRef)
        }
    }
}
</script>

<style scoped>
/* 样式 */
</style>
