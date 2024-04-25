export type SpriteConfig = {
  src: string,
  shadow?: string,
  animations?: {
    idleDown: [number, number],
  },
  currentAnimation?: string;
};
