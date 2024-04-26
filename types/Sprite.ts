export type SpriteConfig = {
  src: string,
  shadow?: string,
  animations?: {
    [key: string]: [number, number][],
  },
  firstAnimation?: string;
  animationFrameLimit?: number;
  frameHeight?: number;
  frameWidth?: number;
};
