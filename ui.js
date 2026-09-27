// ui.js：操作面板与视图（原生 DOM，无弹窗）
import { render } from "./app.js";

export function mount(spec, parts) {
  parts.log.textContent = "词 " + (spec.words || []).length + " 个，点提取看首字母串。";

  function draw() {
    let view = null;
    try {
      view = render(spec);
    } catch (error) {
      parts.out.textContent = String(error && error.code ? error.code : error);
      parts.log.textContent = "跑不动：" + String(error && error.message ? error.message : error);
      return;
    }
    parts.out.textContent = JSON.stringify(view, null, 1);
    parts.stage.textContent = "";
    const row = document.createElement("div");
    row.className = "row";
    const head = document.createElement("span");
    head.textContent = "首字母串";
    row.appendChild(head);
    const mark = document.createElement("span");
    mark.className = "chip ok";
    mark.textContent = view.initials === "" ? "（空）" : view.initials;
    row.appendChild(mark);
    parts.stage.appendChild(row);
    (spec.words || []).forEach(function (word, spot) {
      const line = document.createElement("div");
      line.className = "row";
      line.textContent = (spot + 1) + ". " + word + " → " + view.letters[spot];
      parts.stage.appendChild(line);
    });
    parts.legend.textContent = "词数 " + view.count + "，首字母串长度 " + view.length;
    parts.log.textContent = "首字母串是否与长度一致 " + view.length_ok;
  }

  const runButton = document.createElement("button");
  runButton.className = "primary";
  runButton.textContent = "提取首字母";
  runButton.addEventListener("click", draw);
  parts.controls.appendChild(runButton);

  const addButton = document.createElement("button");
  addButton.textContent = "追加一个词";
  addButton.addEventListener("click", function () {
    spec.words = (spec.words || []).concat(["zulu"]);
    draw();
  });
  parts.controls.appendChild(addButton);

  const dropButton = document.createElement("button");
  dropButton.textContent = "去掉最后一个";
  dropButton.addEventListener("click", function () {
    spec.words = (spec.words || []).slice(0, -1);
    draw();
  });
  parts.controls.appendChild(dropButton);

  const label = document.createElement("label");
  label.textContent = "试一个词";
  parts.controls.appendChild(label);

  const box = document.createElement("input");
  box.type = "text";
  box.value = "zulu";
  box.addEventListener("input", function () {
    try {
      const view = render(Object.assign({}, spec, { words: (spec.words || []).concat([box.value]) }));
      parts.out.textContent = "加入 " + box.value + " 后首字母串是 " + view.initials;
    } catch (error) {
      parts.out.textContent = String(error && error.code ? error.code : error);
    }
  });
  parts.controls.appendChild(box);

  const readButton = document.createElement("button");
  readButton.textContent = "只看首字母串长度";
  readButton.addEventListener("click", function () {
    const view = render(spec);
    parts.out.textContent = "首字母串长度 " + view.length + "，词数 " + view.count;
  });
  parts.controls.appendChild(readButton);

  draw();
}
