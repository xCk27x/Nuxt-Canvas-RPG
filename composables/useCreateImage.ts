export default function useCreateImage() {
  return function createImage(ctx: CanvasRenderingContext2D ,src: string, x: number = 0, y: number = 0) {
    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, x, y);
    }
    image.src = src;
  }
}