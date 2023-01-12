// 드림코딩 221122
// 숫자 간결하게 나타내기
const views = 9744642;
/// 첫번째 파라미터 : 국가 코드
let formatter = new Intl.NumberFormat("ko", {
  notation: "compact",
  compactDisplay: "long",
});

console.log(formatter.format(views)); // 974만

// 가격 간결하게 나타내기
const price = 10000;
formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "usd",
  notation: "compact",
});

console.log(formatter.format(price)); // 1만

// 상대시간 똑똑하게 나타내기
formatter = new Intl.RelativeTimeFormat("ko", {
  numeric: "auto",
});
console.log(formatter.format(1, "day")); // 1일 후
console.log(formatter.format(-3000, "hour")); // 2일 후
console.log(formatter.format(-1, "day")); // 1일 전
console.log(formatter.format(-2, "day")); // 2일 전

// 시작일 구하기
formatter = new Intl.RelativeTimeFormat("ko", {
  numeric: "auto",
});
const today = new Date();
const started = new Date(2019, 10, 12);
const daysPassed = Math.ceil((started - today) / (1000 * 60 * 60 * 24));
console.log("드림코딩 시작일:", formatter.format(daysPassed, "day")); // 드림코딩 시작일 1,106일 전

// 유용한 라이브러리 monent.js 보다 timeago.js
// i18n (다양한 언어에 맞게 포맷을 지원한다.)

// 날짜 시간 제대로 포맷하기
const date = new Date(2019, 10, 12); // 2019년 11월 12
console.log(date.toString()); // Tue Nov 12 2019 00:00:00 GMT:0900 (대한민국 표준시)
console.log(new Intl.DateTimeFormat("en-US").format(date)); // 11/12/2019
console.log(new Intl.DateTimeFormat("ko").format(date)); // 2019. 11. 12.
console.log(date.toLocaleString("ko")); // 2019. 11. 12. 오전 12:00:00
console.log(
  date.toLocaleString("ko", {
    dateStyle: "full",
    timeStyle: "long",
  })
); // 2019년 11월 12일 화요일 오전 12시 0분 0초 GMT+9

console.log(
  date.toLocaleString("ko", {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "short",
    year: 'numeric',
    weekday:'short'
  })
); // 2019년 11월 12일 (화) 오전 12:00
