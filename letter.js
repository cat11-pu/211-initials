// letter.js：取首字母（去首尾空白后的第一个字符；按码点取，不按字节切）
export function firstLetter(word) {
  const text = String(word == null ? "" : word).trim();
  if (text === "") {
    const error = new Error("word is empty after trimming");
    error.code = "E_BAD_WORD";
    throw error;
  }
  return String.fromCodePoint(text.codePointAt(0));
}
