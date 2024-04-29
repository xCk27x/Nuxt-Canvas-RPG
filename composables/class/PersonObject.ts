import ItemObject from "./ItemObject";
import type { PersonConfig } from "~/types/Person";

export default class PersonObject extends ItemObject{
  name: string;
  movingProgressRemaining: number = 0;
  isPlayerControlled: boolean;
  direction: string;
  directionUpdate = {
    'up': ['y', -1],
    'down': ['y', 1],
    'left': ['x', -1],
    'right': ['x', 1],
  }

  constructor(config: PersonConfig) {
    config.animations = {
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [[1, 0], [0, 0], [3, 0], [0, 0]],
      "walk-right": [[1, 1], [0, 1], [3, 1], [0, 1]],
      "walk-up": [[1, 2], [0, 2], [3, 2], [0, 2]],
      "walk-left": [[1, 3], [0, 3], [3, 3], [0, 3]],
    };
    super(config);
    this.direction = config.firstDirection || 'down';
    this.name = config.name;
    this.isPlayerControlled = config.isPlayerControlled || false;
  }

  update(state: any): void {
    this.updatePosition();
    this.updateSprite(state);

    if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
      this.direction = state.arrow;
      this.movingProgressRemaining = 16;
    }
  };
  
  updatePosition(): void {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = directionUpdate(this.direction);
      property === 'x' ? this.x += change: this.y += change;
      this.movingProgressRemaining -= 2;
    }
  }
  
  updateSprite(state: any): void {
    if (this.movingProgressRemaining === 0 && !state.arrow) {
      this.sprite.setAnimation(`idle-${this.direction}`);
      return;
    }

    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation(`walk-${this.direction}`);
    }   
  }
}