let flatten = (arr) => {
  let res = [];

  if (!Array.isArray(arr)) return arr;

  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  }

  return res;
};

let input = [1, 2, 3, [4, 5, [6, 7]], [[[[NaN], [undefined], [8]]]]];

let output = flatten(input);

output;

