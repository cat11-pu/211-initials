// join.js：拼接（基线：一律给空串）
import { firstLetter } from "./letter.js";

const MAX_WORDS = 50000;

export function initialsOf(words) {
  const list = Array.isArray(words) ? words : [];
  if (list.length > MAX_WORDS) {
    const error = new Error("超过单次扫描预算 " + MAX_WORDS + " 词");
    error.code = "E_TOO_MANY_WORDS";
    throw error;
  }
  const letters = new Array(list.length);
  let initials = "";
  for (let i = 0; i < list.length; i += 1) {
    const head = firstLetter(list[i]);
    letters[i] = head;
    initials += head;
  }
  return { initials: initials, letters: letters, length: letters.length };
}
