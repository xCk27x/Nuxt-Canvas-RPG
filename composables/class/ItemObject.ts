import type { ItemConfig } from '~/types/Item';
import SpriteObject from './SpriteObject';
import type PersonObject from './PersonObject';

export default class ItemObject implements ItemConfig{
  x: number;
  y: number;
  src: string;
  sprite: SpriteObject;
  
  constructor(config: ItemConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.src = config.src;
    
    this.sprite = new SpriteObject({
      src: config.src,
      shadow: config.shadow,
      animations: config.animations,
      firstAnimation: config.firstAnimation ?? 'idle-down',
    });
  }

  draw(ctx: CanvasRenderingContext2D, centerPerson: PersonObject): void {
    this.sprite.draw(ctx, this.x, this.y, centerPerson);
  }
}