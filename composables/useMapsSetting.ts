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
          isPlayerControlled: true,
          x: withGridX(5),
          y: withGridY(2),
          firstDirection: 'left',
          src: '/characters/hero.png',
        }),
        new PersonObject({
          name: 'erio',
          x: withGridX(5),
          y: withGridY(6),
          firstDirection: 'right',
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
          firstDirection: 'down',
          src: '/characters/hero.png',
        }), 
        new PersonObject({
          name: 'erio',
          x: withGridX(5),
          y: withGridY(6),
          firstDirection: 'down',
          src: '/characters/erio.png',
        })
      ],
    }
  }
}
