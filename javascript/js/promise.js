"use strict";

// 프로미스는 비동기 작업을 위한 자바스크립트 객체이다.
// State : pending -> fulfilled or rejected
// 공급자 (Producer) vs 수신자 (Consumer)

// 1. Producer
// 새 Promise가 생성되면 Executor(프로미스 안에 정의하는 코드)가 자동으로 실행됩니다.

const promise = new Promise((resolve, reject) => {
  // Executor
  // 무거운 작업 수행(예: 네트워크, 파일 읽기)
  console.log("doing something...");
  // 네트워크 통신 예제
  setTimeout(() => {
    //성공적으로 받아온 데이터를 resolve라는 콜백함수를 통해 전달한다.
    resolve("ellie");
    // reject는 보통 에러를 전달한다
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용해서 값을 받아 올 수 있다.
// then : 프로미스가 정상적으로 실행되고 넘겨준 데이터를 받아온다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((number) => number * 2)
  .then((number) => number * 3)
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(number - 1), 1000);
    });
  })
  .then((num) => {
    console.log(num);
  });

// 4. Error Handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen}=> 알`), 1000);
    setTimeout(() => reject(new Error(`${hen}=> 알`)), 1000);
  });
};

const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 후라이`), 1000);
  });
};

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "빵";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
