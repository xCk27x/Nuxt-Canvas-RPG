import type { ItemConfig } from "./Item";
import type { BehaviorLoopConfig } from "./Behavior";

type PersonInfo = {
  name: string;
  age?: number;
  isPlayerControlled?: boolean;
  firstDirection?: string;
  behaviorLoop?: BehaviorLoopConfig;
}

export type PersonConfig = PersonInfo & ItemConfig;