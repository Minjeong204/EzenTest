//ex1

new Vue({
  el: "#ex1",
  data: {
    t_message: "안녕하세요",
  },
});
//ex2
new Vue({
  el: ".ex2",
  data: {
    t_message: "반가워요",
  },
});
//ex3
new Vue({
  el: "#ex3",
  data: {
    message: "반가워요",
    name: "vue",
    age: 24,
  },
});
//ex4
new Vue({
  el: "#ex4",
  data: {
    message: "졸려요",
    person: {
      name: "vue",
      age: 24,
    },
  },
});
//ex5
new Vue({
  el: "#ex5",
  data: {
    message: "<strong>Hello</strong>",
  },
});
//ex6
new Vue({
  el: "#ex6",
  data: {
    price: 1000,
    name: "ABC",
  },
});
//ex7
new Vue({
  el: "#ex7",
  data: {
    web: ["html", "css", "javascript,vue"],
    object: { name: "true", price1: 500, price2: 1000 },
  },
});
//ex8
new Vue({
  el: "#ex8",
  data: {
    // txt: "vue입니다. 오늘 날짜 : " + new Date(),
    txt: "vue입니다. 오늘 날짜 : " + new Date().toLocaleString(),
  },
});
//ex9
new Vue({
  el: "#ex9",
  data: {
    link: "http://www.naver.com",
    target: "_blank",
    title: "네이버로 연결합니다.",
  },
});
//ex10
new Vue({
  el: "#ex10",
  data: {
    v_data: "hello!!!!",
  },
});
//ex11
new Vue({
  el: "#ex11",
  data: {
    v_data: "졸려요",
    type1: "password",
    type2: "button",
  },
});
//ex12
new Vue({
  el: "#ex12",
  data: {
    msg: "안녕하세요",
  },
});
//ex13
new Vue({
  el: "#ex13",
  data: {
    year: 2022,
  },
  methods: {
    plus() {
      this.year++;
    },
    minus() {
      this.year--;
    },
  },
});
//ex14
new Vue({
  el: "#ex14",
  data: {
    text: "",
  },
  methods: {
    oneclick() {
      this.text = "click";
    },
  },
});
//ex15
new Vue({
  el: "#ex15",
  data: {
    count: 0,
  },
  methods: {
    plus(num) {
      this.count += 1;
    },
  },
});
//ex16
new Vue({
  el: "#ex16",
  data: {},
  methods: {
    alert() {
      alert("이벤트를 실행한댑니다.");
    },
  },
});
//ex17
new Vue({
  el: "#ex17",
  data: {
    txt: true,
  },
  methods: {
    toggle() {
      this.txt = !this.txt;
    },
  },
});
//ex18
new Vue({
  el: "#ex18",
  data: {
    code1: [
      { txt: "html" },
      { txt: "css" },
      { txt: "javascript" },
      { txt: "jquery" },
    ],
  },
});
//ex19
new Vue({
  el: "#ex19",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.toLowerCase();
    },
  },
});
//ex20
new Vue({
  el: "#ex20",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.indexOf("S");
    },
  },
});
//ex21
new Vue({
  el: "#ex21",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.indexOf("a");
    },
  },
});
//ex22
new Vue({
  el: "#ex22",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.charAt(4); //인덱스 번호 데이터
    },
  },
});
//ex23
new Vue({
  el: "#ex23",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.substring(2, 4); //n1번부터 n2번-1 인덱스까지의 데이터
    },
  },
});
//ex24
new Vue({
  el: "#ex24",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.length(2, 4); //개수
    },
  },
});
//ex25
new Vue({
  el: "#ex25",
  data: {
    msg: "JAVASCRIPT",
  },
  computed: {
    r_msg() {
      return this.msg.replace("PT", "aaaa"); //n1을 n2로 치환
    },
  },
});
