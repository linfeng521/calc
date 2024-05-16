<template>
  <div ref="canvasContainer" style="width: 800px; height: 600px;"></div>
</template>

<script>
import { PerspectiveCamera, WebGLRenderer, Scene, AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'GLBViewer',
  data() {
    return {
      scene: null, // 场景
      camera: null, // 照相机
      renderer: null, // 渲染器
      mesh: null, // 网格
      textureLoader: null, // 纹理加载器
      mixer: null,
      groupBox: null,
      stats: null, // 性能监测
      control: null, // 相机控件
      clearAnim: null,
      clock: null
    };
  },
  mounted() {
    this.initThree();
    this.loadModel();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    initThree() {
       // 场景
      this.scene = new Scene();
      // 设置相机
      // 1.2 相机
      // 设置摄像机位置,相机方向逆X轴方向，倾斜向下看
      this.camera.position.set(360, 360, 360);
      this.camera = new PerspectiveCamera(
        75,
        this.$refs.canvasContainer.offsetWidth / this.$refs.canvasContainer.offsetHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      // 设置渲染器
      this.renderer = new WebGLRenderer();
      this.renderer.setSize(
        this.$refs.canvasContainer.offsetWidth,
        this.$refs.canvasContainer.offsetHeight
      );
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);

      // 设置场景灯光
      const ambientLight = new AmbientLight(0xcccccc, 1);
      this.scene.add(ambientLight);

      window.addEventListener('resize', this.onWindowResize, false);

      this.animate();
    },
    loadModel() {
      // 使用GLTFLoader加载模型
      const loader = new GLTFLoader();
      loader.load(
        'hu246_1.glb', // 您指定的模型路径
        (gltf) => {
          this.scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('An error happened:', error);
        }
      );
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      const width = this.$refs.canvasContainer.offsetWidth;
      const height = this.$refs.canvasContainer.offsetHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    },
  },
};
</script>

<style scoped>
/* 您可以在这里添加CSS样式 */
</style>