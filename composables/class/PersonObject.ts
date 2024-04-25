import ItemObject from "./ItemObject";
import type { PersonConfig } from "~/types/Person";

export default class PersonObject extends ItemObject{
  movingProgressRemaining: number = 0;
  isPlayerControlled: boolean;
  direction: string = 'Down';
  directionUpdate = {
    'Up': ['y', -1],
    'Down': ['y', 1],
    'Left': ['x', -1],
    'Right': ['x', 1]
  }

  constructor(config: PersonConfig){
    super(config);
    this.isPlayerControlled = config.isPlayerControlled || false;
  }

  update(state: any): void {
    this.updatePosition();

    if (this.movingProgressRemaining === 0 && state.arrow) {
      this.direction = state.arrow;
      this.movingProgressRemaining = 16;
    }
  };

  updatePosition(): void {
    if (this.movingProgressRemaining > 0){
      const [property, change] = directionUpdate(this.direction);
      if (this.isPlayerControlled) {}
      property === 'x' ? this.x += change: this.y += change;
      this.movingProgressRemaining -= 1;
    }
  }
}