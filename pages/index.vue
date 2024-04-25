<template>
  <div class="canvas_container">
    <canvas id="canvas" width="300" height="150"/>
  </div>
</template>

<script lang="ts" setup>
const canvas = ref<HTMLCanvasElement>();
const ctx = ref<CanvasRenderingContext2D>();
import MapObject from '~/composables/class/MapObject';
import InputObject from '~/composables/class/InputDirectionObject';

const location = useLocationStore();
let map: MapObject;
let inputListener: InputObject;

function initCanvas() {
  canvas.value = document.getElementById('canvas') as HTMLCanvasElement;
  ctx.value = canvas.value.getContext('2d') as CanvasRenderingContext2D;
  map = new MapObject(ctx.value!, location.curLocation);
}

function startGameLoop() {
  (function step() {
    ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
    map.renderLowerMap(ctx.value!);
    map.renderItems(ctx.value!);
    // map.items.forEach(item => item.x += 0.02);
    map.renderUpperMap(ctx.value!);
    requestAnimationFrame(step);
  })()
}

function initInputListener() {
  inputListener = new InputObject();
  inputListener.init();
}

onMounted(() => {
  initCanvas();
  initInputListener();
  startGameLoop();
})
</script>

<style scoped>
.canvas_container {
  position: relative;
  width: 350px;
  height: 250px;
  display: flex;
  margin: auto;
  transform: scale(2) translateY(50%);
} 

.canvas_container canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  outline: 1px solid black;
  image-rendering: pixelated;
}
</style>