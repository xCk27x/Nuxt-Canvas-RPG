import type { ItemConfig } from '~/types/Item';
import SpriteObject from './SpriteObject';
import type PersonObject from './PersonObject';

export default class ItemObject implements ItemConfig{
  x: number;
  y: number;
  src: string;
  sprite: SpriteObject;
  direction: string;
  
  constructor(config: ItemConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.src = config.src;
    this.direction = config.firstDirection || 'down';
    this.sprite = new SpriteObject({
      src: config.src,
      firstAnimation: config.firstAnimation ?? 'walk-up',
    });
  }

  draw(ctx: CanvasRenderingContext2D, centerPerson: PersonObject): void {
    this.sprite.draw(ctx, this.x, this.y, centerPerson);
  }
}