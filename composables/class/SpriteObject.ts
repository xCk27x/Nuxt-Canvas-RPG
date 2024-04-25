import type { SpriteConfig } from "@/types/Sprite";

export default class SpriteObject {
  image: HTMLImageElement;
  shadow: HTMLImageElement;
  isLoad: boolean = false;
  animations: SpriteConfig["animations"];
  currentAnimation: SpriteConfig["currentAnimation"];
  currentFrame: number;

  constructor(config: SpriteConfig) {
    this.image = new Image();
    this.image.onload = () => {
      this.isLoad = true;
    };
    this.image.src = config.src;

    this.shadow = new Image();
    this.shadow.onload = () => {
      this.isLoad = true;
    };
    this.shadow.src = config.shadow || "/characters/shadow.png";

    this.animations = config.animations || {
      idleDown: [0, 0]
    };

    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentFrame = 0;
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    x = x;
    y = y;
    ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
    ctx.drawImage(this.shadow, x, y);
  }
}
