import assert from "node:assert";
import { firstLetter } from "../letter.js";
import { initialsOf } from "../join.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("firstLetter returns text", () => {
  assert.strictEqual(typeof firstLetter("alpha"), "string");
});

check("initialsOf returns an initials string", () => {
  assert.strictEqual(typeof initialsOf(["ab"]).initials, "string");
});

check("initialsOf returns letters list", () => {
  assert.ok(Array.isArray(initialsOf(["ab"]).letters));
});

check("render counts words", () => {
  assert.strictEqual(typeof render({ words: ["ab"] }).word_count, "number");
});

check("render exposes length flag", () => {
  assert.strictEqual(typeof render({ words: ["ab"] }).length_ok, "boolean");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
