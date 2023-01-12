function solution(A) {
  const bPosition = A.indexOf("b");
  if (bPosition) return true;
  console.log(bPosition);
  const result = A.slice(bPosition).includes("a");

  return !result;
}

const A = "ab";
console.log(solution(A));
