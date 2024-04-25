export const useLocationStore = defineStore("locationStore", () => {
  const curLocation = ref("DemoRoom");

  function setLocation(newLocation: string) {
    curLocation.value = newLocation;
  }

  return {
    curLocation,
  }
});