let bold = document.querySelector(".bold");
let superscript = document.querySelector(".superscript");
let text = document.querySelector(".text-box");
let subscript = document.querySelector(".subscript");
let ol = document.querySelector(".ol");
let uol = document.querySelector(".uol");
let undo = document.querySelector(".undo");
let redoText = document.querySelector(".redo");
let alignLeft = document.querySelector(".alignLeft");
let alignCenter = document.querySelector(".alignCenter");
let alignRight = document.querySelector(".alignRight");
let justify = document.querySelector(".justify");
let indent = document.querySelector(".indent");
let outdent = document.querySelector(".outdent");
let color = document.querySelector(".color");
let bgcolor = document.querySelector(".bgcolor");
function boldText() {
  let isbold = true;
  if (isbold) {
    text = document.execCommand("bold");
    isbold = !isbold;
  } else {
    text = document.execCommand("removeFormate");
    isbold = !isbold;
  }
}
function superScriptText() {
  let issuper = true;
  if (issuper) {
    text = document.execCommand("superscript");
    issuper = !issuper;
  } else {
    text = document.execCommand("removeFormate");
    issuper = !issuper;
  }
}
function subScriptText() {
  let issub = true;
  if (issub) {
    text = document.execCommand("subscript");
    issub = !issub;
  } else {
    text = document.execCommand("removeFormate");
    issub = !issub;
  }
}
function olText() {
  let isol = true;
  if (isol) {
    text = document.execCommand("insertOrderedList");
    isol = !isol;
  } else {
    text = document.execCommand("removeFormate");
    isol = !isol;
  }
}
function uolText() {
  let isuol = true;
  if (isuol) {
    text = document.execCommand("insertUnorderedList");
    isuol = !isuol;
  } else {
    text = document.execCommand("removeFormate");
    isuol = !isuol;
  }
}
function undoText() {
  let undo = true;
  if (undo) {
    text = document.execCommand("undo");
    undo = !undo;
  } else {
    text = document.execCommand("removeFormate");
    undo = !undo;
  }
}
function redo() {
  let redo = true;
  if (redo) {
    text = document.execCommand("redo");
    redo = !redo;
  } else {
    text = document.execCommand("removeFormate");
    redo = !redo;
  }
}
function alignLeftText() {
  let alignLeft = true;
  if (alignLeft) {
    text = document.execCommand("justifyLeft");
    alignLeft = !alignLeft;
  } else {
    text = document.execCommand("removeFormate");
    alignLeft = !alignLeft;
  }
}
function alignCenterText() {
  let alignCenter = true;
  if (alignCenter) {
    text = document.execCommand("justifyCenter");
    alignCenter = !alignCenter;
  } else {
    text = document.execCommand("removeFormate");
    alignCenter = !alignCenter;
  }
}
function alignRightText() {
  let alignRight = true;
  if (alignRight) {
    text = document.execCommand("justifyRight");
    alignRight = !alignRight;
  } else {
    text = document.execCommand("removeFormate");
    alignRight = !alignRight;
  }
}
function justifyText() {
  let justify = true;
  if (justify) {
    text = document.execCommand("justifyFull", false, null);
    justify = !justify;
  } else {
    text = document.execCommand("removeFormate");
    justify = !justify;
  }
}
function indentText() {
  let indent = true;
  if (indent) {
    text = document.execCommand("indent", false, null);
    indent = !indent;
  } else {
    text = document.execCommand("removeFormate");
    indent = !indent;
  }
}
function outdentText() {
  let outdent = true;
  if (outdent) {
    text = document.execCommand("outdent", false, null);
    outdent = !outdent;
  } else {
    text = document.execCommand("removeFormate");
    outdent = !outdent;
  }
}
function colorText() {
  let seleteColor = prompt("enter your color");
  if (seleteColor) {
    text = document.execCommand("foreColor", false, seleteColor);
  }
}
function bgcolorText() {
  let seleteColor = prompt("enter your backgroundcolor");
  if (seleteColor) {
    text = document.execCommand("backColor", false, seleteColor);
  }
}
bold.addEventListener("click", boldText);
superscript.addEventListener("click", superScriptText);
subscript.addEventListener("click", subScriptText);
ol.addEventListener("click", olText);
uol.addEventListener("click", uolText);
undo.addEventListener("click", undoText);
redoText.addEventListener("click", redo);
alignLeft.addEventListener("click", alignLeftText);
alignCenter.addEventListener("click", alignCenterText);
alignRight.addEventListener("click", alignRightText);
justify.addEventListener("click", justifyText);
indent.addEventListener("click", indentText);
outdent.addEventListener("click", outdentText);
color.addEventListener("click", colorText);
bgcolor.addEventListener("click", bgcolorText);
