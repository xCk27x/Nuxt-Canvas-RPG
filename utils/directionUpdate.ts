type p2v = {
  [key: string]: [string, number];
}

const propToVector: p2v = {
  'up': ['y', -2],
  'down': ['y', 2],
  'left': ['x', -2],
  'right': ['x', 2],
}

export default function directionUpdate(direction: string): [string, number] {
  return propToVector[direction];
}