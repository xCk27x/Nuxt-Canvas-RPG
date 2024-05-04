import type MapObject from './MapObject';
import type { BehaviorConfig } from '~/types/Behavior';
import type PersonObject from './PersonObject';
import type { CustomEventDetail } from '~/utils/emitEvent'; 

export default class EventHandler {
  map: MapObject;
  event: BehaviorConfig;
  
  constructor({map, event}: {map: MapObject, event: any}) {
    this.map = map;
    this.event = event;
  }

  stand(resolve: any) {

  }

  walk(resolve: any) {
    const who = this.map.items[this.event.who!] as PersonObject;
    who.startBehavior(
      {map: this.map}, this.event
    )
    const completeWalk = (e: any) => {
      if (e.detail.whoId === this.event.who) {
        document.removeEventListener('personCompleteWalk', completeWalk);
        resolve();
      }
    }
    document.addEventListener('personCompleteWalk', completeWalk);

  }

  init() {
    return new Promise((resolve, reject) => {
      if (this.event.type === 'stand') {
        this.stand(resolve);
      } else if (this.event.type === 'walk') {
        this.walk(resolve);
      } else {
        reject('no event type found');
      }
    })
  }
}