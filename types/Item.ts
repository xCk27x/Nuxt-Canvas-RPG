import type PersonObject from "~/composables/class/PersonObject";

export type ItemConfig = {
  x: number;
  y: number;
  src: string;
  shadow?: string;
  animations?: {
    [key: string]: [number, number][],
  };
  firstAnimation?: string;
  draw?(ctx: CanvasRenderingContext2D, centerPerson: PersonObject): void;
}