import type { ItemConfig } from "./Item";

type PersonInfo = {
  name: string;
  age?: number;
  isPlayerControlled?: boolean;
  firstDirection?: string;
}

export type PersonConfig = PersonInfo & ItemConfig;