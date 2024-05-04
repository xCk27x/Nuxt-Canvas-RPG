import type { MapsConfig } from '~/types/Map';
import PersonObject from './class/PersonObject';
import ItemObject from './class/ItemObject';

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
          y: withGridY(6),
          firstDirection: 'left',
          src: '/characters/hero.png',
        }),
        new PersonObject({
          name: 'erio',
          x: withGridX(2),
          y: withGridY(6),
          firstDirection: 'right',
          src: '/characters/erio.png',
          behaviorLoop: [
            { type: 'walk', direction: 'right', time: 800 },
            { type: 'walk', direction: 'down' , time: 800 },
            { type: 'walk', direction: 'left', time: 800},
            { type: 'walk', direction: 'up', time: 800},
          ]
        }),
        new PersonObject({
          name: 'npc1',
          x: withGridX(8),
          y: withGridY(9),
          firstDirection: 'up',
          src: '/characters/npc1.png',
          behaviorLoop: [
            { type: 'stand', direction: 'right', time: 800 },
            { type: 'stand', direction: 'down' , time: 800 },
            { type: 'stand', direction: 'left', time: 1200},
            { type: 'stand', direction: 'up', time: 300},
          ]
        }),
        new ItemObject({
          x: withGridX(5),
          y: withGridY(4),
          src: '/items/chill.png',
        })
      ],
      walls: {
        // top wall
        [asGridCoord(1, 3)]: true,
        [asGridCoord(2, 3)]: true,
        [asGridCoord(3, 4)]: true,
        [asGridCoord(4, 4)]: true,
        [asGridCoord(5, 3)]: true,
        [asGridCoord(6, 4)]: true,
        [asGridCoord(6, 3)]: true,
        [asGridCoord(6, 2)]: true,
        [asGridCoord(6, 1)]: true,
        [asGridCoord(8, 4)]: true,
        [asGridCoord(8, 3)]: true,
        [asGridCoord(8, 2)]: true,
        [asGridCoord(8, 1)]: true,
        [asGridCoord(7, 1)]: true,
        [asGridCoord(9, 3)]: true,
        [asGridCoord(10, 3)]: true,
        // right wall
        ...asGridCoordXY([11, 11], [4, 9]),
        // bottom wall
        ...asGridCoordXY([1, 4], [10, 10]),
        [asGridCoord(4, 11)]: true,
        [asGridCoord(5, 11)]: true,
        [asGridCoord(6, 11)]: true,
        ...asGridCoordXY([6, 10], [10, 10]),
        // left wall
        ...asGridCoordXY([0, 0], [1, 10]),
        // table
        ...asGridCoordXY([7, 8], [6, 7]),
      }
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
