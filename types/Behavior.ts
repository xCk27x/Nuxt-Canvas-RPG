export type BehaviorConfig = {
  type: string;
  direction: string;
  time?: number;
  who?: number;
}

export type BehaviorLoopConfig = BehaviorConfig[];