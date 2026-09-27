// app.js：渲染结果
import { firstLetter } from "./letter.js";
import { initialsOf } from "./join.js";

export function render(spec) {
  const words = spec.words || [];
  const view = initialsOf(words);
  const letters = view.letters || [];
  const initials = String(view.initials === undefined ? "" : view.initials);
  const charLength = Array.from(initials).length;
  return { initials: initials, letters: letters, length: charLength,
           count: letters.length, word_count: words.length,
           length_ok: charLength === letters.length && letters.length === words.length
                      && letters.join("") === initials,
           first: letters.length > 0 ? letters[0] : "" };
}
