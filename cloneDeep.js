const deepClone = (input) => {
  let result = Array.isArray(input) ? [] : {};

  if (typeof input !== "object") {
    return input;
  }

  for (let key in input) {
    result[key] = deepClone(input[key]);
  }

  return result;
};

let test = {
  past: [{ day: "31" }, { month: "12" }, { year: "2021" }],
  present: [{ day: "1" }, { month: "01" }, { year: "2022" }],
};

let clone = deepClone(test);

test.past[2].year = "2029";

test;

clone;

console.log(test === clone);
