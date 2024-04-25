type p2v = {
  [key: string]: [string, number];
}

const propToVector: p2v = {
  'Up': ['y', -1],
  'Down': ['y', 1],
  'Left': ['x', -1],
  'Right': ['x', 1],
  'up': ['y', -1],
  'down': ['y', 1],
  'left': ['x', -1],
  'right': ['x', 1]
}

export default function directionUpdate(direction: string): [string, number] {
  return propToVector[direction];
}