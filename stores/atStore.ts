export const useAtStore = defineStore("atStore", () => {
  const at = ref("DemoRoom");

  function setAt(newmap: string) {
    at.value = newmap;
  }

  return {
    at,
  }
});