import type ItemObject from '~/composables/class/ItemObject';
import type { ItemConfig } from './Item';

export type MapConfig = {
  items: ItemObject[];
  lowerLayer: string;
  upperLayer: string;
}

export type MapsConfig = {
  [key: string]: MapConfig;
};