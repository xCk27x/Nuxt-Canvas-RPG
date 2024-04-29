export default function nextPosition(x: number, y: number, direction: string): [number, number]{
  const gridSizeX = 16;
  const gridSizeY = 16;
  
  switch (direction) {
    case 'up':
      y -= gridSizeY;
      break;
    case 'down':
      y += gridSizeY;
      break;
    case 'left':
      x -= gridSizeX;
      break;
    case 'right':
      x += gridSizeX;
      break;
  }

  return [ x, y ];
}