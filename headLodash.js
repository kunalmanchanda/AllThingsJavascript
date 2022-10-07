import { chain, head, initial, last, tail, split, join, camelCase, kebabCase, snakeCase, random, uniqueId, flatten, flattenDeep, filter, compact, assign, cloneDeep, isEmpty, isNil, isEqual } from "lodash";

let numbers = [1, 2, 3, 4];

console.log(head(numbers));

console.log(tail(numbers));

console.log(last(numbers));

console.log(initial(numbers));

console.log(chain(numbers).tail().value());

console.log(chain("foo").head().value());

console.log(chain("bar").tail().join(", ").value());

console.log(chain(numbers).last().value());

console.log("foo".slice(0, 1));

console.log("foo".slice(0, -1));

console.log(chain("foo").initial().join("").value());

console.log("foo".toUpperCase());

console.log(chain("foo").toUpper().split("").value());

console.log(chain("FOO").toLower().split("").join(", ").value());

console.log("foo/bar.com".split("/"));

console.log(split("foo/bar.com", "/"));

console.log(chain("foo/bar@gmail.com").split("@").tail().value());

console.log(["foo", "bar"].join("/"));

console.log(chain(["foo", "bar"]).join("/").toUpper().value());

console.log(join(["foo", "bar"], ", "));

console.log(chain("This is super quiz").split(" ").join("-").toLower().value());

console.log(
  chain("foo").head().toUpper().value() +
    chain("foo").tail().join("").toLower().value()
);

console.log(camelCase("foo bar -baz"));

console.log(kebabCase("foo bar -baz"));

console.log(snakeCase("foo bar -baz"));

console.log(Math.floor(Math.random() * 100) + 0);

console.log(random(100, false).toString());

console.log(uniqueId("space_x"), uniqueId());

console.log(flattenDeep([[1, 2], [3, 4], [[5, 6]]]));

let arr = [ 1, 2, [3, 4], [ [5, 6], [8, 9] ], [[[[[[10, 11]]]]]] ];

console.log([].concat.apply([], arr));

console.log(flatten(arr));

let flat = (input) => {
  let res = [];

  for (let item of input) {
    if (Array.isArray(item)) res = res.concat(flat(item));
    else res.push(item);
  }

  return res;
};

console.log(flat(arr));

var arr2 = [1, 2, null, 3, undefined, 4, 0, 5, false, 6, ""];

console.log(filter(arr2, Boolean));

console.log(compact(arr2));

var state = {
  isLoading: false,
  data: null,
  error: "abc",
};

var newState = {
  isLoading: true,
  data: {
    id: 1,
    name: "John",
  },
};

console.log(assign(state, newState));

var a = { b: { c: 1 } };

var b = cloneDeep(a);

b.b.foo = 100;

console.log(a, b);

console.log(isEmpty(''))

console.log(isEmpty([]))

console.log(isEmpty({}))

console.log(isEqual(1, '1'))

console.log(isEqual({a: 1}, {a: 11}))

console.log(isNil(undefined))

console.log(isNil(NaN))

console.log(isNil(null))



