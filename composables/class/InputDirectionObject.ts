type m = {[key: string]: string};

export default class InputObject {
  private heldDirections: string[];
  private map: m = {
    "ArrowUp": "up",
    "KeyW": "up",
    "ArrowDown": "down",
    "KeyS": "down",
    "ArrowLeft": "left",
    "KeyA": "left",
    "ArrowRight": "right",
    "KeyD": "right"
  }

  private keydown(event: KeyboardEvent): void {}
  private keyup(event: KeyboardEvent): void {}

  constructor() {
    this.heldDirections = [];
    this.keydown = (event: KeyboardEvent) => {
      const direction = this.map[event.code];
      if (direction && this.heldDirections.indexOf(direction) === -1) {
        this.heldDirections.unshift(direction);
      }
    }
    this.keyup = (event: KeyboardEvent) => {
      const direction = this.map[event.code];
      const index = this.heldDirections.indexOf(direction);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    }
  }


  get direction() {
    return this.heldDirections[0];
  }

  init() {
    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);
  
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", this.keydown);
      window.removeEventListener("keyup", this.keyup);
    });
  }
}