export type ItemConfig = {
  x: number;
  y: number;
  direction?: string;
  src: string;
  animations?: {
    idleDown: [number, number],
  };
  currentAnimation?: string;
  draw?(ctx: CanvasRenderingContext2D): void;
}