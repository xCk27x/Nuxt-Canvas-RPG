import type { ItemConfig } from '~/types/Item';
import SpriteObject from './SpriteObject';

export default class ItemObject implements ItemConfig{
  x: number;
  y: number;
  src: string;
  sprite: SpriteObject;
  direction: string = 'Down';
  
  constructor(config: ItemConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.src = config.src;
    this.direction = config.direction || 'Down';
    this.sprite = new SpriteObject({
      src: config.src,
      animations: config.animations || {
        idleDown: [0, 0],
      },
      currentAnimation: config.currentAnimation || 'idleDown',
    });
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.sprite.draw(ctx, this.x, this.y);
  }
}