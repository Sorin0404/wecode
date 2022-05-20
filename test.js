function findEven() {
  let a = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      a.push(i);
    }
  }
  return a;
}
