// join.js：拼接（基线：一律给空串）
import { firstLetter } from "./letter.js";

export function initialsOf(words) {
  const letters = [];
  let initials = "";
  for (const word of words) {
    const letter = firstLetter(word);
    letters.push(letter);
    initials += letter;
  }
  return { initials, letters, length: letters.length };
}
