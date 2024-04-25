import type { MapConfig } from '~/types/Map';
import ItemObject from './ItemObject';
import PersonObject from './PersonObject';
import InputDirectionObject from './InputDirectionObject';

const createImage = useCreateImage();

export default class MapObject{
  mapsSetting: MapConfig;
  lowerLayer: HTMLImageElement;
  upperLayer: HTMLImageElement;
  items: ItemObject[];
  private inputObject: InputDirectionObject = new InputDirectionObject();
  
  constructor(ctx: CanvasRenderingContext2D, map: string, x: number = 0, y: number = 0) {
    this.mapsSetting = useMapsSetting()[map];
    this.lowerLayer = new Image();
    this.lowerLayer.src = this.mapsSetting.lowerLayer;
    this.upperLayer = new Image();
    this.upperLayer.src = this.mapsSetting.upperLayer;
    this.items = this.mapsSetting.items;
    createImage(ctx, this.lowerLayer.src, x, y);
    this.renderItems(ctx);
    createImage(ctx, this.upperLayer.src, x, y);
    console.log(this.inputObject);
    this.inputObject.init();
  }

  renderLowerMap(ctx: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    ctx.drawImage(this.lowerLayer, x, y);
  }

  renderUpperMap(ctx: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    ctx.drawImage(this.upperLayer, x, y);
  }
  
  renderItems(ctx: CanvasRenderingContext2D) {
    this.items.forEach((item) => { 
      if (item instanceof PersonObject) {
        item.update({
          arrow: this.inputObject.getDirection()
        });
      }
      item.draw(ctx);
    });
  }
}
