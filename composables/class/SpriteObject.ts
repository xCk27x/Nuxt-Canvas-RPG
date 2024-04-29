import type { SpriteConfig } from "@/types/Sprite";
import type PersonObject from "./PersonObject";

export default class SpriteObject {
  private isLoad: boolean = false;
  image: HTMLImageElement;
  shadow: HTMLImageElement;
  animations: {[key: string]: [number, number][]}
  private currentAnimation: string;
  private currentFrame: number;
  animationFrameLimit: number;
  private animationFrameProgress: number;
  frameHeight: number = 32;
  frameWidth: number = 32;

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
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [[1, 0], [0, 0], [3, 0], [0, 0]],
      "walk-right": [[1, 1], [0, 1], [3, 1], [0, 1]],
      "walk-up": [[1, 2], [0, 2], [3, 2], [0, 2]],
      "walk-left": [[1, 3], [0, 3], [3, 3], [0, 3]],
    };
    
    this.currentAnimation = config.firstAnimation ?? "idle-down";
    this.currentFrame = 0;
    this.animationFrameLimit = config.animationFrameLimit ?? 16;
    this.animationFrameProgress = 16;
  }

  get frame(): [number, number] | undefined {
    // console.log("this.animations", this.animations)
    // console.log (this.currentAnimation)
    return this.animations![this.currentAnimation][this.currentFrame];
  }

  setAnimation(key: string): void {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress(): void {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress--;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentFrame++;
    // console.log("currentFrame", this.currentFrame);

    if (this.frame === undefined) {
      this.currentFrame = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number, centerPerson: PersonObject): void {
    x = x - 8 + withGridX(10.5) - centerPerson.x;
    y = y - 18 + withGridY(10.5) - centerPerson.y;
    
    const [frameX, frameY] = this.frame ?? [0, 0];

    ctx.drawImage(this.image, frameX * this.frameHeight, frameY * this.frameWidth, this.frameHeight, this.frameWidth, x, y, this.frameHeight, this.frameWidth);
    ctx.drawImage(this.shadow, x, y);

    this.updateAnimationProgress();
  }
}
