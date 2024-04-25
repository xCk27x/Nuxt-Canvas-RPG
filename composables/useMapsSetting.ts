import type { MapsConfig } from '~/types/Map';
import PersonObject from './class/PersonObject';

export default function useMapsSetting() {
  return <MapsConfig> {
    'DemoRoom': {
      lowerLayer: '/maps/Demo/DemoLower.png',
      upperLayer: '/maps/Demo/DemoUpper.png',
      items: [
        new PersonObject({
          name: 'hero',
          x: withGridX(5),
          y: withGridY(2),
          direction: 'Down',
          src: '/characters/hero.png',
        }),
        new PersonObject({
          name: 'erio',
          x: withGridX(5),
          y: withGridY(6),
          direction: 'Down',
          src: '/characters/erio.png',
        })
      ],
    },
    'DemoRoom2': {
      lowerLayer: '/maps/Demo/DemoLower.png',
      upperLayer: '/maps/Demo/DemoUpper.png',
      items: [ 
        new PersonObject({
          name: 'hero',
          isPlayerControlled: true,
          x: withGridX(5),
          y: withGridY(2),
          direction: 'Down',
          src: '/characters/hero.png',
        }), 
        new PersonObject({
          name: 'erio',
          x: withGridX(5),
          y: withGridY(6),
          direction: 'Down',
          src: '/characters/erio.png',
        })
      ],
    }
  }
}
