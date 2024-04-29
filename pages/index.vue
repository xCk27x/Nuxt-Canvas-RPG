<template>
  <div class="canvas_container">
    <canvas id="canvas" width="300" height="200" />
  </div>
</template>

<script lang="ts" setup>
const canvas = ref<HTMLCanvasElement>();
const ctx = ref<CanvasRenderingContext2D>();
import MapObject from '~/composables/class/MapObject';

const where = useAtStore();
let map: MapObject;

function initCanvas() {
  canvas.value = document.getElementById('canvas') as HTMLCanvasElement;
  ctx.value = canvas.value.getContext('2d') as CanvasRenderingContext2D;

  //
  map = new MapObject(ctx.value!, where.at);
}

function startGameLoop() {
  (function step() {
    ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
    map.updateItems();
    map.renderLowerMap(ctx.value!);
    map.renderItems(ctx.value!);
    map.renderUpperMap(ctx.value!);
    requestAnimationFrame(step);
  })()
}

// where the game starts
onMounted(() => {
  initCanvas();
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