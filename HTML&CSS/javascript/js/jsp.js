function ok() {
  alert("그렇군요");
}
function no() {
  alert("네!~~~");
}
function list1(i) {
  if (i == "웹표준") {
    alert("웹표준입니다.");
  } else if (i == "HTML5") {
    alert("HTML5입니다.");
  } else if (i == "JAVASCRIPT") {
    alert("웹JAVASCRIPT입니다.");
  }
}
function q() {
  var ans = document.getElementById("ans_r").value;
  if (ans == "") {
    alert("내용이 없어요");
    document.getElementById("ans_r").focus();
  } else if (ans == "a" || ans == "A") {
    alert("정답입니다");
  } else {
    alert("틀렸어요... 다시 입력해주세요");
    document.getElementById("ans_r").value = "";
    document.getElementById("ans_r").focus();
  }
}
