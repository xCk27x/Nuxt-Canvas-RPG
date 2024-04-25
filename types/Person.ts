import type { ItemConfig } from "./Item";

type PersonInfo = {
  name: string;
  age?: number;
  isPlayerControlled?: boolean;
}

export type PersonConfig = PersonInfo & ItemConfig;