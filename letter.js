// letter.js：取首字母（去首尾空白后取第一个字符，多字节按一个字符算）
export function firstLetter(word) {
  const text = String(word == null ? "" : word).trim();
  if (text === "") {
    const error = new Error("词去空白后为空，无法取首字母");
    error.code = "E_BAD_WORD";
    throw error;
  }
  return String.fromCodePoint(text.codePointAt(0));
}
