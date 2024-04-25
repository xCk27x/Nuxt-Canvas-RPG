type m = {[key: string]: string};

export default class InputObject {
  private heldDirections: string[];
  private map: m = {
    "ArrowUp": "Up",
    "KeyW": "Up",
    "ArrowDown": "Down",
    "KeyS": "Down",
    "ArrowLeft": "Left",
    "KeyA": "Left",
    "ArrowRight": "Right",
    "KeyD": "Right"
  }

  keydown(event: KeyboardEvent): void {}
  keyup(event: KeyboardEvent): void {}

  constructor() {
    this.heldDirections = [];
    console.log(this.map);
    this.keydown = (event: KeyboardEvent) => {
      console.log(event.code);
      console.log(this.map);
      const direction = this.map[event.code];
      if (direction && this.heldDirections.indexOf(direction) === -1) {
        console.log(direction);
        this.heldDirections.unshift(direction);
        console.log(this.heldDirections);
      }
    }
    this.keyup = (event: KeyboardEvent) => {
      const direction = this.map[event.code];
      const index = this.heldDirections.indexOf(direction);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
        console.log(this.heldDirections);
      }
    }
  }


  getDirection() {
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