import asGridCoord from "./asGridCoord";

export default function asGridCoordXY(x: [number, number], y: [number, number]): {[key: string]: Boolean} {
  if (x[0] > x[1]) throw new Error('Invalid X grid coord');
  if (y[0] > y[1]) throw new Error('Invalid Y grid coord');
  
  const re: {[key: string]: Boolean} = {}

  for (let i = x[0]; i <= x[1]; i++) {
    for (let j = y[0]; j <= y[1]; j++) {
      re[asGridCoord(i, j)] = true;
    }
  }
  
  return re;
}