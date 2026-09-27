// app.js：渲染结果
import { firstLetter } from "./letter.js";
import { initialsOf } from "./join.js";

export function render(spec) {
  const words = spec.words || [];
  const view = initialsOf(words);
  const letters = view.letters || [];
  const initials = String(view.initials === undefined ? "" : view.initials);
  const length = Number.isFinite(view.length) ? view.length : Array.from(initials).length;
  return { initials: initials, letters: letters, length: length,
           count: letters.length, word_count: words.length,
           length_ok: length === letters.length,
           first: letters.length > 0 ? letters[0] : "" };
}
