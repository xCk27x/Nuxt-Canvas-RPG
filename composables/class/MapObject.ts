import type { MapConfig } from '~/types/Map';
import ItemObject from './ItemObject';
import PersonObject from './PersonObject';
import InputDirectionObject from './InputDirectionObject';
import EventHandler from './EventHandler';

export default class MapObject{
  mapsSetting: MapConfig;
  lowerLayer: HTMLImageElement;
  upperLayer: HTMLImageElement;
  items: ItemObject[];
  private inputObject: InputDirectionObject = new InputDirectionObject();
  centerPerson: PersonObject;
  walls: {[key: string]: boolean};
  behaviorLoopIndex: number = 0;
  leftToCenter: number;
  topToCenter: number;
  
  constructor(ctx: CanvasRenderingContext2D, map: string, x: number = 0, y: number = 0) {
    this.mapsSetting = useMapsSetting()[map];

    const canvasStore = useCanvasStore();
    this.leftToCenter = canvasStore.leftToCenter;
    this.topToCenter = canvasStore.topToCenter;
    
    this.inputObject.init();
    
    this.walls = this.mapsSetting.walls ?? {};
    this.items = this.mapsSetting.items;
    
    this.centerPerson = this.items.find(item => item instanceof PersonObject && item.name === 'hero') as PersonObject;
    
    this.lowerLayer = new Image();
    this.upperLayer = new Image();
    this.lowerLayer.src = this.mapsSetting.lowerLayer;
    this.upperLayer.src = this.mapsSetting.upperLayer;
  }

  isNextPositionUnvalid(curX: number, curY: number, direction: string) {
    const [x, y] = nextPosition(curX, curY, direction);
    return this.walls[`${x},${y}`] ?? false;
  }

  mountObjects() {
    this.items.map((item, i) => {
      item.id = i;
      return item;
    });

    this.items.forEach(item => {
      item.isMounted = true;

      this.addWall(item.x, item.y);

      if (item instanceof PersonObject) {
          this.doBehaviorLoop(item);
      }
    }); 
  }
  async doBehaviorLoop(person: PersonObject) {
    if (person.isPlayerControlled || person.behaviorLoop.length === 0) {
      return;
    }

    let curEvent = person.behaviorLoop[this.behaviorLoopIndex];
    curEvent.who = person.id;

    const handler = new EventHandler({map: this, event: curEvent});
    await handler.init();
    this.behaviorLoopIndex = (this.behaviorLoopIndex + 1) % person.behaviorLoop.length;

      this.doBehaviorLoop(person);
  }

  addWall(x: number, y: number) {
    this.walls[`${x},${y}`] = true;
  }
  removeWall(x: number, y: number) {
    delete this.walls[`${x},${y}`];
  }
  moveWall(x: number, y: number, direction: string) {
    this.removeWall(x, y);
    [x, y] = nextPosition(x, y, direction);
    this.addWall(x, y);
  }

  // step1: update the direction of the person
  updateItems() {
    this.items.forEach(item => { 
      if (item instanceof PersonObject) {
        item.update({
          arrow: this.inputObject.direction,
          cantGo: this.isNextPositionUnvalid(item.x, item.y, this.inputObject.direction),
          map: this,
        });
      }
    });
  }

  // step2: render lower map
  renderLowerMap(ctx: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    x = x + withGridX(this.leftToCenter) - this.centerPerson.x;
    y = y + withGridY(this.topToCenter) - this.centerPerson.y;
    ctx.drawImage(this.lowerLayer, x, y);
  }

  // step3: render items
  renderItems(ctx: CanvasRenderingContext2D) {
    this.items.forEach((item) => {
      item.draw(ctx, this.centerPerson);
    });
  }

  // step4: render upper map
  renderUpperMap(ctx: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    x = x + withGridX(this.leftToCenter) - this.centerPerson.x;
    y = y + withGridY(this.topToCenter) - this.centerPerson.y;
    ctx.drawImage(this.upperLayer, x, y);
    //ctx.drawImage(this.image, frameX * this.frameHeight, frameY * this.frameWidth, this.frameHeight, this.frameWidth, x, y, this.frameHeight, this.frameWidth);
  }
}
