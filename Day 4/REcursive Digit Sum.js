const N = require('bignumber.js');

let $ = '';

const r = n => n < 10 ? n : f(new N(n).toFixed());

const f = (n, k = 1) => {
  let i = 0;

  for (const c of n) i += +c;

  return r(i * k);
};

process.stdin.on('data', d => $ += d).on('end', () => {
  const [ n, k ] = $.trim().split(/\s+/);
  const ans = f(new N(n).toFixed(), +k);

  console.log(ans);
});