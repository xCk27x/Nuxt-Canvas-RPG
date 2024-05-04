export const useCanvasStore = defineStore("canvasStore", () => {
  const width = ref(320);
  const height = ref(240);

  const leftToCenter = computed(() => (width.value/16 - 1) / 2);
  const topToCenter = computed(() => (height.value/16 - 1) / 2);

  function setWidth(newWidth: number) {
    width.value = newWidth;
  }

  function setHeight(newHeight: number) {
    height.value = newHeight;
  }

  return {
    width,
    height,
    leftToCenter,
    topToCenter,
  }
});