import { customAlphabet } from 'nanoid';

export function createNumericNumber() {
  return Number(customAlphabet('0123456789', 4)());
}
