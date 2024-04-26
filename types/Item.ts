export type ItemConfig = {
  x: number;
  y: number;
  firstDirection?: string;
  src: string;
  animations?: {
    idleDown: [number, number],
  };
  firstAnimation?: string;
  draw?(ctx: CanvasRenderingContext2D): void;
}